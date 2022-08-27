import React, { Component } from 'react'
import { Bar, } from 'react-chartjs-2';

class BarChartClassCom extends Component {

    labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
    ];

    data = {
        labels: this.labels,
        datasets: [{
            label: 'My First Dataset',
            data: [-10, -110, -55, -20, -120, -70, -10],
            backgroundColor: 'rgb(250, 50, 50)',
            stack: 'Stack 0',
        },
        {
            label: 'ordered',
            data: [100, 10, 5, 2, 20, 30, 70],
            backgroundColor: 'rgb(50, 50, 50)',
            stack: 'Stack 0',
        },
        {
            label: 'new',
            backgroundColor: 'rgb(100, 150, 50)',
            data: [50, 10, 155, 120, 50, 30, 80],
            stack: 'Stack 0',
        }]
    };

    options = {
        responsive: true,
        maxBarThickness:20,
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

    render() {
        return (
            <div>
                <Bar data={this.data}
                    options={this.options} />
            </div>
        )
    }
}

export default BarChartClassCom;

