import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerCom = () => {

    const [startDate, setStartDate] = useState(new Date(Date.now()));
    const [value, setValue] = useState(new Date(Date.now()))

    const timespanHandler = (num) => {
        let current = new Date(startDate)
        current.setMonth(current.getMonth() + num);
        return current
    }

    return (
        <div className='border-2 mx-auto my-auto border-indigo-600 w-48'>
            <DatePicker selected={value}
                onChange={(date) => setValue(date)}
                dateFormat="yyyy/MM/dd"
                startDate={value}
                minDate={timespanHandler(-1)}
                maxDate={timespanHandler(1)}
                placeholderText="please select your day" />
        </div>
    );
};

export default DatePickerCom;