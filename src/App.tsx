import React, { useEffect, useState } from "react";
import "./App.scss";
import Appbar from "./components/app-bar/Appbar";
import WebsiteDetail from "./pages/website-detail/WebsiteDetail";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/error/error";
import WebsiteList from "./pages/website-list/WebsiteList";
import AddWebsite from "./pages/add-website/AddWebsite";
import { RouteNames } from "./utils/constants";
import Auth from "./pages/auth/Auth";
import PrivateRoute from "./utils/private-route";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./context/auth-provider";

const auth = getAuth();

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Appbar />
          <Routes>
            {/* Authenticated Routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path={RouteNames.WebsiteList}
                element={<WebsiteList />}
                errorElement={<ErrorPage />}
              />
              <Route
                path={RouteNames.WebsiteDetail}
                element={<WebsiteDetail />}
                errorElement={<ErrorPage />}
              />
              <Route
                path={RouteNames.AddWebsite}
                element={<AddWebsite />}
                errorElement={<ErrorPage />}
              />
            </Route>

            {/* Public Routes */}
            <Route
              path={RouteNames.Auth}
              element={<Auth />}
              errorElement={<ErrorPage />}
            />
            <Route
              path={RouteNames.Empty}
              element={<Navigate to={RouteNames.WebsiteList} />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
