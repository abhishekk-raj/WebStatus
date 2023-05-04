import React from "react";
import "./App.scss";
import Appbar from "./components/app-bar/Appbar";
import WebsiteDetail from "./pages/website-detail/WebsiteDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error/error";
import WebsiteList from "./pages/website-list/WebsiteList";
import AddWebsite from "./pages/add-website/AddWebsite";
import { Routes } from "./utils/constants";

function App() {
  const router = createBrowserRouter([
    {
      path: Routes.Empty,
      element: <WebsiteList />,
      errorElement: <ErrorPage />,
    },
    {
      path: Routes.WebsiteDetail,
      element: <WebsiteDetail />,
      errorElement: <ErrorPage />,
    },
    {
      path: Routes.AddWebsite,
      element: <AddWebsite />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div className="App">
      <Appbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
