import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <>
            <div className='lg:flex'>
                <div className='basis-[25%] lg:sticky lg:top-0 self-start'>
                    <AppointmentBanner
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />
                </div>

                <div className='basis-[75%]'>
                    <AvailableAppointments
                        selectedDate={selectedDate}
                    />
                </div>
            </div>
        </>
    );
};

export default Appointment;