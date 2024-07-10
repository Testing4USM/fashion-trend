// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQEL_pHnMpW-wQhdbnfzLyqom6qREO0ao",
    authDomain: "fashiontrend-22d6c.firebaseapp.com",
    projectId: "fashiontrend-22d6c",
    storageBucket: "fashiontrend-22d6c.appspot.com",
    messagingSenderId: "248682719017",
    appId: "1:248682719017:web:b19331485a209e14d63938",
    measurementId: "G-769T8TQNLC"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
