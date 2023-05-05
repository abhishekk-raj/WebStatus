import { User, UserCredential, signInWithPopup } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

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

const updateWebsiteDetails = async (
  userId: string,
  websiteId: string,
  newData: any
) => {
  const userDocRef = doc(db, "users", userId, "websites", websiteId);

  return await updateDoc(userDocRef, newData);
};

const getWebsiteList = async (user: User): Promise<Web[]> => {
  const websiteDetailsCollection = collection(
    db,
    "users",
    user!.uid,
    "websites"
  );
  const websiteDetailsSnapshot = await getDocs(websiteDetailsCollection);
  const websiteDetailsList = websiteDetailsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return websiteDetailsList as Web[];
};

export {
  signInWithGoogle,
  saveWebsiteDetails,
  getWebsiteList,
  updateWebsiteDetails,
};
