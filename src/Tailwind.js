import React from 'react';

const Tailwind = () => {
    return (
        <div className='flex text-blue-200 gap-2 h1 font-bold '>
            <div className='flex-1 h1 bg-green-800 text-white'>1</div>
            <div className='flex-1 h1 bg-red-800 text-white'>2</div>
            <div className='flex-1 h1 bg-yellow-600 text-white'>3</div>
            <div className='flex-1 h1 bg-blue-300 text-white'>4</div>
        </div>
    );
};

export default Tailwind;