import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEY8FE5Bn2oIqZo0lFl9eg6_-H7HfJPb4",
    authDomain: "googalauthandredux-deae5.firebaseapp.com",
    projectId: "googalauthandredux-deae5",
    storageBucket: "googalauthandredux-deae5.appspot.com",
    messagingSenderId: "697579096964",
    appId: "1:697579096964:web:89630122c2ce7a849a6bd1",
    measurementId: "G-NWGQ5292ZX"
  };

  // Initialize Firebase
  const authFirebase = firebase.initializeApp(firebaseConfig);

  export default authFirebase;

//   export const authFirebase = firebase.auth();
//   export const provider = new firebase.auth.GoogleAuthProvider();