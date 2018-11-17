import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCy0vjxyNJSoFxiRJtUpawgBlxX_Wu4m7k",
    authDomain: "instacool-fef18.firebaseapp.com",
    databaseURL: "https://instacool-fef18.firebaseio.com",
    projectId: "instacool-fef18",
    storageBucket: "instacool-fef18.appspot.com",
    messagingSenderId: "1094972007122"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();