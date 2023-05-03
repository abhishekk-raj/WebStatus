import React from 'react';
import './App.scss';
import Appbar from "./components/app-bar/Appbar";
import WebsiteDetail from "./pages/website-detail/WebsiteDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './routes/error';
import WebsiteList from './pages/website-list/WebsiteList';
import AddWebsite from './pages/add-website/AddWebsite';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <WebsiteList />,
            errorElement: <ErrorPage />
        },
        {
            path: ":websiteId",
            element: <WebsiteDetail />,
            errorElement: <ErrorPage />
        },
        {
            path: "/add-website",
            element: <AddWebsite />,
            errorElement: <ErrorPage />
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
