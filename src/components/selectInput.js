import React from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from '@material-ui/core';

const SelectInput = (props) => {
    return (
        <div className={props?.className}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{props?.label}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.selectedValue}
                        label={props?.label}
                        onChange={props.valueChanged}
                    >
                        {props.options?.map(option =>
                            <MenuItem value={option.id}>{option.value}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default SelectInput;