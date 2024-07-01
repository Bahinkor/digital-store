import React, {useState} from "react";
import {
    LocalOffer,
    LocalOfferOutlined,
    ArrowBackIos,
    ShoppingCartOutlined,
    FavoriteBorderOutlined,
    Star
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import {Pagination, A11y, Autoplay} from 'swiper/modules';


function ProductSlider() {
    // State
    const [products, setProducts] = useState([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
    ]);


    // JSX
    return (
        <section>

            <div className="mt-10">
                {/* top section (title) */}
                <div
                    className="flex items-center justify-between w-full h-[73px] bg-red-400 text-white px-1 sm:px-5 rounded-xl [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-2">

                    {/* top section */}
                    <div className="font-bold text-[12px] sm:text-[15px] md:text-xl">
                        <LocalOffer/>
                        پیشنهاد ویژه پارس کالا
                    </div>
                    {/*  */}
                    <div className="[&>div]:text-xl">
                        {/* counter */}
                        <div>
                            <span
                                className="bg-white text-[#555] font-bold ml-2 px-2 sm:px-4 py-0 sm:py-[6px] rounded-lg">۰</span>
                            :
                        </div>
                        <div>
                            <span
                                className="bg-white text-[#555] font-bold ml-2 px-2 sm:px-4 py-0 sm:py-[6px] rounded-lg">۰</span>
                            :
                        </div>
                        <div>
                            <span
                                className="bg-white text-[#555] font-bold ml-2 px-2 sm:px-4 py-0 sm:py-[6px] rounded-lg">۰</span>
                            :
                        </div>
                        <div>
                            <span
                                className="bg-white text-[#555] font-bold ml-1 px-2 sm:px-4 py-0 sm:py-[6px] rounded-lg">۰</span>
                        </div>
                    </div>
                    {/*  */}
                    <div className="!hidden sm:!block">
                        <Link to="/" className="flex items-center">
                            مشاهده همه
                            <ArrowBackIos className="!size-4"/>
                        </Link>
                    </div>

                </div>


                {/* slider */}

                <div className="mt-7">

                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, A11y, Autoplay]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            550: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                            1536: {
                                slidesPerView: 5,
                            }
                        }}
                        spaceBetween={"15"}
                        autoplay={true}
                    >

                        {/* Slides */}
                        {
                            products.map(product => (
                                <SwiperSlide key={product.id}>

                                    <div>
                                        {/* product cart */}
                                        <div className="w-full xs:w-[276px] h-[326px] bg-transparent rounded-lg">
                                            <div>
                                                <Link to="/"
                                                      className="relative flex items-center justify-center bg-[#f4f4f4] rounded-md">
                                                    {/* icons (off) */}
                                                    <span
                                                        className="absolute top-2 right-2 bg-gradient-to-bl from-blue-800 to-red-400 text-sm text-white px-[6px] rounded-md">۱۰٪</span>
                                                    <span className="absolute top-2 left-2">
                                                        <LocalOfferOutlined className="!size-5 !stroke-red-400"/>
                                                    </span>
                                                    <img
                                                        src="https://digital.masirwp.com/wp-content/uploads/2022/08/8b992591cd7606de5eb5affe9ec8b9725c349fe3_1654514995-1-300x300.jpg"
                                                        alt="مک بوک" className="size-[150px] mix-blend-multiply"/>
                                                </Link>
                                            </div>
                                            <div className="text-black p-2">
                                                <div className="flex flex-col justify-between w-full h-[120px]">
                                                    <div className="text-sm">
                                                        <Link to="/"
                                                              className="text-overflow-hidden transition hover:text-blue-500">لپ
                                                            تاپ 16.2 اینچ اپل مدل MacBook Pro
                                                            MK193 2021</Link>
                                                    </div>
                                                    <div className="flex items-center justify-end gap-2 mb-4">
                                                        <span
                                                            className="text-xs text-gray-400 font-light line-through">۳۸,۴۱۰,۰۰۰</span>
                                                        <span className="text-md font-bold">۳۴,۶۹۰,۰۰۰</span>
                                                        <span className="text-xs font-light">تومان</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex items-center justify-between w-full h-[41px] border-t border-t-gray-300">
                                                    <div className="flex items-center gap-2">
                                                        <ShoppingCartOutlined titleAccess="افزودن به سبد خرید"
                                                                              className="!size-5 cursor-pointer"/>
                                                        <FavoriteBorderOutlined titleAccess="پسندیدن"
                                                                                className="!size-5 !stroke-red-400 cursor-pointer"/>
                                                    </div>
                                                    <div className="flex items-center gap-[2px]">
                                                        <span className="text-gray-600">(۰)</span>
                                                        <span>۰</span>
                                                        <Star className="!size-4 !text-yellow-400"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </div>

            </div>

        </section>
    );
}

export default ProductSlider;