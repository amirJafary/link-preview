import React from 'react';
import BarChartClassCom from './BarChartClassCom';
import DoughnutChart from './DoughnutChart';
import GradiantChart from './GradiantChart';
import LineChart from './LineChart';
import LineChartClassCom from './LineChartClassCom';
import RadarChart from './RadarChart';
import RoundedBar from './RoundedBar';

const ChartTable = () => {

    return (
        <div className='d-flex flex-col'>
            <RoundedBar />
            <LineChart />
            <DoughnutChart />
            <LineChartClassCom/>
            <BarChartClassCom/>
            <GradiantChart/>
            <RadarChart/>
        </div>
    );
};

export default ChartTable;