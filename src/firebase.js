

import firebase from "firebase";

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyC8wGRd8M82-D3CLgzQuF5WTOTbRHK8MaA",
    authDomain: "fir-8bb71.firebaseapp.com",
    projectId: "fir-8bb71",
    storageBucket: "fir-8bb71.appspot.com",
    messagingSenderId: "783197839125",
    appId: "1:783197839125:web:af108d7c4057367924d31c"
  });

  var db = firebaseApp.firestore();
  export {db};