import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="Doctor's Consultation Chair" />
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
                        Your Health, Our Priority
                    </h1>
                    <p className="py-6 text-gray-700">
                        Book a convenient, face-to-face consultation with experienced doctors. We’re here to provide expert medical care when you need it most.
                    </p>
                    <Link to="/appointment"><PrimaryButton>Book an Appointment</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
