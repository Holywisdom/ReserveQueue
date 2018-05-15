// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const twilio = require('twilio');
const accountSid = functions.config().twilio.sid
const authToken  = functions.config().twilio.token
const client = new twilio(accountSid, authToken);
const twilioNumber = '+15103437436' // your twilio phone number

const cors = require('cors')({origin: true});
const paypal = require('paypal-rest-sdk');

// Configure your environment
paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: functions.config().paypal.client_id, // run: firebase functions:config:set paypal.client_id="yourPaypalClientID"
  client_secret: functions.config().paypal.client_secret // run: firebase functions:config:set paypal.client_secret="yourPaypalClientSecret"
});

function ShothandSlot (SelectedSlot) {
  const time = {
    'slot01': '08:00-09:30',
    'slot02': '09:30-11:00',
    'slot03': '11:00-12:30',
    'slot04': '12:30-14:00',
    'slot05': '14:00-15:30',
    'slot06': '15:30-17:00',
    'slot07': '17:00-18:30',
    'slot08': '18:30-20:00',
    'slot09': '20:00-21:30'
  }

  var key = Object.keys(SelectedSlot)
  key.sort()
  const list = key.map(x => parseInt(x.slice(-2)))

  function minus (x, y) {
    if (y - x === 1) {
      return true
    } else {
      return false
    }
  }

  function sliceString (first, last) {
    return time[first].slice(0, 6) + time[last].slice(-5)
  }

  var state = false

  var startNum = ''
  var endNum = []

  for (var i = 0; i < list.length; i++) {
    if (minus(list[i], list[i + 1]) === true) {
      if (state === false) {
        startNum = list[i]
        state = true
      }
    } else {
      if (startNum === '') {
        endNum.push(list[i])
      } else {
        endNum.push([startNum, list[i]])
      }
      state = false
      startNum = ''
    }
  }

  var SlotTime = []

  endNum.forEach(slot => {
    if (slot.length > 1) {
      var textFirst = `slot0${slot[0]}`
      var textLast = `slot0${slot[1]}`
      SlotTime.push(sliceString(textFirst, textLast))
    } else {
      var text = `slot0${slot}`
      SlotTime.push(time[text])
    }
  })
  return SlotTime
}

function MakeQueueCode() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

exports.SendSMS = functions.firestore.document('/Queue/{QueueKey}').onCreate(event => {
  var newQueue = event.data.data();
  const PhoneNum = newQueue.PhoneNumber
  const QueueCode = newQueue.QueueCode
  const Time = newQueue.Time
  const Name = newQueue.Name


  GlobalPhoneNumber = "+66" + PhoneNum.slice(1)

  if ( !validE164(GlobalPhoneNumber) ) {
    throw new Error('number must be E164 format!')
  }

  const textMessage = {
      body: `Please bring this code to the restaurant to confirm your identity
      Code : ${QueueCode}
      Time : ${Time}
      Customer Name : ${Name}
      Phone Number : ${PhoneNum}`,
      to: GlobalPhoneNumber,  // Text to this number
      from: twilioNumber // From a valid Twilio number
  }
  return client.messages.create(textMessage)
         .then(message => console.log(message.sid, 'success'))
         .catch(err => console.log(err))
});

/// Validate E164 format
function validE164(num) {
    return /^\+?[1-9]\d{1,14}$/.test(num)
}

exports.pay = functions.https.onRequest((req, res) => {
  // 1.Set up a payment information object, Nuild PayPal payment request
  const payReq = JSON.stringify({
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: `${req.protocol}://${req.get('host')}/process`,
      cancel_url: `${req.protocol}://${req.get('host')}/cancel`
    },
    transactions: [{
      amount: {
        total: req.query.price,
        currency: 'THB'
      },
      // This is the payment transaction description. Maximum length: 127
      description: req.query.description, // req.body.id
      // reference_id string .Optional. The merchant-provided ID for the purchase unit. Maximum length: 256.
      reference_id: req.query.reference,
      // custom: req.query.phone,
      soft_descriptor: req.query.soft,
      "invoice_number": req.query.payment
    }]
  });
  // 2.Initialize the payment and redirect the user.
  paypal.payment.create(payReq, (error, payment) => {
    const links = {};
    if (error) {
      console.error(error);
      res.status('500').end();
    } else {
      // Capture HATEOAS links
      payment.links.forEach((linkObj) => {
        links[linkObj.rel] = {
          href: linkObj.href,
          method: linkObj.method
        };
      });
      // If redirect url present, redirect user
      if (links.hasOwnProperty('approval_url')) {
        // REDIRECT USER TO links['approval_url'].href
        console.info(links.approval_url.href);
        // res.json({"approval_url":links.approval_url.href});
        res.redirect(302, links.approval_url.href);
      } else {
        console.error('no redirect URI present');
        res.status('500').end();
      }
    }
  });
});

// 3.Complete the payment. Use the payer and payment IDs provided in the query string following the redirect.
exports.process = functions.https.onRequest((req, res) => {
  const paymentId = req.query.paymentId;
  const payerId = {
    payer_id: req.query.PayerID
  };
  return paypal.payment.execute(paymentId, payerId, (error, payment) => {
    if (error) {
      console.error(error);
      res.redirect(`https://reservequeue.firebaseapp.com/error`); // replace with your url page error
    } else {
      if (payment.state === 'approved') {
        console.info('payment completed successfully, description: ', payment.transactions[0].description);
        // console.info('req.custom: : ', payment.transactions[0].custom);
        // set paid status to True in RealTime Database
        const date = Date.now();
        const PaymentKey = payment.transactions[0].invoice_number
        const QueueRef = admin.firestore().collection('Queue')
        const PaymentRef = admin.firestore().collection('Payment')
        const SlotRef = admin.firestore().collection('Slot')
        const getPaymentData = PaymentRef.doc(PaymentKey).get()
        return Promise.resolve(getPaymentData).then(result => {
          var DataSnapshot = result.data()
          const { Name, PhoneNumber, TableSeatNumber, SelectedSlot, Note, TableKey, TableName, PaymentTimestamp } = DataSnapshot
          var Slot = SelectedSlot
          Object.keys(Slot).map(key => {
            Slot[key] = 'reserved'
          })
          SlotRef.doc(TableKey).set(
            Slot
          ,{merge: true}
          )
          ShothandSlot(SelectedSlot).forEach(SlotItem => {
            const Code =  MakeQueueCode()
            QueueRef.add({
              Name: Name,
              Note: Note,
              PhoneNumber: PhoneNumber,
              TableName: TableName,
              TableSeatNumber: TableSeatNumber,
              Time: SlotItem,
              QueueCode: Code
            })
          })
          res.redirect(`https://reservequeue.firebaseapp.com/success`); // replace with your url, page success
        })
      } else {
        console.warn('payment.state: not approved ?');
        // replace debug url
        res.redirect(`https://console.firebase.google.com/project/${process.env.GCLOUD_PROJECT}/functions/logs?search=&severity=DEBUG`);
      }
    }
  })
  // .then(r => console.info('promise: ', r));
});

exports.WaitingSlot = functions.https.onRequest((req, res) => {

  const WaitingSlotRef1 = admin.firestore().collection('WaitingSlot').doc('1x9JWDk0DcpIump1Xvsh')
  const WaitingSlotRef2 = admin.firestore().collection('WaitingSlot').doc('5LBPP9CDUTQ0H1EOxg2F')
  const WaitingSlotRef3 = admin.firestore().collection('WaitingSlot').doc('9nuGPOnzbGPd20m4TMTb')
  const WaitingSlotRef4 = admin.firestore().collection('WaitingSlot').doc('FvZPiIxomUhBD5odUAar')
  const WaitingSlotRef5 = admin.firestore().collection('WaitingSlot').doc('Q3m0x75uYUgvBFVBkDyE')
  const WaitingSlotRef6 = admin.firestore().collection('WaitingSlot').doc('Vrtqxe2iMavlDGSP18pp')
  const WaitingSlotRef7 = admin.firestore().collection('WaitingSlot').doc('WAZ3xd3usAkelLbBFqLT')
  const WaitingSlotRef8 = admin.firestore().collection('WaitingSlot').doc('Zcf6qq1yDWf1SoWjabxL')
  const WaitingSlotRef9 = admin.firestore().collection('WaitingSlot').doc('iIAMz4r2tcyTXzvsQrSl')
  const WaitingSlotRef10 = admin.firestore().collection('WaitingSlot').doc('pZMLbIg6rPGRMV1WbaIw')

  const WaitingSlotData1 = WaitingSlotRef1.get()
  const WaitingSlotData2 = WaitingSlotRef2.get()
  const WaitingSlotData3 = WaitingSlotRef3.get()
  const WaitingSlotData4 = WaitingSlotRef4.get()
  const WaitingSlotData5 = WaitingSlotRef5.get()
  const WaitingSlotData6 = WaitingSlotRef6.get()
  const WaitingSlotData7 = WaitingSlotRef7.get()
  const WaitingSlotData8 = WaitingSlotRef8.get()
  const WaitingSlotData9 = WaitingSlotRef9.get()
  const WaitingSlotData10 = WaitingSlotRef10.get()


  return Promise.all([WaitingSlotData1,WaitingSlotData2,WaitingSlotData3,WaitingSlotData4,WaitingSlotData5,WaitingSlotData6,WaitingSlotData7,WaitingSlotData8,WaitingSlotData9,WaitingSlotData10]).then(result => {

    var DataSnapshot1 = result['0'].data()
    var DataSnapshot2 = result['1'].data()
    var DataSnapshot3 = result['2'].data()
    var DataSnapshot4 = result['3'].data()
    var DataSnapshot5 = result['4'].data()
    var DataSnapshot6 = result['5'].data()
    var DataSnapshot7 = result['6'].data()
    var DataSnapshot8 = result['7'].data()
    var DataSnapshot9 = result['8'].data()
    var DataSnapshot10 = result['9'].data()

    var now = new Date()

    // console.log("Now : " , Date.parse(now))

    // console.log(Date.parse(now) - Date.parse(DataSnapshot1[slotKey]))
    // console.log(Date.parse(DataSnapshot1[slotKey]))

    Object.keys(DataSnapshot1).forEach(slotKey => {
      if (Date.parse(now) - Date.parse(DataSnapshot1[slotKey]) >= 360000) {
        delete DataSnapshot1[slotKey]
        var payload = {}
        payload[slotKey] = 'empty'
        admin.firestore().collection('Slot').doc('1x9JWDk0DcpIump1Xvsh').set(payload, { merge: true })
      }
      WaitingSlotRef1.set(DataSnapshot1)
    })

    Object.keys(DataSnapshot2).forEach(slotKey => {
      if (Date.parse(now) - Date.parse(DataSnapshot2[slotKey]) >= 360000) {
        delete DataSnapshot2[slotKey]
        var payload = {}
        payload[slotKey] = 'empty'
        admin.firestore().collection('Slot').doc('5LBPP9CDUTQ0H1EOxg2F').set(payload, { merge: true })
      }
      WaitingSlotRef2.set(DataSnapshot2)
    })

    Object.keys(DataSnapshot3).forEach(slotKey => {
      if (Date.parse(now) - Date.parse(DataSnapshot3[slotKey]) >= 360000) {
        delete DataSnapshot3[slotKey]
        var payload = {}
        payload[slotKey] = 'empty'
        admin.firestore().collection('Slot').doc('9nuGPOnzbGPd20m4TMTb').set(payload, { merge: true })
      }
      WaitingSlotRef3.set(DataSnapshot3)
    })

    Object.keys(DataSnapshot4).forEach(slotKey => {
      if (Date.parse(now) - Date.parse(DataSnapshot4[slotKey]) >= 360000) {
        delete DataSnapshot4[slotKey]
        var payload = {}
        payload[slotKey] = 'empty'
        admin.firestore().collection('Slot').doc('FvZPiIxomUhBD5odUAar').set(payload, { merge: true })
      }
      WaitingSlotRef4.set(DataSnapshot4)
    })

    Object.keys(DataSnapshot5).forEach(slotKey => {
      if (Date.parse(now) - Date.parse(DataSnapshot5[slotKey]) >= 360000) {
        delete DataSnapshot5[slotKey]
        var payload = {}
        payload[slotKey] = 'empty'
        admin.firestore().collection('Slot').doc('Q3m0x75uYUgvBFVBkDyE').set(payload, { merge: true })
      }
      WaitingSlotRef5.set(DataSnapshot5)
    })

    Object.keys(DataSnapshot6).forEach(slotKey => {
      if (Date.parse(now) - Date.parse(DataSnapshot6[slotKey]) >= 360000) {
        delete DataSnapshot6[slotKey]
        var payload = {}
        payload[slotKey] = 'empty'
        admin.firestore().collection('Slot').doc('Vrtqxe2iMavlDGSP18pp').set(payload, { merge: true })
      }
      WaitingSlotRef6.set(DataSnapshot6)
    })

    Object.keys(DataSnapshot7).forEach(slotKey => {
      if (Date.parse(now) - Date.parse(DataSnapshot7[slotKey]) >= 360000) {
        delete DataSnapshot7[slotKey]
        var payload = {}
        payload[slotKey] = 'empty'
        admin.firestore().collection('Slot').doc('WAZ3xd3usAkelLbBFqLT').set(payload, { merge: true })
      }
      WaitingSlotRef7.set(DataSnapshot7)
    })

    Object.keys(DataSnapshot8).forEach(slotKey => {
      if (Date.parse(now) - Date.parse(DataSnapshot8[slotKey]) >= 360000) {
        delete DataSnapshot8[slotKey]
        var payload = {}
        payload[slotKey] = 'empty'
        admin.firestore().collection('Slot').doc('Zcf6qq1yDWf1SoWjabxL').set(payload, { merge: true })
      }
      WaitingSlotRef8.set(DataSnapshot8)
    })

    Object.keys(DataSnapshot9).forEach(slotKey => {
      if (Date.parse(now) - Date.parse(DataSnapshot9[slotKey]) >= 360000) {
        delete DataSnapshot9[slotKey]
        var payload = {}
        payload[slotKey] = 'empty'
        admin.firestore().collection('Slot').doc('iIAMz4r2tcyTXzvsQrSl').set(payload, { merge: true })
      }
      WaitingSlotRef9.set(DataSnapshot9)
    })

    Object.keys(DataSnapshot10).forEach(slotKey => {
      if (Date.parse(now) - Date.parse(DataSnapshot10[slotKey]) >= 360000) {
        delete DataSnapshot10[slotKey]
        var payload = {}
        payload[slotKey] = 'empty'
        admin.firestore().collection('Slot').doc('pZMLbIg6rPGRMV1WbaIw').set(payload, { merge: true })
      }
      WaitingSlotRef10.set(DataSnapshot10)
    })

    res.status(200).send('Work !')
  })
})

// SMS

// ACbdb6be10c8e23b59bb6e430b9a760344
// 8f40eede7f93902a8b18847f68b0f6ce

//Paypal

// ARmtYbqBu4ob9U_EjWmKfQkoSwPUwJqZpgaqsHNqYJ1_vDKZMtk-3fO_JMEfmSa2SSgZ2rM1MZ6rhcqp
// EB7Nzo7GbDRjDzezFucAH7t5OqLWUEjhMC0ExDDPyq4ZHl2UQGmSEhoG4xzmVnnMVqTieVphf0aCgV_r
