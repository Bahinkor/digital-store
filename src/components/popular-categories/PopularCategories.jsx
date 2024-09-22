import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import {Pagination, A11y, Autoplay} from 'swiper/modules';


function PopularCategories() {
    // State
    const [categories, setCategories] = useState([
        {
            id: 1,
            src: "/images/category-1.webp",
            alt: "کیس",
            linkAddress: "*"
        },
        {
            id: 2,
            src: "/images/category-2.webp",
            alt: "رم",
            linkAddress: "*"
        },
        {
            id: 3,
            src: "/images/category-3.webp",
            alt: "مانیتور",
            linkAddress: "*"
        },
        {
            id: 4,
            src: "/images/category-1.webp",
            alt: "کیس",
            linkAddress: "*"
        },
        {
            id: 5,
            src: "/images/category-2.webp",
            alt: "رم",
            linkAddress: "*"
        },
        {
            id: 6,
            src: "/images/category-3.webp",
            alt: "مانیتور",
            linkAddress: "*"
        },
    ]);

    // JSX
    return (
        <section>
            <div className="my-[20px]">
                <h2 className="font-bold text-lg text-[#2A2A2A] mb-[30px]">دسته بندی های داغ</h2>

                {/* Images */}
                <div>

                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, A11y, Autoplay]}
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                            },
                            550: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                            1280: {
                                slidesPerView: 8,
                            },
                            1536: {
                                slidesPerView: 9,
                            }
                        }}
                        spaceBetween={"15"}
                        autoplay={true}
                    >

                        {/* Slides */}
                        {
                            categories.map(category => (
                                <SwiperSlide key={category.id}>
                                    <Link to={category.linkAddress}>
                                        <img src={category.src}
                                             alt={category.alt}
                                             loading="lazy"
                                             className="size-[123px]"
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </div>
            </div>
        </section>
    );
}

export default PopularCategories;