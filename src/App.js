import React from 'react';
import "./index.css"
import routes from "./routes";
import {useRoutes} from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import Shape from "./components/shape/Shape";
import LoginModal from "./components/login-modal/LoginModal";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";

function App() {
    // Router
    let router = useRoutes(routes);

    // JSX
    return (
        <div className="App font-iran-sans">
            <TopBar/>
            {/* Login Modal */}
            <LoginModal/>
            {/* Shopping Card */}
            <ShoppingCart/>
            {/* Shape Screen */}
            <Shape/>
            {router}
        </div>
    );
}

export default App;
