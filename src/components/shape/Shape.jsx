import React from 'react';
import {isHover} from "../../store/hover-store";
import {useStore} from "@nanostores/react";

function Shape() {
    // Store (nanostore package)
    const $isHover = useStore(isHover);


    // JSX
    return (
        // shape screen
        <div className={`absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black invisible opacity-0 ${$isHover && "!visible !opacity-100"}`}></div>
    );
}

export default Shape;