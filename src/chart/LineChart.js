import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import {
    Chart as ChartJS,
    CategoryScale,
    LineController,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LineController,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {

    const labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'sucsess payments',
            backgroundColor: 'rgba(250, 50, 50,.2)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1000, 220, 500, 630, 120, 800, 100, 50, 20, 200, 300, 700],
            // cubicInterpolationMode: 'monotone',
            fill: true,
        },
        {
            label: 'failed payments',
            backgroundColor: 'rgba(0, 50, 50,.2)',
            borderColor: 'rgb(0, 99, 132)',
            data: [900, 120, 800, 30, 190, 80, 1000, 200, 40, 500, 100, 900],
            cubicInterpolationMode: 'monotone',
            fill: true,
        }]
    };

    const options = {
        responsive: true,
        elements:{
            line:{
                tension:0
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        return value + ' AED';
                    }
                },
            }
        },
    }

    return (
        <div className='mt-5'>
            <Line options={options} data={data} />
        </div>
    );
};

export default LineChart;