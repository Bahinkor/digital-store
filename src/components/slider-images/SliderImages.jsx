import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";

function SliderImages() {
    // State
    const [slider, setSlider] = useState([
        {
            id: 1,
            src: "https://digital.masirwp.com/wp-content/uploads/2023/09/64e1ebd4426e5.jpg",
            alt: "موبایل هونور",
            linkAddress: "*"
        },
        {
            id: 2,
            src: "https://digital.masirwp.com/wp-content/uploads/2023/09/64dcbd80ecac5.jpg",
            alt: "موبایل نوکیا",
            linkAddress: "*"
        },
        {
            id: 3,
            src: "https://digital.masirwp.com/wp-content/uploads/2023/09/full-screen-banners.jpg",
            alt: "ساعت هوشمند",
            linkAddress: "*"
        },
        {
            id: 4,
            src: "https://digital.masirwp.com/wp-content/uploads/2023/09/airpod.jpg",
            alt: "محبوب ترین ایرپاد ها",
            linkAddress: "*"
        },
        {
            id: 5,
            src: "https://digital.masirwp.com/wp-content/uploads/2023/09/mobile-banner.jpg",
            alt: "موبایل سامسونگ",
            linkAddress: "*"
        }
    ]);


    // JSX
    return (
        <div className="pt-[65px]">

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                scrollbar={true}
                navigation={true}
            >

                {/* Slides */}
                {
                    slider.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <Link to={slide.linkAddress}>
                                <img src={slide.src}
                                     alt={slide.alt}
                                     loading="lazy"/>
                            </Link>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}

export default SliderImages;