import React from 'react';
import Banner from '../Banner/Banner';
import Howitworks from '../Howitworks/Howitworks';
import OurServices from '../OurServices/OurServices';
import BrandSlider from '../BrandSlider/BrandSlider';
import BrandSection from '../BrandSection/BrandSection';
import InfoSection from '../Info/InfoSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Howitworks></Howitworks>
            <OurServices></OurServices>
            <BrandSection></BrandSection>
            <InfoSection></InfoSection>
        </div>
    );
};

export default Home;