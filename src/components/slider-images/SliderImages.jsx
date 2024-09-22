import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
// import Swiper core and required modules
import {Pagination, A11y, Autoplay} from 'swiper/modules';

function SliderImages() {
    // State
    const [slider, setSlider] = useState([
        {
            id: 1,
            src: "/images/slider-1.jpg",
            alt: "موبایل هونور",
            linkAddress: "*"
        },
        {
            id: 2,
            src: "/images/slider-2.jpg",
            alt: "ساعت هوشمند",
            linkAddress: "*"
        },
        {
            id: 3,
            src: "/images/slider-3.jpg",
            alt: "محبوب ترین ایرپاد ها",
            linkAddress: "*"
        }
    ]);


    // JSX
    return (
        <section>
            <div className="pt-[65px]">

                <Swiper
                    // install Swiper modules
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={true}
                    loop={true}
                    autoplay={true}
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
        </section>
    );
}

export default SliderImages;