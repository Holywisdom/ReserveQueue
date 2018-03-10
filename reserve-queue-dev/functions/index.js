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

exports.SendSMS = functions.firestore.document('/Queue/{QueueKey}').onCreate(event => {
  var newQueue = event.data.data();
  PhoneNum = newQueue.PhoneNumber

  GlobalPhoneNumber = "+66" + PhoneNum.slice(1)

  if ( !validE164(GlobalPhoneNumber) ) {
    throw new Error('number must be E164 format!')
  }

  const textMessage = {
      body: `Queue Code: 1234`,
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
      description: req.query.uid, // req.body.id
      // reference_id string .Optional. The merchant-provided ID for the purchase unit. Maximum length: 256.
      // reference_id: req.body.uid,
      custom: req.query.uid,
      // soft_descriptor: req.body.uid
      // "invoice_number": req.body.uid,A
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
      res.redirect(`${req.protocol}://${req.get('host')}/error`); // replace with your url page error
    } else {
      if (payment.state === 'approved') {
        console.info('payment completed successfully, description: ', payment.transactions[0].description);
        // console.info('req.custom: : ', payment.transactions[0].custom);
        // set paid status to True in RealTime Database
        const date = Date.now();
        const uid = payment.transactions[0].description;
        const ref = admin.database().ref('users/' + uid + '/');
        ref.push({
          'paid': true,
          // 'description': description,
          'date': date
        })
        res.redirect(`${req.protocol}://${req.get('host')}/success`); // replace with your url, page success
      } else {
        console.warn('payment.state: not approved ?');
        // replace debug url
        res.redirect(`https://console.firebase.google.com/project/${process.env.GCLOUD_PROJECT}/functions/logs?search=&severity=DEBUG`);
      }
    }
  })
  // .then(r => console.info('promise: ', r));
});

// SMS

// ACbdb6be10c8e23b59bb6e430b9a760344
// 8f40eede7f93902a8b18847f68b0f6ce

//Paypal

// ARmtYbqBu4ob9U_EjWmKfQkoSwPUwJqZpgaqsHNqYJ1_vDKZMtk-3fO_JMEfmSa2SSgZ2rM1MZ6rhcqp
// EB7Nzo7GbDRjDzezFucAH7t5OqLWUEjhMC0ExDDPyq4ZHl2UQGmSEhoG4xzmVnnMVqTieVphf0aCgV_r
