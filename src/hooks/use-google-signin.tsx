// This code uses the useGoogleSignIn hook from the Firebase SDK to sign in users with their Google accounts.
// The hook returns a UserCredential object, which contains information about the signed-in user.
// If the user is signed in, the hook returns the UserCredential object.
// If the user is not signed in, the hook returns null.
// The hook also returns a loading state that indicates whether the user is signed in or not.
// If the user is signed in, the loading state is set to false.
// If the user is not signed in, the loading state is set to true.

/*
TODO: This code is working fine but it has a problem.

Warning: Cannot update a component (`AuthProvider`) while rendering a different component (`Auth`). To locate the bad setState() call inside `Auth`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
    at Auth (http://localhost:5173/src/pages/auth/Auth.tsx?t=1683219245182:24:45)
    at RenderedRoute (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=b40f10b1:3120:5)
    at Routes (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=b40f10b1:3523:5)
    at Router (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=b40f10b1:3470:15)
    at BrowserRouter (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=b40f10b1:3919:5)
    at AuthProvider (http://localhost:5173/src/context/auth-provider.tsx?t=1683218989674:21:3)
    at div
    at App
*/

import { useEffect, useState } from "react";
import { UserCredential, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";

const useGoogleSignIn = (): [UserCredential | null, boolean, () => void] => {
  const [userCredential, setUserCredential] = useState<UserCredential | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  const signIn = async () => {
    provider.setCustomParameters({ prompt: "select_account" });
    const signInResult = await signInWithPopup(auth, provider);
    setUserCredential(signInResult);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserCredential(user as UserCredential | null);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return [userCredential, loading, signIn];
};

export default useGoogleSignIn;
