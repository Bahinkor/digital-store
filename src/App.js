import React from 'react';
import "./index.css"
import routes from "./routes";
import {useRoutes} from "react-router-dom";
import TopBar from "./components/topBar/TopBar";

function App() {
    // Router
    let router = useRoutes(routes);

    // JSX
    return (
        <div className="App font-iran-sans">
            <header>
                <TopBar/>
            </header>
            {router}
        </div>
    );
}

export default App;
