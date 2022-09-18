import React from 'react';
import { useState } from 'react';
import RangeSlider from '../components/RangeSlider';

const BmiCalculator = () => {

    const [weight, setWeight] = useState(30);
    const [height, setHeight] = useState(120);
    let bmi = Math.floor(weight / (height / 100) ** 2);

    const weightChanged = (e, newValue) => {
        setWeight(newValue)
    }

    const heightChanged = (e, newValue) => {
        setHeight(newValue)
    }

    const setText = (value) => {
        let message = '';
        let color = '';

        if (value > 25 && value <= 35) {
            color = 'text-red-400';
            message = 'Over Weight';
        }

        if (value > 35) {
            color = 'text-red-800';
            message = 'Obesity';
        }

        if (value >= 18.5 && value <= 25) {
            color = 'text-green-700';
            message = 'Normal';
        }

        if (value < 18.5) {
            color = 'text-yellow-500';
            message = 'Under Weight';
        }

        return <div className={color}>
            {message}
        </div>
    }

    return (
        <div className='flex-center flex-col h-full'>
            <div className='text-3xl'>Body Mass Index (BMI)</div>
            <div className='flex-center text-2xl m-20'>
                <div>
                    <label className='text-sm'>Your Weight is <span className='font-bold text-xl'>( {weight} )</span></label>
                    <RangeSlider labelStatus='auto'
                        style={{ width: '250px', marginTop: '1.5rem' }}
                        min={30}
                        max={200}
                        value={weight}
                        rangeSliderChanged={weightChanged} />
                </div>

                <div className='ml-10'>
                    <label className='text-sm'>Your Height is <span className='font-bold text-xl'>( {height} )</span></label>
                    <RangeSlider labelStatus='auto'
                        style={{ width: '250px', marginTop: '1.5rem' }}
                        min={100}
                        max={220}
                        value={height}
                        rangeSliderChanged={heightChanged} />
                </div>
            </div>
            <div className='flex-center text-9xl'>
                {bmi}
                <div className='text-2xl ml-4'>{setText(bmi)}</div>
            </div>
        </div>
    );
};

export default BmiCalculator;