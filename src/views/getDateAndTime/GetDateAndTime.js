import React, { useState } from 'react';
import helper from '../../helper/helper';

const GetDateAndTime = () => {

    const [dateNow, setDateNow] = useState()

    const getDateNow = () => {

        let dateNow = new Date();
        let hour = dateNow.getHours();
        let minutes = dateNow.getMinutes();
        let second = dateNow.getSeconds();
        let section = 'AM'

        if (hour > 12) {
            hour = hour - 12;
            section = 'PM';
        }

        if (hour < 10) {
            hour = '0' + hour;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (second < 10) {
            second = '0' + second;
        }

        if (hour === 0) {
            hour = 12;
        }

        setDateNow({
            hour,
            minutes,
            second,
            section
        })
    };

    setInterval(getDateNow, 1000)

    return (
        !helper.isEmpty(dateNow) &&
        <div className='d-flex items-center justify-center h-full font-bold text-3xl py-10'>
            {`${dateNow.hour} : ${dateNow.minutes} : ${dateNow.second} ${dateNow.section}`}
        </div>
    );
};

export default GetDateAndTime;