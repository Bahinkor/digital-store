import React from 'react';
import {Link} from 'react-router-dom';
import {Window, Home, ConfirmationNumber, Loyalty, Person, ShoppingCart, Search} from "@mui/icons-material";

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
                        <li>
                            <Link to="/"
                                  className="flex items-center gap-2 px-[15px] py-[8px] rounded-xl transition-colors hover:hover-bg-color">
                                <Window/>
                                دسته بندی کالا ها
                            </Link>
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