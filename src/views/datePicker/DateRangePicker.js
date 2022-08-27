import React, { useState } from 'react';
import DatePicker from "react-datepicker";

const DateRangePicker = () => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const timespanHandler = (num) => {
        let current = new Date(Date.now())
        current.setMonth(current.getMonth() + num);
        return current
    }

    return (
        <div className='border-2 mx-auto my-auto border-indigo-600 w-48'>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                minDate={timespanHandler(-1)}
                maxDate={timespanHandler(0)}
                isClearable={true}
            />
        </div>
    );
};

export default DateRangePicker;