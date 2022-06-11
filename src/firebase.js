// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ6YM0YSNn0BWpmKi6P2XiceYxbprPfA8",
  authDomain: "chat-app-eb66f.firebaseapp.com",
  projectId: "chat-app-eb66f",
  storageBucket: "chat-app-eb66f.appspot.com",
  messagingSenderId: "783832959751",
  appId: "1:783832959751:web:54936197f35097dee553a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const loginFunc = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  try {
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    return {
      id: user.uid,
      uname: user.displayName,
      email: user.email,
      mobile: user.phoneNumber,
      photo: user.photoURL,
      provider: user.providerId
    }
  }
  catch(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    return {
      errorCode,
      errorMessage,
      email,
      credential
    }
  }
}

const logoutFunc = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("logged out.")
  }).catch((error) => {
    // An error happened.
    console.log("ERROR!!")
  });
}

export {
  loginFunc,
  logoutFunc
}

