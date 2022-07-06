import React from 'react';
import { Bar } from 'react-chartjs-2';
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

const RoundedBar = () => {

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
            label: 'viewer',
            backgroundColor: 'rgb(250, 50, 50)',
            borderColor: 'rgb(255, 99, 132)',
            data: [100, 10, 5, 2, 20, 30, 70],

        }, {
            label: 'ordered',
            backgroundColor: 'rgb(50, 50, 50)',
            borderColor: 'rgb(0, 99, 132)',
            data: [10, 110, 55, 20, 120, 70, 10],
        }, {
            label: 'new',
            backgroundColor: 'rgb(100, 150, 50)',
            borderColor: 'rgb(0, 99, 132)',
            data: [50, 10, 155, 120, 50, 30, 80],
        }]
    };

    const options = {
        responsive: true,
        borderRadius: 50,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        return value + ' users';
                    }
                },
            }
        }
    }

    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    );
};

export default RoundedBar;