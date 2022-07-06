import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import './App.css'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberformat: 0,
            en: true
        };
    }

    NumberFormatCustom = (props, state) => {
        const { inputRef, onChange, name, ...other } = props;
        const { en, numberformat } = state;
        return (
            <>
                <NumberFormat
                    {...other}
                    getInputRef={inputRef}
                    allowNegative={false}
                    onValueChange={() => {
                        onChange({
                            target: {
                                name: name,
                                value: numberformat,
                            },
                        });
                    }}
                    thousandSeparator
                    isNumericString
                />
                <span>{en ? 'AED' : 'Rial'}</span>
            </>
        );
    }

    handleChange = (e) => {
        console.info(e);
        this.setState({
            numberformat: e.target.value
        })
    }
    render() {
        return (
            <div>
                <TextField
                    value={this.state.numberformat}
                    onChange={this.handleChange}
                    name="numberformat"
                    label='currency'
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: this.NumberFormatCustom,
                    }}
                />

            </div>
        )
    }
}
