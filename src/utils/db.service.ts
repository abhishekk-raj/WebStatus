import { UserCredential, signInWithPopup } from "firebase/auth";

import { auth, provider } from "./firebase";

const signInWithGoogle = async (): Promise<UserCredential> => {
  provider.setCustomParameters({ prompt: "select_account" });
  const signInResult = await signInWithPopup(auth, provider);

  return signInResult;
};

export { signInWithGoogle };
