import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch()

    return (
        <div className='h-full flex flex-col justify-between p-10'>
            <h1>Counter - {state.counter}</h1>
            <div className='flex justify-center mb-10'>
                <button onClick={() => dispatch({ type: 'Increase_Counter', payload: 5 })}
                    className='btn mr-3 bg-green-700 text-white mt-10'>
                    Increase Counter
                </button>
                <button onClick={() => dispatch({ type: 'Decrease_Counter', payload: 1 })}
                    className='btn bg-red-700 text-white mt-10'>
                    Decrease Counter
                </button>
            </div>
            <h1>Number - {state.number}</h1>
            <div className='flex  justify-center'>
                <button onClick={() => dispatch({ type: 'Increase_Number', payload: 3 })}
                    className='btn mr-3 bg-green-700 text-white mt-10'>
                    Increase Number
                </button>
                <button onClick={() => dispatch({ type: 'Decrease_Number', payload: 10 })}
                    className='btn bg-red-700 text-white mt-10'>
                    Decrease Number
                </button>
            </div>
        </div>
    );
};

export default Counter;