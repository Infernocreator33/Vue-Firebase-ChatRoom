import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyDUOaHGlGAi7qd5lo72URKW69lxGrD-Gns",
    authDomain: "chat-zack.firebaseapp.com",
    databaseURL: "https://chat-zack.firebaseio.com",
    projectId: "chat-zack",
    storageBucket: "chat-zack.appspot.com",
    messagingSenderId: "200079368912",
    appId: "1:200079368912:web:39635421558cbc02"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()