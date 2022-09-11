import * as React from 'react';
import { Slider, Box } from '@material-ui/core';

export default function RangeSlider(props) {

    return (
        <div className='h-6'>
            <Box sx={props.style}>
                <Slider
                    value={props.value}
                    min={props?.min}
                    max={props?.max}
                    onChange={props.rangeSliderChanged}
                    valueLabelDisplay={props.labelStatus}
                    getAriaValueText={props.valueText}
                />
            </Box>
        </div>
    );
}