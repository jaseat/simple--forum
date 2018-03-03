import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDaqd2eBwqkrNWtH_1ZZBv_mYmMnBCLG_s",
    authDomain: "simple-discussion-form.firebaseapp.com",
    databaseURL: "https://simple-discussion-form.firebaseio.com",
    projectId: "simple-discussion-form",
    storageBucket: "simple-discussion-form.appspot.com",
    messagingSenderId: "288807734575"
  };
  firebase.initializeApp(config);

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});


  export default firebase;