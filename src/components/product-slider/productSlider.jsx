import React from "react";
import {LocalOffer, ArrowBackIos} from "@mui/icons-material";
import {Link} from "react-router-dom";

function ProductSlider() {
    // JSX
    return (
        <section>

            <div>
                {/* top section (title) */}
                <div
                    className="flex items-center justify-between w-full h-[73px] bg-red-500 text-white px-5 rounded-xl [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-2">

                    {/*  */}
                    <div className="font-bold text-xl">
                        <LocalOffer/>
                        پیشنهاد ویژه پارس کالا
                    </div>
                    {/*  */}
                    <div className="[&>div]:text-xl">
                        {/* counter */}
                        <div>
                            <span className="bg-white text-[#555] font-bold ml-2 px-4 py-[6px] rounded-lg">۰</span>
                            :
                        </div>
                        <div>
                            <span className="bg-white text-[#555] font-bold ml-2 px-4 py-[6px] rounded-lg">۰</span>
                            :
                        </div>
                        <div>
                            <span className="bg-white text-[#555] font-bold ml-2 px-4 py-[6px] rounded-lg">۰</span>
                            :
                        </div>
                        <div>
                            <span className="bg-white text-[#555] font-bold ml-2 px-4 py-[6px] rounded-lg">۰</span>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <Link to="/" className="flex items-center">
                            مشاهده همه
                            <ArrowBackIos className="!size-4"/>
                        </Link>
                    </div>

                </div>

                {/* slider */}
                <div></div>

            </div>

        </section>
    );
}

export default ProductSlider;