import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDGaBtd7OpSWHe0Ao9x3bR6-0Tjkq3im-E',
  authDomain: 'crwn-db-c8ad7.firebaseapp.com',
  projectId: 'crwn-db-c8ad7',
  storageBucket: 'crwn-db-c8ad7.appspot.com',
  messagingSenderId: '892641552988',
  appId: '1:892641552988:web:59893d6671bd22da90d499',
  measurementId: 'G-174Z3L7W2G',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoole = () => auth.signInWithPopup(provider);

export default firebase;
