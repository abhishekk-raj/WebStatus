import { UserCredential, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db, provider } from "./firebase";
import { Web } from "../types/web";

const signInWithGoogle = async (): Promise<UserCredential> => {
  provider.setCustomParameters({ prompt: "select_account" });
  const signInResult = await signInWithPopup(auth, provider);

  return signInResult;
};

const saveWebsiteDetails = async (websiteDetails: Web) => {
  const user = auth.currentUser;
  const docRef = doc(db, "users", user!.uid, "websites", websiteDetails.id);
  return await setDoc(docRef, websiteDetails);
};

export { signInWithGoogle, saveWebsiteDetails };
