import React, { useRef, useEffect, useState } from 'react';
import { ChartData, ChartArea } from 'chart.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const colors = [
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'teal',
    'blue',
    'purple',
];



function createGradient(ctx, area) {
    const colorStart = 'rgba(250,250,250,.8)';
    const colorMid = 'rgba(250,100,150,.5)';
    const colorEnd = 'rgba(50,150,100,.6)';

    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(0.5, colorMid);
    gradient.addColorStop(1, colorEnd);

    return gradient;
}

export default function GradiantChart() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({ datasets: [] });

    const data = {
        labels,
        fill: true,
        datasets: [
            {
                label: 'Dataset 1',
                data: [165, 509, 800, 181, 456, 55, 340],
                fill: true,
                borderColor:'black'
            },
            // {
            //     label: 'Dataset 2',
            //     data: [-10, -110, -55, -20, -120, -70, -10],
            //     fill: true,
            //     borderColor:'black'
            // },
        ],
    };

    useEffect(() => {
        const chart = chartRef.current;

        if (!chart) {
            return;
        }

        const chartData = {
            ...data,
            datasets: data.datasets.map(dataset => ({
                ...dataset,
                backgroundColor: createGradient(chart.ctx, chart.chartArea),
            })),
        };

        setChartData(chartData);
    }, []);

    return <Chart ref={chartRef} type='line' data={chartData} />;
}
