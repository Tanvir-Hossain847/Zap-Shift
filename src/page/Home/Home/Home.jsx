import React from 'react';
import Banner from '../Banner/Banner';
import Howitworks from '../Howitworks/Howitworks';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Howitworks></Howitworks>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;