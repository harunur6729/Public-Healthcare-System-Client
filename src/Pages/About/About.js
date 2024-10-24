import React from 'react';
import docImage from "../../assets/docAppImages/doctorImgFinal.jpg";
import doctorImage from "../../assets/docAppImages/doctorImage.jpg";

const About = () => {
    return (
        <div className='min-h-screen bg-[#E2E2E2]'>
            <section className="grid grid-cols-12 gap-4 py-5 relative mx-2 lg:mx-0 p-5 lg:px-16">
                {/* Text Section */}
                <div className="order-last lg:order-first col-span-12 lg:col-span-7 flex flex-col justify-center mb-[100px]">
                    <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[55px] text-blue-900 mb-4 font-medium">
                        Book Appointment <br /> with Expert Doctors
                    </h1>
                    <p className="text-sm leading-relaxed mt-[15px] text-[#353535] font-normal">
                        Connect with experienced doctors for face-to-face consultations at a time that suits you.
                        Schedule your appointment online and visit in person for personalized care.
                    </p>
                    <div className="mt-[25px] w-full lg:w-[80%] grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm urbanist">
                        <button className="bg-[#F9F9F9] text-[#4444d8] py-2 px-4 rounded-full hover:text-white hover:bg-blue-900 transition duration-300 ease-in-out">General</button>
                        <button className="bg-[#F9F9F9] text-[#4444d8] py-2 px-4 rounded-full hover:text-white hover:bg-blue-900 transition duration-300 ease-in-out">Pediatrics</button>
                        <button className="bg-[#F9F9F9] text-[#4444d8] py-2 px-4 rounded-full hover:text-white hover:bg-blue-900 transition duration-300 ease-in-out">Cardiology</button>
                        <button className="bg-[#F9F9F9] text-[#4444d8] py-2 px-4 rounded-full hover:text-white hover:bg-blue-900 transition duration-300 ease-in-out">Dental Care</button>
                    </div>
                    <div className="mt-[25px] lg:w-[60%] h-9 flex items-center relative">
                        <button className="bg-[#6B0DEC] hover:bg-[#6A0EDC] transition duration-300 ease-in-out mr-4 px-4 py-2 rounded-full text-[12px] text-white">Discover Services</button>
                        <button className="flex items-center text-sm bg-[#F9F9F9] hover:text-white hover:bg-blue-900 transition duration-300 ease-in-out py-2 px-4 rounded-full">
                            <span className="flex items-center justify-center mr-2">
                                <img className="h-5 w-5 rounded-full" src={doctorImage} alt="doctor" />
                                <i className="fa-solid fa-play absolute bg-transparent text-white"></i>
                            </span>
                            Watch our story
                        </button>
                    </div>
                    <p className="mt-[25px] text-sm text-[#4A4A4A] font-semibold">Check Availability & Book Now</p>
                </div>

                {/* Image Section */}
                <div className="col-span-12 lg:col-span-5 relative pb-5">
                    <div className="px-8 py-5">
                        <img className="rounded-lg w-full h-auto shadow-lg transition-transform transform hover:scale-105" src={docImage} alt="Doctor Consultation" />
                    </div>
                    <img className="absolute rounded-full top-1/2 right-0 transform -translate-y-1/2 h-20 w-20 border-[6px] border-white shadow-lg" src={doctorImage} alt="Doctor" />
                    <img className="absolute rounded-full top-0 left-0 h-20 w-20 border-[6px] border-white shadow-lg" src={doctorImage} alt="Doctor" />
                </div>

                {/* Appointment Form Section */}
                <div className="absolute w-full lg:w-[60%] bottom-10 lg:bottom-[75px] left-0 lg:mx-[10%] rounded-full bg-white shadow-lg">
                    <div className="grid grid-cols-6 rounded-full px-7 py-4 text-[8px] lg:text-[14px]">
                        <div className="grid grid-cols-1">
                            <p className="font-semibold">Check In</p>
                            <p className="mt-1 text-[#6B7280]">Select Date</p>
                        </div>
                        <div className="grid grid-cols-1">
                            <p className="font-semibold">Check Out</p>
                            <p className="text-[#6B7280]">Select Date</p>
                        </div>
                        <div className="grid grid-cols-1">
                            <p className="font-semibold">Specialty</p>
                            <p className="text-[#6B7280]">Specialty</p>
                        </div>
                        <div className="grid grid-cols-1">
                            <p className="font-semibold">Doctor</p>
                            <p className="text-[#6B7280]">Select Doctor</p>
                        </div>
                        <div className="grid grid-cols-1">
                            <p className="font-semibold">Time</p>
                            <p className="text-[#6B7280]">Pick a Time</p>
                        </div>
                        <div className="grid grid-cols-1 relative">
                            <button className="w-[30px] lg:w-[45px] h-[30px] lg:h-[45px] bg-[#4444d8] rounded-full absolute right-0 shadow-lg hover:bg-[#5f5ffa] transition duration-300 ease-in-out">
                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
