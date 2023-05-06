import { Navigate, Outlet } from "react-router-dom";
import { RouteNames } from "./constants";
import { useAuth } from "../context/auth-provider";

function PrivateRoute() {
  const { user } = useAuth();
  console.log("user: ", user);

  // if (user === undefined) {
  //   return null;
  // }

  return user ? <Outlet /> : <Navigate to={RouteNames.Auth} />;
}

export default PrivateRoute;
