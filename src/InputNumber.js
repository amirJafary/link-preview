import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';

export default class InputNumber extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    valueChanged = (e) => {

        // if (e.target.value) {
        //     let newValue = e.target.value.toString().includes(',') && this.props.isCurrency
        //         ? e.target.value.toString().split(',').join('')
        //         : e.target.value
        //     let regex = /^[0-9]+$/
        //     regex.test(newValue) && this.setState({
        //         value: this.props.isCurrency ? new Intl.NumberFormat().format(newValue) : Number(newValue)
        //     })
        // } else {
        //     this.setState({
        //         value: ''
        //     })
        // }

        let Value = e.target.value
        Value = Value.replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[۰-۹]/g, d => "0123456789".indexOf(d));
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <>
                <TextField
                    value={this.state.value}
                    onChange={this.valueChanged}
                    label={this.props.label}
                    InputProps={
                        this.props.endAdornment && {
                            endAdornment: <InputAdornment position="end">{this.props.endAdornment}</InputAdornment>,
                        }}
                />
            </>
        )
    }
}
