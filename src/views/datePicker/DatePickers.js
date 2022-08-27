import React from 'react';
import DatePickerCom from './DatePickerCom';
import DateRangePicker from './DateRangePicker';

const DatePickers = () => {
    return (
        <div className='flex flex-col gap-10'>
            <DatePickerCom />
            <DateRangePicker />
        </div>
    );
};

export default DatePickers;