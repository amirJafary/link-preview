import React, { useState } from 'react';
import { VerticalAlignTop } from '@material-ui/icons';

const StickyNavbar = (props) => {

    const [scrollTop, setScrollTop] = useState(false);
    const [isShowPageUpButton, setIsShowPageUpButton] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY > 0)
            setScrollTop(true);

        if (window.scrollY === 0)
            setScrollTop(false);

        if (window.scrollY > 400)
            setIsShowPageUpButton(true);

        if (window.scrollY < 400)
            setIsShowPageUpButton(false);
    }

    window.addEventListener('scroll', scrollHandler);

    const pageUpHandler = () => {
        console.log("RUNING");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className='flex flex-col justify-start items-start'>

            <ul className={`flex justify-center p-0 m-0 border-b-2 items-center w-full 
            ${!!scrollTop ? ' sticky top-0 bg-gray-600 text-white' : 'bg-gray-400 text-black'}`}>
                <li className='px-16 py-5 text-lg hover:bg-gray-500 hover:font-bold'>Home</li>
                <li className='px-16 py-5 text-lg hover:bg-gray-500 hover:font-bold'>Shop</li>
                <li className='px-16 py-5 text-lg hover:bg-gray-500 hover:font-bold'>About</li>
                <li className='px-16 py-5 text-lg hover:bg-gray-500 hover:font-bold'>Contact</li>
            </ul>
            {isShowPageUpButton &&
                <div onClick={pageUpHandler} className='flex-center fixed bottom-4 right-4 cursor-pointer bg-slate-500 opacity-40 rounded-3xl text-5xl h-12 w-12 px-5'>
                    <VerticalAlignTop fontSize='inherit' className='text-white' />
                </div>
            }

            <div className='h-screen w-full flex-center bg-purple-400 text-black'>
                <h2>Start Scroll :)</h2>
            </div>

            <div className='h-screen w-full flex-center bg-red-400 text-black'>
                <h2>it's section1</h2>
            </div>

            <div className='h-screen w-full flex-center bg-blue-400 text-black'>
                <h2>it's section2</h2>
            </div>

            <div className='h-screen w-full flex-center bg-green-400 text-black'>
                <h2>it's section3</h2>
            </div>

            <div className='h-screen w-full flex-center bg-yellow-400 text-black'>
                <h2>it's section4</h2>
            </div>

            <div className='h-screen w-full flex-center bg-gray-400 text-black'>
                <h2>it's section5</h2>
            </div>

            <div className='h-screen w-full flex-center bg-orange-400 text-black'>
                <h2>it's section6</h2>
            </div>

            <div className='h-screen w-full flex-center bg-amber-400 text-black'>
                <h2>it's section7</h2>
            </div>

            <div className='h-screen w-full flex-center bg-lime-300 text-black'>
                <h2>it's section8</h2>
            </div>

            <div className='h-screen w-full flex-center bg-teal-400 text-black'>
                <h2>it's section9</h2>
            </div>

            <div className='h-screen w-full flex-center bg-red-400 text-black'>
                <h2>it's finish</h2>
            </div>



        </div>
    );
};

export default StickyNavbar;