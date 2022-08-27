import React from 'react';
import Services from '../../services/Services';

import './airTrip.scss'
import FilterTrip from './content/FilterTrip';
import Header from './content/Header';

const AirTripWebSite = () => {

    return (
        <div className='airTripBackground fixed overflow-y-auto top-0'>
            <div className='w-10/12'>
                <Header />
                <FilterTrip />
            </div>
        </div>
    );
};

export default AirTripWebSite;