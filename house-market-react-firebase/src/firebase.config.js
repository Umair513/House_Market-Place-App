
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAnUiiShF3gq6HTes8i2CL7ScdViB85Zu0",
    authDomain: "house-market-9bfb2.firebaseapp.com",
    projectId: "house-market-9bfb2",
    storageBucket: "house-market-9bfb2.appspot.com",
    messagingSenderId: "1036643895195",
    appId: "1:1036643895195:web:b025b1f3b64fc090a9c33e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()