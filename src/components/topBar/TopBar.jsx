import React from 'react';
import {Link} from 'react-router-dom';
import {
    Window,
    Home,
    ConfirmationNumber,
    Loyalty,
    Person,
    ShoppingCart,
    Search,
    KeyboardArrowLeft
} from "@mui/icons-material";
import {useStore} from "@nanostores/react";
import {isHover} from "../../stores/hover-store";
import {showLoginModal} from "../../stores/show-login-store";
import {showShoppingCart} from "../../stores/show-shopping-cart-store";
import SearchBox from "../search-box/SearchBox";


function TopBar() {
    // Store (nanostore package)
    const $isHover = useStore(isHover);
    const $showLoginModal = useStore(showLoginModal);
    const $showShoppingCart = useStore(showShoppingCart);


    // JSX
    return (
        // Navigation (top bar)
        <header className="hidden sm:block">
            <nav
                className="fixed z-50 flex items-center justify-between w-full h-[65px] text-sm bg-gradient-to-l from-blue-800 to-red-400 text-white px-4 py-2">
                {/* Logo & Category */}
                <div className="flex items-center">
                    {/* Logo */}
                    <Link to="/" className="hidden xl:block">
                        <img
                            src="/images/logo.png"
                            alt="فروشگاه اینترنتی پارس کالا" className="w-[90px] h-10 ml-[30px]"/>
                    </Link>

                    {/* Category */}
                    <div>
                        <ul className="flex items-center text-sm">
                            {/* Note: group-one custom class */}
                            <li className="relative py-[0.9rem] group-one" onMouseEnter={() => isHover.set(true)}
                                onMouseLeave={() => isHover.set(false)}>
                                <Link to="/"
                                      className="flex items-center gap-2 px-[15px] py-[8px] rounded-xl transition-colors hover:hover-bg-color">
                                    <Window/>
                                    دسته بندی کالا ها
                                </Link>
                                {/* div Category */}
                                {/* Note: group-one-hover custom class */}
                                <div
                                    className="absolute top-[67px] hidden group-one-hover w-[560px] h-[420px] bg-white text-gray-600 rounded-[2px] border-[1px] border-gray-300 z-40">
                                    {/* Category title */}
                                    <ul>
                                        <li className="relative flex group">
                                            <div
                                                className="w-[170px] h-[56px] hover:text-red-500 flex items-center justify-between border-l border-b border-gray-200 px-[15px] cursor-pointer">
                                                <Link to="/"
                                                      className="flex items-center gap-2 h-[55px]">
                                                    <img
                                                        src="https://digital.masirwp.com/wp-content/uploads/2024/01/digital.png"
                                                        alt="image icon menu" loading="lazy" className="size-6"/>
                                                    کالای دیجیتال
                                                </Link>
                                                <KeyboardArrowLeft className="!size-4"/>
                                            </div>

                                            {/* Sub menu (category) */}
                                            <div
                                                className="absolute right-[10.7rem] flex flex-col flex-wrap gap-4 w-[387px] h-[418px] px-[15px] py-5 z-50 transition invisible opacity-0 group-hover:visible group-hover:opacity-100">
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        لوازم جانبی موبایل
                                                    </Link>
                                                    <li>
                                                        <Link to="/">
                                                            دوربین دو چشمی
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
                                                    <li>
                                                        <Link to="/">
                                                            کیف و کاور
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            پایه نگهدارنده گوشی
                                                        </Link>
                                                    </li>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        اسپیکر بلوتوث باسیم
                                                    </Link>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        شارژر تبلت و موبایل
                                                    </Link>
                                                    <li>
                                                        <Link to="/">
                                                            کامپیوتر و تجهیزات
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            قطعات داخلی کامپیوتر
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            وسایل مخصوص بازی
                                                        </Link>
                                                    </li>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        لوازم جانبی دوربین
                                                    </Link>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        کارت حافظه
                                                    </Link>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        کاغذ چاپ عکس
                                                    </Link>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        کیف
                                                    </Link>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        لنز
                                                    </Link>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        واقعیت مجازی
                                                    </Link>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        لوازم جانبی لپتاپ
                                                    </Link>
                                                </ul>
                                                {/*  */}
                                            </div>
                                        </li>
                                        <li className="relative flex group">
                                            <div
                                                className="w-[170px] h-[56px] hover:text-red-500 flex items-center justify-between border-l border-b border-gray-200 px-[15px] cursor-pointer">
                                                <Link to="/"
                                                      className="flex items-center gap-2 h-[55px]">
                                                    <img
                                                        src="https://digital.masirwp.com/wp-content/uploads/2024/01/لوازم-جانبی-موبایل.png"
                                                        alt="image icon menu" loading="lazy" className="size-6"/>
                                                    لوازم جانبی موبایل
                                                </Link>
                                                <KeyboardArrowLeft className="!size-4"/>
                                            </div>

                                            {/* Sub menu (category) */}
                                            <div
                                                className="absolute right-[10.7rem] top-[-56px] flex flex-col flex-wrap gap-4 w-[387px] h-[418px] px-[15px] py-5 z-50 transition invisible opacity-0 group-hover:visible group-hover:opacity-100">
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        نجهیرات جانبی
                                                    </Link>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        شارژر باسیم و بی سیم
                                                    </Link>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        هدفون و هنذفری
                                                    </Link>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="relative flex group">
                                            <div
                                                className="w-[170px] h-[56px] hover:text-red-500 flex items-center justify-between border-l border-b border-gray-200 px-[15px] cursor-pointer">
                                                <Link to="/"
                                                      className="flex items-center gap-2 h-[55px]">
                                                    <img
                                                        src="https://digital.masirwp.com/wp-content/uploads/2024/01/گجت-های-هوشمند.png"
                                                        alt="image icon menu" loading="lazy" className="size-6"/>
                                                    گجت های هوشمند
                                                </Link>
                                                <KeyboardArrowLeft className="!size-4"/>
                                            </div>

                                            {/* Sub menu (category) */}
                                            <div
                                                className="absolute right-[10.7rem] top-[-112px] flex flex-col flex-wrap gap-4 w-[387px] h-[418px] px-[15px] py-5 z-50 transition invisible opacity-0 group-hover:visible group-hover:opacity-100">
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    {/*  */}
                                                    <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                        <Link to="/">
                                                            ساعت هوشمند
                                                        </Link>
                                                    </ul>
                                                    {/*  */}
                                                    <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                        <Link to="/">
                                                            دستبند هوشمند
                                                        </Link>
                                                    </ul>
                                                    {/*  */}
                                                    <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                        <Link to="/">
                                                            عینک هوشمند
                                                        </Link>
                                                    </ul>
                                                </ul>
                                                {/*  */}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/"
                                      className="flex items-center gap-2 px-[15px] py-[8px] rounded-xl transition-colors hover:hover-bg-color">
                                    <Home/>
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li className="relative py-[0.9rem] group-one" onMouseEnter={() => isHover.set(true)}
                                onMouseLeave={() => isHover.set(false)}>
                                <Link to="/"
                                      className="flex items-center gap-2 px-[15px] py-[8px] rounded-xl transition-colors hover:hover-bg-color">
                                    <ConfirmationNumber/>
                                    لیست کالا ها
                                </Link>
                                {/* Products List */}
                                {/* Note: group-one-hover custom class */}
                                <div
                                    className="absolute top-[67px] -right-[10rem] hidden group-one-hover w-[520px] h-[230px] bg-white text-gray-600 rounded-[2px] border-[1px] border-gray-300 z-40">
                                    {/* Category title */}
                                    <ul>
                                        <li className="relative flex group">
                                            {/* menu (Products list) */}
                                            <div
                                                className="absolute flex flex-col flex-wrap gap-4 w-[520px] h-[230px] px-[15px] py-5 z-50">
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        لوازم جانبی موبایل
                                                    </Link>
                                                    <li>
                                                        <Link to="/">
                                                            دوربین دو چشمی
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
                                                    <li>
                                                        <Link to="/">
                                                            کیف و کاور
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            پایه نگهدارنده گوشی
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            پایه نگهدارنده گوشی
                                                        </Link>
                                                    </li>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        اکسسوری هوشمند
                                                    </Link>
                                                    <li>
                                                        <Link to="/">
                                                            دوربین دو چشمی
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
                                                    <li>
                                                        <Link to="/">
                                                            کیف و کاور
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            پایه نگهدارنده گوشی
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            پایه نگهدارنده گوشی
                                                        </Link>
                                                    </li>
                                                </ul>
                                                {/*  */}
                                                <ul className="flex flex-col gap-2 [&>li]:text-gray-400 [&>a]:relative [&>a]:pr-3 [&>a]:before:absolute [&>a]:before:top-0 [&>a]:before:bottom-0 [&>a]:before:right-0 [&>a]:before:m-auto [&>a]:font-bold [&>a]:before:w-[4px] [&>a]:before:h-4 [&>a]:before:bg-red-400">
                                                    <Link to="/">
                                                        لوازم صوتی و تصویری
                                                    </Link>
                                                    <li>
                                                        <Link to="/">
                                                            دوربین دو چشمی
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
                                                    <li>
                                                        <Link to="/">
                                                            کیف و کاور
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            پایه نگهدارنده گوشی
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            پایه نگهدارنده گوشی
                                                        </Link>
                                                    </li>
                                                </ul>
                                                {/*  */}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/"
                                      className="flex items-center gap-2 px-[15px] py-[8px] rounded-xl transition-colors hover:hover-bg-color">
                                    <Loyalty/>
                                    فروش ویژه
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Search box */}
                <SearchBox show="hidden lg:block" bgColor="form-bg-color" formWidth="w-[300px]" formHeight="h-[45px]"
                           inputWidth="w-[245px]" inputHeight="h-[23px]"/>

                {/* Login & cart */}
                <div
                    className="flex items-center gap-5 mr-[16px] [&>div]:flex [&>div]:items-center [&>div]:gap-1 [&>div]:cursor-pointer">
                    {/* Login */}
                    <div onClick={() => showLoginModal.set(true)}>
                        <Person/>
                        <span className="hidden lg:inline-block">ورود | ثبت نام</span>
                    </div>

                    {/* Cart */}
                    <div onClick={() => showShoppingCart.set(!$showShoppingCart)}>
                        <ShoppingCart/>
                        <span className="hidden lg:inline-block">سبد خرید</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default TopBar;