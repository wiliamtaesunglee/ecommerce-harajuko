import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCncGn-OMhB2jvhcWXJajeQsPvqBcij2pg",
    authDomain: "ecommerce-7e897.firebaseapp.com",
    databaseURL: "https://ecommerce-7e897.firebaseio.com",
    projectId: "ecommerce-7e897",
    storageBucket: "ecommerce-7e897.appspot.com",
    messagingSenderId: "942440319599",
    appId: "1:942440319599:web:01323ef2ec8d07e3fcdb9a"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
