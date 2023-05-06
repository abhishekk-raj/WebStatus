import { Navigate, Outlet } from "react-router-dom";
import { RouteNames } from "./constants";
import { useAuth } from "../context/auth-provider";

function PrivateRoute() {
  const { user } = useAuth();
  console.log("user: ", user);

  if (user === null || user === undefined || Object.keys(user).length === 0) {
    return <Navigate to={RouteNames.Auth} />;
  }

  return <Outlet />;
}

export default PrivateRoute;
