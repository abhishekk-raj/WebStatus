import React from "react";
import { Button, Card } from "reactstrap";
import { useNavigate } from "react-router-dom";

import useGoogleSignIn from "../../hooks/use-google-signin";
import { RouteNames } from "../../utils/constants";
import { useAuth } from "../../context/auth-provider";
import { signInWithGoogle } from "../../utils/db.service";

const Auth = () => {
  const [userCredential, loading, signIn] = useGoogleSignIn();
  const { setUser } = useAuth();
  const useNaviagte = useNavigate();

  if (userCredential) {
    setUser(userCredential.user);
    useNaviagte(RouteNames.WebsiteList);
  }

  /* This is another yet simple way of using google signIn implemented in utils/db.service */
  //   const handleSignIn = async () => {
  //     const userCredential = await signInWithGoogle();
  //     setUser(userCredential.user);
  //     useNaviagte(RouteNames.WebsiteList);
  //   };

  return (
    <div
      className="d-flex align-items-center justify-content-center p-3"
      style={{ height: "90vh" }}
    >
      <Card className="p-2" style={{ maxWidth: "24rem" }}>
        <h4 className="text-primary">Web Status</h4>
        <p className="text-secondary">Please login to continue using the app</p>
        <img
          src="https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031_960_720.jpg"
          className="rounded-2 opacity-50"
        />

        <Button className="bg-primary mt-2" onClick={signIn}>
          <i className="bi-google me-2"></i> Login with Google
        </Button>
      </Card>
    </div>
  );
};

export default Auth;
