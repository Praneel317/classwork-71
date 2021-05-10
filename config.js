import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDqy4-ZFTk1O3x6nqWEmwpTfGbHGdB3cQM",
    authDomain: "class-c71.firebaseapp.com",
    projectId: "class-c71",
    storageBucket: "class-c71.appspot.com",
    messagingSenderId: "802464914676",
    appId: "1:802464914676:web:4080b39efbf710b323d2a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()