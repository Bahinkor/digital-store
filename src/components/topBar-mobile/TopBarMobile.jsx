import React from 'react';
import {Link} from 'react-router-dom';
import {
    Menu,
    CallOutlined,
    HomeOutlined,
    DashboardOutlined,
    ShoppingCartOutlined,
    PersonOutlined,
    ExpandMore,
    CardGiftcard
} from "@mui/icons-material";
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
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
            <div
                className={`absolute top-0 bottom-0 w-[260px] h-calc-mobile-menu bg-white my-auto rounded-xl transition z-50 ${$isOpenMenu || "!transform !translate-x-[276px]"}`}>

                {/* Menus */}
                <div className="text-[#555]">
                    <Accordion>
                        <AccordionSummary
                            className="text-[#555]"
                            expandIcon={<ExpandMore/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            دسته بندی کالاها
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>li]:text-sm [&>a]:relative [&>a]:text-sm [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                {/*  */}
                                <Link to="/">لوازم جانبی گوشی</Link>
                                <li>
                                    <Link to="/">
                                        دوربین دیجیتال
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        هدفون هدست
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        پاوربانک
                                    </Link>
                                </li>

                                {/*  */}
                                <Link to="/">تجهیزات کامپیوتر</Link>
                                <li>
                                    <Link to="/">
                                        موس و کیبورد
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        قطعات داخلی
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        هارد و حافظه
                                    </Link>
                                </li>

                                {/*  */}
                                <Link to="/">گجت های هوشمند</Link>
                                <li>
                                    <Link to="/">
                                        ساعت هوشمند
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        دستبند هوشمند
                                    </Link>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            className="text-[#555]"
                            expandIcon={<ExpandMore/>}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            لیست کالاها
                        </AccordionSummary>
                        <AccordionDetails>

                            <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>li]:text-sm [&>a]:relative [&>a]:text-sm [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                {/*  */}
                                <Link to="/">کالای دیجیتال</Link>
                                <li>
                                    <Link to="/">
                                        دوربین دیجیتال
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        هدفون هدست
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        پاوربانک
                                    </Link>
                                </li>

                                {/*  */}
                                <Link to="/">لوازم تصویری</Link>
                                <li>
                                    <Link to="/">
                                        موس و کیبورد
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        قطعات داخلی
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        هارد و حافظه
                                    </Link>
                                </li>

                                {/*  */}
                                <Link to="/">لوازم صوتی</Link>
                                <li>
                                    <Link to="/">
                                        ساعت هوشمند
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        دستبند هوشمند
                                    </Link>
                                </li>
                            </ul>

                        </AccordionDetails>
                    </Accordion>
                    <Link to="/" className="flex items-center justify-between px-4 py-3 border-b border-solid border-gray-400">
                        فروش ویژه
                        <CardGiftcard/>
                    </Link>
                </div>

            </div>


            {/* Mobile bottom Nav */}
            <div
                className="fixed left-4 right-4 bottom-4 flex items-center justify-around w-calc h-[3rem] bg-white text-[#555] text-xs px-2 py-1 rounded-lg z-50 [&>a]:flex [&>a]:flex-col [&>a]:items-center">

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