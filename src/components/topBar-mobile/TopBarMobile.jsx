import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, CallOutlined} from "@mui/icons-material";
import SearchBox from "../search-box/SearchBox";

function TopBarMobile() {
    // JSX
    return (
        // TopBar Mobile - Header Mobile
        <header className="block sm:hidden p-4">
            {/* topbar-shadow is custom class */}
            <nav className="w-full h-10 bg-white px-2 topbar-shadow">
                <div
                    className="w-full h-full flex items-center justify-between [&>span]:text-[#555] [&>span]:cursor-pointer">
                    <span>
                        <Menu/>
                    </span>

                    {/* Search Box */}
                    <SearchBox bgColor="bg-gray-400" divSize="size-full" formWidth="w-full" formHeight="h-full"/>

                    <span>
                        <Link to="/">
                            <CallOutlined/>
                        </Link>
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default TopBarMobile;