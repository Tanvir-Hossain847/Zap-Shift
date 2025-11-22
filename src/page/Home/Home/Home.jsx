import React from 'react';
import Banner from '../Banner/Banner';
import Howitworks from '../Howitworks/Howitworks';
import OurServices from '../OurServices/OurServices';
import BrandSection from '../BrandSection/BrandSection';
import InfoSection from '../Info/InfoSection';
import CallToAction from '../CTA/CallToAction';
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import Reviews from '../Review/Reviews';

const Home = () => {

    const reviewsPromise = fetch("/data/reviews.json") .then(res => res.json())
    console.log(reviewsPromise);
    
    return (
        <div>
            <Banner></Banner>
            <Howitworks></Howitworks>
            <OurServices></OurServices>
            <BrandSection></BrandSection>
            <InfoSection></InfoSection>
            <CallToAction></CallToAction>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;