import React, { useEffect } from 'react';

import './slider.css'

const options = [
    { id: 1, location: 'Namak Abrod', state: 'Mazandaran', icon: 'fa-igloo' },
    { id: 2, location: 'Kord Mahale', state: 'Mazichal Road', icon: 'fa-flower' },
    { id: 3, location: 'N/A', state: 'Mazandaran', icon: 'fa-sun-bright' },
    { id: 4, location: 'Tovi Dareh', state: 'Mazichal Road', icon: 'fa-leaf-maple' },
    { id: 5, location: 'Tovi Dareh', state: 'Mazichal Road', icon: 'fa-leaf-maple' },
];

const Slider = () => {

    useEffect(() => {
        const slides = document.querySelectorAll('.option');
        slides.forEach((slide) => {
            slide.addEventListener('click', (ev) => {
                slides.forEach(slide => slide.classList.remove('active'))
                slide.classList.add('active')
            })
        })
    }, [])


    return (
        <div className='options d-flex vh-100 w-100 flex-row'>
            {options.map(option =>
                <div className='option active'>
                    <div className='shadow'></div>
                    <div className='label'>
                        <div className='icon'>
                            <i className={`fas ${option.icon}`}></i>
                        </div>
                        <div className='info'>
                            <div className='main'>{option.location}</div>
                            <div className='sub'>{option.state}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slider;