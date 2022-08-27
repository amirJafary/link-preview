import React, { useState } from 'react';
import { Card } from '@material-ui/core'

import FlightDatas from './FlightDatas';
import FlightList from './FlightList';
import SelectInput from '../../components/selectInput';
import RangeSlider from '../../components/RangeSlider'

const FilterTrip = (props) => {

    const [flightList, setFlightList] = useState(FlightDatas.flightList());
    const [countOfTicket, setCountOfTicket] = useState({
        iranToDubai: 0,
        iranToTurkey: 0,
        iranToParis: 0,
        iranToFrance: 0,
        uaeToSpania: 0,
        uaeToFrance: 0,
        turkeyToUAE: 0,
        turkeyToParis: 0,
        spaniaToParis: 0,
    });
    const [selectedOriginCountry, setSelectedOriginCountry] = useState(null);
    const [selectedDestinationCountry, setSelectedDestinationCountry] = useState(null);
    const [value, setValue] = useState([400, 2000]);

    const originSelected = (e) => {
        let value = e.target.value;
        setSelectedOriginCountry(value);
    }

    const DestinationSelected = (e) => {
        let value = e.target.value;
        setSelectedDestinationCountry(value);
    }

    const valueText = (value) => {
        return `${value}`;
    }

    const rangeSliderChanged = (e, newValue) => {
        setValue(newValue);
    };

    const countOfTicketChanged = (e) => {
        let value = e.target.value;
        const regex = new RegExp('^[0-9]{1,2}$');
        if (regex.test(+value)) {
            setCountOfTicket({
                [e.target.name]: +value
            })
        }
    }

    const plusCount = (name) => {
        if (countOfTicket[name] < 99) {
            setCountOfTicket({
                [name]: ++countOfTicket[name]
            })
        }
    }

    const minusCount = (name) => {
        if (countOfTicket[name] > 0) {
            setCountOfTicket({
                [name]: --countOfTicket[name]
            })
        }
    }

    const searchButtonClicked = () => {
        console.log(value ,selectedDestinationCountry,selectedOriginCountry);
    }

    const clearButtonClicked = () => {
        setValue([400, 2000]);
        setSelectedDestinationCountry(null);
        setSelectedOriginCountry(null);
    }

    return (
        <div className='w-full overflow-y-auto'>
            <Card className='rounded-lg grid grid-cols-3 items-start mt-96 gap-5 p-5'>

                <SelectInput label='Origin'
                    options={FlightDatas.getCountryNames()}
                    selectedValue={selectedOriginCountry}
                    valueChanged={originSelected} />

                <SelectInput label='Destination'
                    options={FlightDatas.getCountryNames()}
                    selectedValue={selectedDestinationCountry}
                    valueChanged={DestinationSelected} />

                <RangeSlider value={value}
                    valueText={valueText}
                    min={400}
                    max={2000}
                    rangeSliderChanged={rangeSliderChanged} />

                <div align='end' className='col-span-full mt-5'>
                    <button onClick={searchButtonClicked} className='btn bg-blue-500 bg-opacity-70 text-white mr-2'>
                        Search
                    </button>
                    <button onClick={clearButtonClicked} className='btn bg-gray-500 bg-opacity-70 text-white'>
                        Clear
                    </button>
                </div>

            </Card>

            <FlightList flightList={flightList}
                countOfTicket={countOfTicket}
                minusCount={minusCount}
                plusCount={plusCount}
                countOfTicketChanged={countOfTicketChanged} />

        </div>
    );
};

export default FilterTrip;