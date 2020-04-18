import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB7VGCWVaCxS9LVNzUVhg3Q5FYN7NnIkpM",
  authDomain: "crwn-shop-db-c4bba.firebaseapp.com",
  databaseURL: "https://crwn-shop-db-c4bba.firebaseio.com",
  projectId: "crwn-shop-db-c4bba",
  storageBucket: "crwn-shop-db-c4bba.appspot.com",
  messagingSenderId: "422924870931",
  appId: "1:422924870931:web:3c77ddebdd56c4c02466e6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;