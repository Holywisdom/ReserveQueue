import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDv_LxTOumWfNMMpkV4tGSXLzIuJsRGUYo",
  authDomain: "reservequeue.firebaseapp.com",
  databaseURL: "https://reservequeue.firebaseio.com",
  projectId: "reservequeue",
  storageBucket: "reservequeue.appspot.com",
  messagingSenderId: "685970468936"
});

export const db = firebaseApp.firestore();
