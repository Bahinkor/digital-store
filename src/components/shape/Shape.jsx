import React from 'react';
import {isHover} from "../../stores/hover-store";
import {useStore} from "@nanostores/react";
import {showShoppingCart} from "../../stores/show-shopping-cart-store";

function Shape() {
    // Store (nanostore package)
    const $isHover = useStore(isHover);
    const $showShoppingCart = useStore(showShoppingCart);


    // JSX
    return (
        // shape screen
        // bg-black-alpha-75 (custom class)
        <div className={`absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black-alpha-50 cursor- invisible opacity-0 ${$isHover && "!visible !opacity-100"} ${$showShoppingCart && "!visible !opacity-100"}`} onClick={() => showShoppingCart.set(false)}></div>
    );
}

export default Shape;