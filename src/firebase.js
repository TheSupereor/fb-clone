import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqhCL6zDOyZiuDOP1JvnFvuYxiT4fSR30",
    authDomain: "fb-clone-33c9c.firebaseapp.com",
    projectId: "fb-clone-33c9c",
    storageBucket: "fb-clone-33c9c.appspot.com",
    messagingSenderId: "105304938997",
    appId: "1:105304938997:web:8d39a0be6e9512f94828bc",
    measurementId: "G-8LZN7T8FYY"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};