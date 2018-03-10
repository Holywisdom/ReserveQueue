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
const accountSid = 'ACbdb6be10c8e23b59bb6e430b9a760344'
const authToken  = '8f40eede7f93902a8b18847f68b0f6ce'

const client = new twilio(accountSid, authToken);

const twilioNumber = '+15103437436' // your twilio phone number


/// start cloud function

exports.textStatus = functions.database
       .ref('/orders/{orderKey}/status')
       .onUpdate(event => {


    const orderKey = event.params.orderKey

    return admin.database()
                .ref(`/orders/${orderKey}`)
                .once('value')
                .then(snapshot => snapshot.val())
                .then(order => {
                    const status      = order.status
                    const phoneNumber = order.phoneNumber

                    if ( !validE164(phoneNumber) ) {
                        throw new Error('number must be E164 format!')
                    }

                    const textMessage = {
                        body: `Current order status: ${status}`,
                        to: phoneNumber,  // Text to this number
                        from: twilioNumber // From a valid Twilio number
                    }

                    return client.messages.create(textMessage)
                })
                .then(message => console.log(message.sid, 'success'))
                .catch(err => console.log(err))


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

// ACbdb6be10c8e23b59bb6e430b9a760344

// 8f40eede7f93902a8b18847f68b0f6ce
