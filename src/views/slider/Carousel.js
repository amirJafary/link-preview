import React from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

import img1 from '../../images/autumn.jpg';
import img2 from '../../images/spring.jpg';
import img3 from '../../images/summer.jpg';
import img4 from '../../images/rainy.jpg';
import { useState } from 'react';


const Carousel = () => {

    let [index, setIndex] = useState(0);
    const images = [
        { src: img1, title: 'Image 1' },
        { src: img2, title: 'Image 2' },
        { src: img3, title: 'Image 3' },
        { src: img4, title: 'Image 4' },
    ];


    const previoseSlide = () => {
        setIndex(index - 1)
        if (index <= 0) {
            setIndex(images.length - 1);
        }
    }

    const nextSlide = () => {
        setIndex(index + 1)
        if (index >= images.length - 1) {
            setIndex(0);
        }
    }

    return (
        <div className='flex flex-col p-20 items-center'>
            <div className='flex justify-center items-center'>
                <button onClick={previoseSlide} className='text-3xl pb-2 pt-1 rounded-l-3xl w-10 relative left-10 hover:opacity-50 hover:bg-black'>
                    <ArrowBackIos fontSize='inherit' className='text-white h-32' />
                </button>
                <img className='w-8/12 h-2/3 rounded-3xl overflow-hidden ' src={`${images[index]?.src}`} />
                <button onClick={nextSlide} className='text-3xl rounded-r-3xl  pb-2 pt-1 w-10 relative right-10 hover:opacity-50 hover:bg-black'>
                    <ArrowForwardIos fontSize='inherit' className='text-white h-32' />
                </button>
            </div>
            <div align='center' className='relative bottom-8 h-8 rounded-b-3xl text-lg w-8/12 bg-black opacity-50 text-white'>{images[index]?.title}</div>
        </div>
    );
};

export default Carousel;