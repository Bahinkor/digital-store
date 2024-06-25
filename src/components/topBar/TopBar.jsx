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

function TopBar() {
    // JSX
    return (
        // Navigation (top bar)
        <nav
            className="sticky z-50 flex items-center justify-between w-full h-[70px] text-sm bg-gradient-to-l from-blue-800 to-red-400 text-white px-4 py-2">
            {/* Logo & Category */}
            <div className="flex items-center">
                {/* Logo */}
                <Link to="/">
                    <img
                        src="https://digital.masirwp.com/wp-content/uploads/2023/09/d4dbd489-969e-414e-bd62-bb558f846d56.png"
                        alt="فروشگاه اینترنتی پارس کالا" className="w-[90px] h-10 ml-[30px]"/>
                </Link>

                {/* Category */}
                <div>
                    <ul className="flex items-center text-sm">
                        {/* Note: group-one custom class */}
                        <li className="relative py-[0.9rem] group-one">
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
                        <li>
                            <Link to="/"
                                  className="flex items-center gap-2 px-[15px] py-[8px] rounded-xl transition-colors hover:hover-bg-color">
                                <ConfirmationNumber/>
                                لیست کالا ها
                            </Link>
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
            <div>
                <form className="relative flex items-center w-[510px] h-[45px] rounded-[15px] pr-14 form-bg-color">
                    <button type="submit"
                            className="absolute right-3 after:absolute after:w-[1px] after:h-[20px] after:rounded-3xl after:bg-white after:right-[30px] after:top-0 after:bottom-0 after:m-auto">
                        <Search className="size-7"/>
                    </button>
                    <input type="text" placeholder="جستجو در بین ۱۵۰۰ محصول تخفیف دار"
                           className="w-[467px] h-[23px] bg-transparent m-auto placeholder:text-white focus:outline-none"/>
                </form>
            </div>

            {/* Login & cart */}
            <div
                className="flex items-center gap-5 [&>div]:flex [&>div]:items-center [&>div]:gap-1 [&>div]:cursor-pointer">
                {/* Login */}
                <div>
                    <Person/>
                    ورود | ثبت نام
                </div>

                {/* Cart */}
                <div>
                    <ShoppingCart/>
                    سبد خرید
                </div>
            </div>
        </nav>
    )
}

export default TopBar;