import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DoughnutChart = () => {

    const labels = [
        'sucsess payments',
        'failed payments',
        'open payments'
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: ['Dataset'],
            backgroundColor: ['rgb(250, 50, 50)', 'rgb(0, 50, 50)', 'rgb(150, 50, 50)'],
            data: [220, 100, 500],
        }]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        cutout: 200,
        legend: {
            display: false
        },
        plugins: {
            datalabels: {
                labels: {
                    title: {
                        color: '#fff'
                    },
                    formatter: (value) => {
                        return value + '%';
                    }
                }
            }
        }
    }

    return (
        <div className='d-flex w-100 vh-100 justify-center mt-5'>
            <Doughnut options={options} data={data} />
        </div>
    );
};

export default DoughnutChart;