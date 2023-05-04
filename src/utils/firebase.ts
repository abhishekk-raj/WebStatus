import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxlaxUjk8-7FUOHhoa_Ou3saDxpWR5sqY",
  authDomain: "chitchat-e0730.firebaseapp.com",
  projectId: "chitchat-e0730",
  storageBucket: "chitchat-e0730.appspot.com",
  messagingSenderId: "834702070276",
  appId: "1:834702070276:web:a1611b075d8a7192541b51",
  measurementId: "G-JT5D3H4Y1T",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { auth, db, provider, analytics };
