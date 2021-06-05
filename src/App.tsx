import React from 'react';
import './App.css';
import Appbar from "./components/app-bar/Appbar";
import WebsiteDetail from "./containers/website-detail/WebsiteDetail";

function App() {
    return (
        <div className="App">
            <Appbar/>
            <WebsiteDetail/>
        </div>
    );
}

export default App;
