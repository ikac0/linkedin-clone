import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB-rPkv0efTtnuten_JVbE_M3TIg0D-imQ",
  authDomain: "linkedin-clone-974fe.firebaseapp.com",
  databaseURL: "https://linkedin-clone-974fe-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-974fe",
  storageBucket: "linkedin-clone-974fe.appspot.com",
  messagingSenderId: "574981133681",
  appId: "1:574981133681:web:e047b2e5cc5306d3bb92d0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
