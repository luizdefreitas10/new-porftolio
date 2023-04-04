import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  // Copie e cole as configurações do seu projeto Firebase aqui
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "AIzaSyAbnrmChsoC73UUBeg36h7Pf0OGf1XMIkU",
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || "portfolio-contact-me-2a0b3.firebaseapp.com" || "https://portfolio-contact-me-2a0b3-default-rtdb.firebaseio.com",
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL || "https://portfolio-contact-me-2a0b3-default-rtdb.firebaseio.com",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "portfolio-contact-me-2a0b3",
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET || "portfolio-contact-me-2a0b3.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID || "896290113422",
  appId: process.env.NEXT_PUBLIC_APP_ID || "1:896290113422:web:b35e17ef0c7ce40a4d06df",
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID || "G-EEP196YMSF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const database: firebase.database.Database = firebase.database();

export default database;