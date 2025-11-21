import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import amazon from "../../../assets/brands/amazon.png"
import casio from "../../../assets/brands/casio.png"
import moonstar from "../../../assets/brands/moonstar.png"
import randstad from "../../../assets/brands/randstad.png"
import star from "../../../assets/brands/star.png"

const BrandSlider = () => {
    const brands = [amazon, casio, moonstar, randstad, star]
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                    {
                        brands.map((brand, index) =>
                            <SwiperSlide key={index}>
                                <img className='mx-auto' src={brand} alt="" />
                            </SwiperSlide>)
                    }
            </Swiper>
        </div>
    );
};

export default BrandSlider;







