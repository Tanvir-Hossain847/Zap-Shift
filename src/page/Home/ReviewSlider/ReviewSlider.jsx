import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from '../../../components/reviewCards/ReviewCard';


const ReviewSlider = ({ reviewsPromise }) => {
    console.log(reviewsPromise);
    const [data, setData] = useState([])
    reviewsPromise.then((data) => setData(data))
    
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                spaceBetween={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    data.map(review => <SwiperSlide>
                        <ReviewCard key={review.id} review={review}></ReviewCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ReviewSlider;