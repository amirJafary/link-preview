import React from 'react';
import { useState } from 'react';

const ProgressBarByScroll = () => {

    const [scrollBar, setScrollBar] = useState(0)

    const scrollHandler = (e) => {
        let scrollTop = window.scrollY;
        let domHeight = document.body.scrollHeight;
        let screenInnerHeight = window.innerHeight;
        let scrollPercent = (scrollTop * 100) / (domHeight - screenInnerHeight);
        let scrollPercentRounded = Math.round(scrollPercent);

        setScrollBar(scrollPercentRounded);
    }

    window.addEventListener('scroll', scrollHandler)
    return (
        <div id='scroll' className='h-full w-full'>
            <div className='bg-red-800 fixed w-full h-5 top-0'
                style={{ width: `${scrollBar}%` }}></div>

            <div className='h-96 bg-sky-200'></div>
            <div className='h-96 bg-red-200'></div>
            <div className='h-96 bg-yellow-200'></div>

            <div className='h-96 bg-sky-200'></div>
            <div className='h-96 bg-red-200'></div>
            <div className='h-96 bg-yellow-200'></div>

            <div className='h-96 bg-sky-200'></div>
            <div className='h-96 bg-red-200'></div>
            <div className='h-96 bg-yellow-200'></div>

            <div className='h-96 bg-sky-200'></div>
            <div className='h-96 bg-red-200'></div>
            <div className='h-96 bg-yellow-200'></div>
        </div>
    );
};

export default ProgressBarByScroll;