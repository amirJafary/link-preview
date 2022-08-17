import React, { useState } from 'react';
import { Card, TextField } from '@material-ui/core';

import '../App.css'

const Calculator = () => {

    const [keyPressed, setKeyPressed] = useState('')

    const calculatorKeys = [
        { id: 5, name: '7', value: '7', bgColor: 'bg-gray-600 text-white' },
        { id: 6, name: '8', value: '8', bgColor: 'bg-gray-600 text-white' },
        { id: 7, name: '9', value: '9', bgColor: 'bg-gray-600 text-white' },
        { id: 8, name: '/', value: '/', bgColor: 'bg-gray-300 text-xl' },
        { id: 9, name: '4', value: '4', bgColor: 'bg-gray-600 text-white' },
        { id: 10, name: '5', value: '5', bgColor: 'bg-gray-600 text-white' },
        { id: 11, name: '6', value: '6', bgColor: 'bg-gray-600 text-white' },
        { id: 12, name: '*', value: '*', bgColor: 'bg-gray-300 text-xl' },
        { id: 13, name: '1', value: '1', bgColor: 'bg-gray-600 text-white' },
        { id: 14, name: '2', value: '2', bgColor: 'bg-gray-600 text-white' },
        { id: 15, name: '3', value: '3', bgColor: 'bg-gray-600 text-white' },
        { id: 16, name: '-', value: '-', bgColor: 'bg-gray-300 text-xl' },
        { id: 17, name: '0', value: '0', bgColor: 'bg-gray-600 text-white' },
        { id: 18, name: '.', value: '.', bgColor: 'bg-gray-600 text-xl text-white' },
        { id: 19, name: '=', value: '=', bgColor: 'bg-blue-500 text-xl' },
        { id: 20, name: '+', value: '+', bgColor: 'bg-gray-300 text-xl' },
    ]

    const buttonClicked = (e, id) => {
        let value = e.target.name;
        let concatValue = '';
        let result = null;

        if (value === 'AC') {

            setKeyPressed('')

        } else if (id === 18) {

            let hasDot = keyPressed.includes('.');
            concatValue = !hasDot ? keyPressed + value : keyPressed;
            setKeyPressed(concatValue);

        } else if (id === 19) {

            concatValue = keyPressed;
            result = eval(concatValue);
            setKeyPressed(result);

        } else {

            concatValue = keyPressed + value;
            setKeyPressed(concatValue);

        }
    }

    const inputValuesChanged = (e) => {
        let value = e.target.value;
        setKeyPressed(value)
    }

    return (
        <div className='flex flex-col justify-center align-items-center h-full bg-gray-100'>
            <h3 className='my-20'>enter your number and calculate</h3>
            <Card className='flex rounded-lg flex-col drop-shadow-xl p-4'>
                <div>
                    <TextField value={keyPressed} onChange={inputValuesChanged} autoFocus={true} className='pb-4' />
                    <button key={4}
                        className='px-5 text-xl mb-2 rounded-md fw-bold py-2 bg-gray-300 col-12'
                        onClick={(e) => buttonClicked(e, 4)}
                        name={'AC'}>
                        AC
                    </button>
                </div>
                <div className='w-auto'>
                    <div className=' grid grid-cols-4 gap-2'>
                        {calculatorKeys.map(item =>
                            <button key={item.id} onClick={(e) => buttonClicked(e, item.id)} className={`px-5 rounded-md fw-bold py-2 ${item.bgColor}`} name={item.name}>
                                {item.value}
                            </button>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Calculator;