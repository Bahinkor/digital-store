import React from 'react';
import SliderImages from "../../components/slider-images/SliderImages";
import PopularCategories from "../../components/popular-categories/PopularCategories";
import ProductSlider from "../../components/product-slider/productSlider";

function Home() {
    // JSX
    return (
        <>
            {/* Main Section */}
            <main>

                {/* Slider Images */}
                <SliderImages/>

                <div className="container p-4">

                    <PopularCategories/>
                    {/* first product slider */}
                    <ProductSlider/>

                </div>


            </main>
        </>
    );
}

export default Home;