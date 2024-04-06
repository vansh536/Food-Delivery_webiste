
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  
  apiKey: "AIzaSyDnVP6IJv2YjID2kzZ-vS6-tKr-iFIJwnQ",
  authDomain: "authentication-5d228.firebaseapp.com",
  projectId: "authentication-5d228",
  storageBucket: "authentication-5d228.appspot.com",
  messagingSenderId: "208017379106",
  appId: "1:208017379106:web:37bd6c46f55bccdea1df7b"

};


const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider=new GoogleAuthProvider();

export { app, auth ,provider};
