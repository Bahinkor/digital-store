import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

function SliderImages() {
    // JSX
    return (
        <div className="pt-[65px]">

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
            >
                {/* Slides */}
                <SwiperSlide className="">
                    <img src="https://digital.masirwp.com/wp-content/uploads/2023/09/64e1ebd4426e5.jpg"
                         alt="موبایل هونور"
                         loading="lazy"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://digital.masirwp.com/wp-content/uploads/2023/09/64dcbd80ecac5.jpg"
                         alt="موبایل نوکیا"
                         loading="lazy"/>

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://digital.masirwp.com/wp-content/uploads/2023/09/full-screen-banners.jpg"
                         alt="ساعت هوشمند"
                         loading="lazy"/>

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://digital.masirwp.com/wp-content/uploads/2023/09/airpod.jpg"
                         alt="محبوب ترین ایرپاد ها"
                         loading="lazy"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://digital.masirwp.com/wp-content/uploads/2023/09/mobile-banner.jpg"
                         alt="موبایل سامسونگ"
                         loading="lazy"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SliderImages;