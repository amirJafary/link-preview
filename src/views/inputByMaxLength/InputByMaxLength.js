import { TextField } from '@material-ui/core';
import React, { useState } from 'react';

const InputByMaxLength = () => {

    const [inputValue, setInputValue] = useState('');
    const [inputLeftOver, setInputLeftOver] = useState(15);

    const valueChanged = (e) => {
        const maxLength = 15;
        let value = e.target.value;
        if (value.length <= maxLength) {
            setInputValue(value);
            setInputLeftOver(maxLength - value.length);
        }
    }

    return (
        <div>
            <div className='mb-5 text-2xl'> Please Enter Your User Name ... :)</div>
            <div className='flex border-2 border-gray-600 rounded-md justify-center items-stretch'>
                <span className='bg-blue-400 text-white text-3xl w-14 flex-center'>@</span>
                <TextField value={inputValue} onChange={valueChanged} />
                <span className='bg-blue-400 text-white text-3xl flex-center w-14'>{inputLeftOver}</span>
            </div>
        </div>
    );
};

export default InputByMaxLength;