import React from 'react';
import { useState } from 'react';

import react from '../../images/react-js-development.png';
import CustomizedSwitches from '../components/SwitchDarkMode';

const DarkMode = () => {

    const [dark, setDark] = useState(false);

    return (
        <div className={`${dark && 'bg-slate-800 text-white'}`}>
           
            <div className='grid grid-cols-12 gap-4 h-screen p-20'>

            <div className='flex col-span-12'> <CustomizedSwitches onChange={(e) => setDark(e.target.checked)} /></div>
                <div className='col-span-7 text-lg leading-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae et quia ipsam autem consequatur atque debitis reprehenderit omnis, vero quaerat non iste officiis ad earum nobis illo corrupti? Reprehenderit.
                    Quibusdam nobis quidem ullam velit labore suscipit maxime distinctio facere tenetur quae cumque iusto unde asperiores corporis, illo eveniet nihil nemo aperiam voluptas id cum voluptatibus saepe. Consequatur, dicta itaque.
                    Nihil voluptate beatae similique id a ea.
                </div>

                <img src={react} className=' col-span-5' />

            </div>
        </div>
    );
};

export default DarkMode;