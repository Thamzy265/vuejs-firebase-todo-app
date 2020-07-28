import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD4S4uepdG_Qjn34htlfQr7jHBi0B4VTBM",
    authDomain: "vue-todo-app-525ef.firebaseapp.com",
    databaseURL: "https://vue-todo-app-525ef.firebaseio.com",
    projectId: "vue-todo-app-525ef",
    storageBucket: "vue-todo-app-525ef.appspot.com",
    messagingSenderId: "210969131956",
    appId: "1:210969131956:web:7e551b5fc31ae26281d0e1",
    measurementId: "G-EGTJQND4Q9"
  });

 const db = firebaseApp.firestore();
 
 export default db;