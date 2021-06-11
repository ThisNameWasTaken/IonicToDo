import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyD7pNYl1cj28I04Hgl9lDz3XHO03VhnlxI',
    authDomain: 'ionic-todo-878b1.firebaseapp.com',
    projectId: 'ionic-todo-878b1',
    storageBucket: 'ionic-todo-878b1.appspot.com',
    messagingSenderId: '189448263802',
    appId: '1:189448263802:web:bde43a433d3ad985da83c3',
    measurementId: 'G-6TR2RPCJTV',
  });

  firebase.firestore().enablePersistence().catch(console.error);
}

export default firebase;
