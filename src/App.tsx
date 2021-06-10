import React from 'react';
import './App.scss';
import Appbar from "./components/app-bar/Appbar";
import WebsiteDetail from "./containers/website-detail/WebsiteDetail";

function App() {
    return (
        <div className="App">
            <Appbar/>
            <WebsiteDetail
                websiteName='SmartSoul'
                websiteUrl='https://smartsoul.com/'
            />
        </div>
    );
}

export default App;
