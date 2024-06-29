import React from 'react';
import "./index.css"
import routes from "./routes";
import {useRoutes} from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import TopBarMobile from "./components/topBar-mobile/TopBarMobile";
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
            {/* Shape Screen */}
            <Shape/>
            {/* Mobile topBar */}
            <TopBarMobile/>
            {/* Login Modal */}
            <LoginModal/>
            {/* Shopping Card */}
            <ShoppingCart/>
            {router}
        </div>
    );
}

export default App;
