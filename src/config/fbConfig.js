import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "marioplan-38f74.firebaseapp.com",
  databaseURL: "https://marioplan-38f74.firebaseio.com",
  projectId: "marioplan-38f74",
  storageBucket: "marioplan-38f74.appspot.com",
  messagingSenderId: "516158634929"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
