import React from 'react';
import { useState } from 'react';
import { BrightnessLow, BrightnessHigh } from '@material-ui/icons';

import RangeSlider from '../components/RangeSlider';

const ScreenBrightness = () => {

    const [min, setMin] = useState(20);
    const [max, setMax] = useState(100);
    const [value, setValue] = useState(60);

    const rangeSliderChanged = (e, newValue) => {
        setValue(newValue)
        console.log(newValue);
    }

    return (
        <div align='center'
            style={{ filter: `brightness(${value}%)` }}
            className='h-screen fullBackground p-20'>

            <div className='grid grid-cols-12 bg-white items-center opacity-50 py-10'>
                <div className='col-start-4 text-3xl'>
                    <BrightnessLow fontSize='inherit' className='text-black' />
                </div>

                <div className='col-span-4 '>
                    <RangeSlider value={value}
                        min={min}
                        max={max}
                        rangeSliderChanged={rangeSliderChanged} />
                </div>

                <div className='text-3xl'>
                    <BrightnessHigh fontSize='inherit' className='text-black' />
                </div>
            </div>


        </div>
    );
};

export default ScreenBrightness;