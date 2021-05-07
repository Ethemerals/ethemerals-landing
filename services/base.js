
import firebase from 'firebase';
import 'firebase/storage';


export const app = firebase.initializeApp({
    "projectId": process.env.FIREBASE_PROJECT_ID,
    "appId": process.env.FIREBASE_APP_ID,
    "storageBucket": process.env.FIREBASE_STORAGE_BUCKET,
    "locationId": process.env.FIREBASE_LOCATION_ID,
    "apiKey": process.env.FIREBASE_API_KEY,
    "authDomain": process.env.FIREBASE_AUTH_DOMAIN,
    "messagingSenderId": process.env.FIREBASE_SENDER_ID
  }
);
