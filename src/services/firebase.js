import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_VERCEL_API_KEY,
  authDomain: process.env.REACT_APP_VERCEL_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_VERCEL_PROJECT_ID,
  storageBucket: process.env.REACT_APP_VERCEL_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_VERCEL_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_VERCEL_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();

export { firebase, auth, database };
