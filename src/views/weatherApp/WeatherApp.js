import { Card, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import helper from '../../helper/helper';
import Services from '../../services/Services';

const WeatherApp = () => {

    const [cityName, setCityName] = useState('');
    const [error, setError] = useState('');
    const [cityInfo, setCityInfo] = useState();

    const cityNameChanged = (e) => {
        let cityName = e.target.value;
        setCityName(cityName);
    }

    const searchForResult = (e) => {
        if (e.keyCode === 13) {
            Services.getCurrentWeatherByCityName(cityName, currentWeatherCallBack);
        }
    }

    const currentWeatherCallBack = (res) => {
        if (res.hasError) {
            setCityInfo();
            setError('City Not Found, Try Again ...');
        } else {
            setError();
            setCityInfo(res?.res?.data);
        }
    }

    let icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${cityInfo?.weather[0].icon}.svg`

    console.log();
    return (
        <div className='p-16 flex w-full justify-between flex-col items-center h-full text-4xl'>

            <h2 className='mb-10'>What's The Weather Today ?</h2>
            {!helper.isEmpty(cityInfo) ?
                <div className='mb-5'>
                    <Card raised={true} className='p-4 flex items-center text-lg rounded-md bg-blue-300 shadow-lg'>
                        <figure className='mr-10'><img width={120} src={icon} /></figure>

                        <div className='flex flex-col items-start'>

                            <h3 className='mb-5'>{cityInfo.name}</h3>
                            <div className='font-bold mb-2'>country:
                                <span className='font-normal ml-2'>{cityInfo.sys.country}</span>
                            </div>

                            <div className='font-bold mb-2'>Geographic location:
                                <span className='font-normal ml-2'>
                                    lat:{cityInfo.coord.lat} lng:{cityInfo.coord.lon}
                                </span>
                            </div>

                            <div className='font-bold mb-2'>Weather:
                                <span className='font-normal ml-2'>
                                    {cityInfo.weather[0].description}
                                </span>
                            </div>

                            <div className='font-bold mb-2'>Wind Speed:
                                <span className='font-normal ml-2'>
                                    {cityInfo.wind.speed} km/h
                                </span>
                            </div>

                            <div className='font-bold mb-2 text-left flex items-center justify-center'>
                               
                                <Card raised={true} className='p-2 font-normal flex flex-col items-center ml-2'>
                                    <div className='font-bold mb-2'>min temp</div>
                                    <div className='text-green-700'>{cityInfo.main.temp_min} C</div>
                                </Card>
                                <Card raised={true} className='p-2 font-normal flex flex-col items-center ml-2'>
                                    <div className='font-bold mb-2'>temp now</div>
                                    <div className='text-yellow-500'>{cityInfo.main.temp} C</div>
                                </Card>
                                <Card raised={true} className='p-2 font-normal flex flex-col items-center ml-2'>
                                    <div className='font-bold mb-2'>max temp</div>
                                    <div className='text-red-700'>{cityInfo.main.temp_max} C</div>
                                </Card>
                            </div>

                        </div>
                    </Card>
                </div>
                : <div className='text-red-700 text-2xl'>{error}</div>
            }
            <div className='grid grid-cols-6 w-full items-center'>
                <label className='text-xl col-span-6 mb-5'> enter your city name </label>
                <TextField onKeyDown={searchForResult} size={'medium'} className='col-span-2 col-start-3 w-full' value={cityName} onChange={cityNameChanged} />
            </div>
        </div>
    );
};

export default WeatherApp;