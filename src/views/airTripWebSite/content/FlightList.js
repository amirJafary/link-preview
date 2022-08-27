import { Card, TextField } from '@material-ui/core';
import React from 'react';

const FlightList = (props) => {
    return (
        <div>
            {props.flightList?.map(item =>
                <Card className='rounded-lg mt-2 p-5'>
                    <div className='grid grid-cols-12 items-start'>
                        <div align='start' className='col-span-2 h-full border-r border-black'>

                            <div className='font-bold'> From :<span className='font-normal ml-1'>{item.origin}</span></div>
                            <div className='font-bold'> To :<span className='font-normal ml-1'>{item.destination}</span></div>
                            <div className='font-bold'> Flight Mode :<span className='font-normal ml-1'>{item.flightingMode}</span></div>

                        </div>
                        <div className='col-span-8 border-r border-black h-full pl-5'>

                            <div align='start' className='font-bold'> description : <span className='font-normal ml-1'>{item.description}</span> </div>
                            <div className='flex items-start mt-3'>
                                <div className='font-bold'>price : <span className='font-normal text-blue-500'> {item.price} $</span></div>
                                <div className='ml-3 font-bold'>hotel name : <span className='font-normal text-blue-500'> {item.hotelName}</span></div>
                            </div>

                        </div>
                        <div className='col-span-2 pl-2'>

                            <button className='btn bg-teal-800 text-white w-full mb-2 bg-opacity-70'>Add To Cart</button>
                            <div className='flex rounded-md'>
                                <button className='btn bg-teal-800 text-white text-2xl bg-opacity-70'
                                    onClick={() => props.minusCount(item.name)}>--</button>

                                <div className='px-2'><TextField name={item.name} value={props.countOfTicket[item.name]} onChange={props.countOfTicketChanged} className='' /></div>

                                <button className='btn bg-teal-800 text-white text-2xl bg-opacity-70'
                                    onClick={() => props.plusCount(item.name)}>+</button>
                            </div>

                        </div>
                    </div>

                </Card>
            )}

        </div>
    );
};

export default FlightList;