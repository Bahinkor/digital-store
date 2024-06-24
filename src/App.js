import React from 'react';
import "./index.css"
import routes from "./routes";
import {useRoutes} from "react-router-dom";

function App() {
    // Router
    let router = useRoutes(routes);

    // JSX
    return (
        <div className="App font-iran-sans">
            {router}
        </div>
    );
}

export default App;
