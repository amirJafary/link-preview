import React from 'react';

const Header = () => {

    const header = [
        { id: 1, label: 'All Flight' },
        { id: 2, label: 'Schedule' },
        { id: 3, label: 'Passengers' },
        { id: 4, label: 'Your Orders' },
    ];

    return (
        <div className='flex relative top-4 justify-center'>
            <ul className='flex '>
                {header?.map(item =>
                    <li className='mx-8 cursor-pointer text-lg hover:bg-indigo-400 hover:bg-opacity-50 bg-indigo-300 bg-opacity-25 rounded-md px-2 py-1' key={item.id}>{item.label}</li>
                )}
            </ul>
        </div>
    );
};

export default Header;