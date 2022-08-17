import { Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import helper from '../helper/helper';
import '../App.css'

const TimerCountDown = () => {

    const [timerData, setTimerData] = useState({

    });
    const [intervalId, setIntervalId] = useState(0)

    useEffect(() => {
        setTimerData(helper.converSecondToFullDate(10))
        const timerCountDown = setInterval(() => {
            setTimerData((prevState) => {
                return {
                    ...prevState,
                    second: prevState.second - 1
                }
            })
        }, 1000);
        setIntervalId(timerCountDown)
        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        if (timerData.second < 0) {
            setTimerData((prevState) => {
                return {
                    ...prevState,
                    second: 60,
                    minute: prevState.minute - 1
                }
            })
        }

        if (timerData.minute < 0) {
            setTimerData((prevState) => {
                return {
                    ...prevState,
                    minute: 60,
                    hour: prevState.hour - 1
                }
            })
        }

        if (timerData.hour < 0) {
            setTimerData((prevState) => {
                return {
                    ...prevState,
                    hour: 24,
                    day: prevState.day - 1
                }
            })
        }

        if (timerData.day <= 0 && timerData.hour <= 0 && timerData.minute <= 0 && timerData.second <= 0) {
            clearInterval(intervalId);
        }

    }, [timerData.second])

    return (
        <div className='w-100 h-100 flex align-items-center justify-center'>
            <div className='grid gap-2 grid-flow-col'>

                {timerData.day <= 0 && timerData.hour <= 0 && timerData.minute <= 0 && timerData.second <= 0
                    ? <h3>The timer has expired</h3>
                    : <>
                        <div>
                            <labal className='timerLabels'>Day</labal>
                            <Card className='timerValues'>
                                {timerData.day}
                            </Card >
                        </div>

                        <div>
                            <labal className='timerLabels'>Hour</labal>
                            <Card className='timerValues'>
                                {timerData.hour}
                            </Card >
                        </div>

                        <div>
                            <labal className='timerLabels'>Minutes</labal>
                            <Card className='timerValues'>
                                {timerData.minute}
                            </Card >
                        </div>

                        <div>
                            <labal className='timerLabels'>Second</labal>
                            <Card className='timerValues'>
                                {timerData.second}
                            </Card >
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default TimerCountDown;