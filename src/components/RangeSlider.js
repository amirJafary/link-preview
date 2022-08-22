import * as React from 'react';
import {Slider,Box} from '@material-ui/core';

export default function RangeSlider(props) {

    return (
        <div className='h-6'>
            <div className='mb-3'>filter your price</div>
            <Slider
                value={props.value}
                min={props?.min}
                max={props?.max}
                onChange={props.rangeSliderChanged}
                valueLabelDisplay="auto"
                getAriaValueText={props.valueText}
            />
        </div>
    );
}