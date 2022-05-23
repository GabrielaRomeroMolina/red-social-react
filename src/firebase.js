import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore ,collection, addDoc, getDocs, query, Timestamp} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQD2niMJyMiaaracJ3DfWY4RqoJLiyTFM",
  authDomain: "red-social-react-4cf67.firebaseapp.com",
  projectId: "red-social-react-4cf67",
  storageBucket: "red-social-react-4cf67.appspot.com",
  messagingSenderId: "613449640644",
  appId: "1:613449640644:web:93d0c7acb8c5ffa6913791",
  measurementId: "G-H54X0GHRJL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
export{
  collection,
  addDoc,
  getDocs,
  query,
  Timestamp, 
} 


        

