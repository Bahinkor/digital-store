import React from 'react';
import {isHover} from "../../stores/hover-store";
import {useStore} from "@nanostores/react";

function Shape() {
    // Store (nanostore package)
    const $isHover = useStore(isHover);


    // JSX
    return (
        // shape screen
        // bg-black-alpha-75 (custom class)
        <div className={`absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black-alpha-50 invisible opacity-0 ${$isHover && "!visible !opacity-100"}`}></div>
    );
}

export default Shape;