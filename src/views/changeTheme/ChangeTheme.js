import React from 'react';
import { useState } from 'react';
import profile from '../../images/profile_img2.jpg';

const ChangeTheme = () => {

    const [basicColor, setBasicColor] = useState('red-700');

    const basicColorChanged = (e) => {
        setBasicColor(e.target.value);
    }
    return (
        <div className=" flex-center h-full">
            <div className="border flex-center flex-col w-1/4 border-solid p-4 rounded-xl">
                <div className={`h-42 rounded-t-xl bg-${basicColor} w-full`}>
                    <img className='relative top-16 border-4 border-solid border-white left-20 rounded-full w-36 h-36' src={profile} alt="profile_img" />
                </div>
                <h4 className='mt-20 '>Emily Fisher</h4>
                <h5 className='my-4'>Senior Web Developer</h5>
                <div className="flex-center mb-4">
                    <div className="mr-10">
                        <h2>1.6K</h2>
                        <span>Followers</span>
                    </div>
                    <div>
                        <h2>852</h2>
                        <span>Following</span>
                    </div>
                </div>
                <div className="flex-center my-5 text-xl">
                    <button className={`bg-${basicColor} text-white mr-10 btn`}>Follow</button>
                    <button className={`btn border-2 border-solid border-${basicColor} `}>Message</button>
                </div>
                <div className="themes">
                    <button onClick={basicColorChanged} className="btn mr-2 bg-red-700" value="red-700"></button>
                    <button onClick={basicColorChanged} className="btn mr-2 bg-green-700" value="green-700"></button>
                    <button onClick={basicColorChanged} className="btn mr-2 bg-blue-700" value="blue-700"></button>
                    <button onClick={basicColorChanged} className="btn mr-2 bg-sky-700" value="sky-700"></button>
                    <button onClick={basicColorChanged} className="btn mr-2 bg-yellow-700" value="yellow-700"></button>
                </div>
            </div>
            {console.log(basicColor)}
        </div>
    );
};

export default ChangeTheme;