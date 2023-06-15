import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBHnoaEjg-z5cTPJzi_fnIiMWdWZf6IT3U",
  authDomain: "e-ride-7bd20.firebaseapp.com",
  projectId: "e-ride-7bd20",
  storageBucket: "e-ride-7bd20.appspot.com",
  messagingSenderId: "9154200107",
  appId: "1:9154200107:web:4545e5d90fd9cfec17a06e"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();