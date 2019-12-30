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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
