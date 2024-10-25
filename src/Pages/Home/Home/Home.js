import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import About from '../../About/About';

const Home = () => {
    return (
        <>
            <About></About>
            <div className='px-10'>
                <Banner></Banner>
                <MakeAppointment></MakeAppointment>
                <InfoCards></InfoCards>
                <Services></Services>
                <Testimonial></Testimonial>
            </div>
        </>
    );
};

export default Home;