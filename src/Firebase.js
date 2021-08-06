
import firebase from 'firebase'
// import firestore from 'firebase/firestore';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore'
// const settings = { timestampsInSnapshot: true, merge: true };



var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings(settings);
  export default firebase;
