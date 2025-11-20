import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper/modules';
import banner1 from "../../../assets/banner/banner1.png"
import banner2 from "../../../assets/banner/banner2.png"
import banner3 from "../../../assets/banner/banner3.png"

const Banner = () => {

    return (
        <>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative w-full">
                        <img className='w-full' src={banner1} alt="" />
                        <div className="top-110 left-22 z-50 flex gap-5 absolute">
                        <button className='btn btn-primary text-black'>Track Your Parcel</button>
                        <button className='btn'>Be A Rider</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full">
                        <img className='w-full' src={banner2} alt="" />
                        <div className="top-110 left-22 z-50 flex gap-5 absolute">
                        <button className='btn btn-primary text-black'>TracK Your Parcel</button>
                        <button className='btn'>Be A Rider</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full">
                        <img className='w-full' src={banner3} alt="" />
                        <div className="top-110 left-22 z-50 flex gap-5 absolute">
                        <button className='btn btn-primary text-black'>TracK Your Parcel</button>
                        <button className='btn'>Be A Rider</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default Banner