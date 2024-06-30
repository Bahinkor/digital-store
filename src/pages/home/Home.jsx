import React from 'react';
import SliderImages from "../../components/slider-images/SliderImages";
import PopularCategories from "../../components/popular-categories/PopularCategories";

function Home() {
    // JSX
    return (
        <>
            {/* Main Section */}
            <main>

                {/* Slider Images */}
                <SliderImages/>

                <div className="container">

                    <PopularCategories/>

                </div>


            </main>
        </>
    );
}

export default Home;