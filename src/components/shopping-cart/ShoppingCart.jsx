import React from 'react';
import {Close} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {showShoppingCart} from "../../stores/show-shopping-cart-store";
import {useStore} from "@nanostores/react";

function ShoppingCart() {
    // Stores (nanostores package)
    const $showShoppingCart = useStore(showShoppingCart);

    // JSX
    return (
        // Shopping cart
        <div
            className={`absolute top-0 bottom-0 w-[400px] h-full bg-white z-50 transition ${$showShoppingCart || "transform translate-x-[400px]"}`}>
            <div
                className="flex items-center justify-between w-full h-[42px] text-white bg-gradient-to-l from-blue-800 to-red-400">
                <div className="text-md mr-4">
                    شما این محصولات را انتخاب کردید
                    <span className="bg-gray-700 px-[6px] rounded-md mr-1">۰</span>
                </div>
                <div className="cursor-pointer ml-1" onClick={() => showShoppingCart.set(false)}>
                    <Close/>
                </div>
            </div>

            <div className="w-full h-full pr-4">
                {/* If the shopping cart is empty */}
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <img src="https://digital.masirwp.com/wp-content/themes/parskala/assets/img/empty-cart.svg"
                         alt="سبد خرید"/>
                    <p className="mb-3">هیچ محصولی در سبد خرید نیست.</p>
                    <span
                        className="text-xs text-[#555] mb-[6px]">جهت مشاهده محصولات بیشتر به صفحه زیر مراجعه کنید.</span>
                    <Link to="/" className="text-sm text-blue-500">صفحه اصلی فروشگاه</Link>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;