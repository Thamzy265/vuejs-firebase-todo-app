import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    //Enter in your firebase configuration here
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  });

 const db = firebaseApp.firestore();
 
 export default db;