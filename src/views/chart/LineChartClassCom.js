import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
// import gradient from 'chartjs-plugin-gradient';

class LineChartClassCom extends Component {

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
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            // backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: 'rgb(75, 192, 192, 1)',
            tension: 0,
        }]
    };

    options = {
        responsive: true,
        plugins: {
            legend: {
                // position: 'bottom',
                display: false
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        // scales: {
        //     y: {
        //         ticks: {
        //             // Include a dollar sign in the ticks
        //             callback: function (value, index, ticks) {
        //                 return value + ' AED';
        //             }
        //         },
        //     }
        // },
        // scales: {
        //     xAxes: [{
        //         gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //             // display: false,
        //             // drawOnChartArea: false
        //         }
        //     }],
        //     yAxes: [{
        //         gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //             // display: false,
        //             // drawOnChartArea: false
        //         }
        //     }]
        // }
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        }
    }

    render() {
        return (
            <div>
                <Line id='canvas'
                    data={this.data}
                    options={this.options} />
            </div>
        )
    }
}

export default LineChartClassCom;

