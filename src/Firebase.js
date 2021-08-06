
import firebase from 'firebase'
// import firestore from 'firebase/firestore';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore'
// const settings = { timestampsInSnapshot: true, merge: true };



var firebaseConfig = {
    apiKey: "AIzaSyDk4DGYmBZQ5z7KpLksnjZKKWKzFgBO4qs",
    authDomain: "vuejs-62a49.firebaseapp.com",
    databaseURL: "https://vuejs-62a49-default-rtdb.firebaseio.com",
    projectId: "vuejs-62a49",
    storageBucket: "vuejs-62a49.appspot.com",

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings(settings);
  export default firebase;