import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const RadarChart = () => {

    const data = {
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
        datasets: [
            {
                label: '# of Votes',
                data: [20, 20, 20, 20, 20, 20],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(200, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: '# of Votes',
                data: [47, 34, 45, 26, 15, 35],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(200, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: '',
                data: [10, 10, 10, 10, 10, 10,],
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className='w-50 mx-auto mt-40'>
            <Radar data={data} />
        </div>
    );
};

export default RadarChart;