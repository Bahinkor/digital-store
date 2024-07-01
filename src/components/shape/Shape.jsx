import React from 'react';
import {isHover} from "../../stores/hover-store";
import {useStore} from "@nanostores/react";
import {showShoppingCart} from "../../stores/show-shopping-cart-store";
import {isOpenMobileMenu} from "../../stores/is-open-mobile-menu";

function Shape() {
    // Store (nanostore package)
    const $isHover = useStore(isHover);
    const $showShoppingCart = useStore(showShoppingCart);
    const $isOpenMobileMenu = useStore(isOpenMobileMenu);


    // JSX
    return (
        // shape screen
        // bg-black-alpha-75 (custom class)
        <div
            className={`fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black-alpha-50 z-40 invisible opacity-0 ${$isHover && "!visible !opacity-100"} ${$showShoppingCart && "!visible !opacity-100"} ${$isOpenMobileMenu && "!visible !opacity-100"}`}
            onClick={() => {

                showShoppingCart.set(false);
                isOpenMobileMenu.set(false);

            }}></div>
    );
}

export default Shape;