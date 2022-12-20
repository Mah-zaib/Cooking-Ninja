import firebase from 'firebase/app'
import 'firebase/firestore'

//import {getFirestore} from 'firebase/firestore'

// Import the functions you need from the SDKs you need

//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9c-1deMJ_5kH0QfCxxxtQBhBhSQXgFCw",
  authDomain: "cooking-website-fed79.firebaseapp.com",
  projectId: "cooking-website-fed79",
  storageBucket: "cooking-website-fed79.appspot.com",
  messagingSenderId: "256035671081",
  appId: "1:256035671081:web:4222c8d825d3d128442038"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//init firebase 
firebase.initializeApp(firebaseConfig);


//init firesstore
const projectFirestore = firebase.firestore()

export {projectFirestore}



// const db = getFirestore()

// export {db}

