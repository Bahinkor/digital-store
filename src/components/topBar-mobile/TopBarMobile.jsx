import React from 'react';
import {Link} from 'react-router-dom';
import {
    Menu,
    CallOutlined,
    HomeOutlined,
    DashboardOutlined,
    ShoppingCartOutlined,
    PersonOutlined
} from "@mui/icons-material";
import SearchBox from "../search-box/SearchBox";
import {useStore} from "@nanostores/react";
import {isOpenMobileMenu} from "../../stores/is-open-mobile-menu";

function TopBarMobile() {
    // Store
    const $isOpenMenu = useStore(isOpenMobileMenu);


    // JSX
    return (
        // TopBar Mobile
        <header className="block sm:hidden p-4">
            {/* topbar-shadow & w-calc is custom class */}
            <nav
                className="fixed left-4 right-4 w-calc h-[3rem] bg-white text-white px-2 py-1 rounded-lg topbar-shadow">
                <div
                    className="w-full h-full flex items-center justify-between gap-3 [&>span]:text-[#555] [&>span]:cursor-pointer">
                    <span onClick={() => isOpenMobileMenu.set(!$isOpenMenu)}>
                        <Menu/>
                    </span>

                    {/* Search Box */}
                    <SearchBox bgColor="bg-gray-400" divSize="size-full" formWidth="w-full" formHeight="h-full"
                               inputWidth="w-full" inputHeight="h-full"/>

                    <span>
                        <Link to="/">
                            <CallOutlined/>
                        </Link>
                    </span>
                </div>
            </nav>




            {/* Mobile Menu */}
            {/* h-calc-mobile-menu is custom class */}
            <div className={`absolute top-0 bottom-0 w-[260px] h-calc-mobile-menu bg-white my-auto rounded-xl transition z-50 ${$isOpenMenu || "!transform !translate-x-[276px]"}`}>

            </div>




            {/* Mobile bottom Nav */}
            <div
                className="fixed left-4 right-4 bottom-4 flex items-center justify-around w-calc h-[3rem] text-[#555] text-xs px-2 py-1 rounded-lg z-50 [&>a]:flex [&>a]:flex-col [&>a]:items-center">

                <Link to="/">
                    <HomeOutlined/>
                    خانه
                </Link>
                <Link to="/">
                    <DashboardOutlined/>
                    دسته بندی ها
                </Link>
                <Link to="/">
                    <ShoppingCartOutlined/>
                    سبد خرید
                </Link>
                <Link to="/">
                    <PersonOutlined/>
                    حساب کاربری
                </Link>

            </div>
        </header>
    );
}

export default TopBarMobile;