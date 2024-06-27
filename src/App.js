import React from 'react';
import "./index.css"
import routes from "./routes";
import {useRoutes} from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import Shape from "./components/shape/Shape";
import LoginModal from "./components/login-modal/LoginModal";

function App() {
    // Router
    let router = useRoutes(routes);

    // JSX
    return (
        <div className="App font-iran-sans">
            <TopBar/>
            {/* Login Modal */}
            <LoginModal/>
            {/* shape screen */}
            <Shape/>
            {router}
        </div>
    );
}

export default App;
