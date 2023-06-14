
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDl4gwzvCbelubz9NNmLzEPif16c_rzePo",

  authDomain: "react-instagram-edbe4.firebaseapp.com",

  projectId: "react-instagram-edbe4",

  storageBucket: "react-instagram-edbe4.appspot.com",

  messagingSenderId: "492449229947",

  appId: "1:492449229947:web:5ae22c4341a480fe2a86de",

  measurementId: "G-KQC0VEKQCV"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
