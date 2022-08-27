import React, { useState } from 'react';
import { TextField } from '@material-ui/core'

import Helper from '../../helper/helper'
import LabelBox from '../components/LabelBox'

const ShowDetailOfKeyboardKeys = () => {

    const [keyInfo, setKeyInfo] = useState({});
    const [textFieldValue, setTextFieldValue] = useState('');
    const [CurrectFieldValue, setCurrectFieldValue] = useState('');

    const keyPressed = (e) => {
        e.preventDefault();
        let keyPressed = e.key;
        let keyPressedKeyCode = e.keyCode;
        let keyPressedLocation = e.location;
        let keyPressedName = e.nativeEvent.code;

        setKeyInfo({
            'keyPressed': keyPressed,
            'keyPressedKeyCode': keyPressedKeyCode,
            'keyPressedLocation': keyPressedLocation,
            'keyPressedName': keyPressedName
        });

        // console.log(keyPressed.charCodeAt());

        console.log(String.fromCharCode(keyPressedKeyCode))
    }

    const textFieldOnKeyDown = (e) => {
        let value = '';
        if (e.location === 0) {
            console.log(e.keyCode);
            if (e.keyCode === 8) {
                // console.log('you press backSpace');
                setCurrectFieldValue(CurrectFieldValue.slice(0, -1));
            } else {
                value = String.fromCharCode(e.keyCode);
                setCurrectFieldValue(CurrectFieldValue + value);
            }

        }
    }

    // const textFieldChanged = (e) => {
    //     console.log(e);
    //     let value = e.target.value;
    //     setTextFieldValue(value);
    //     if (value.length === 0) {
    //         setCurrectFieldValue('')
    //     }
    // }

    return (
        <>
            < button onKeyDown={keyPressed}
                className='flex w-full justify-center cursor-default items-center h-full text-4xl'>

                {Helper.isEmpty(keyInfo)
                    ? <div>Press any key to to get the key code & some info</div>

                    : <div className='flex w-full p-8 flex-col '>
                        <div className='mb-48'>you pressed <span className='text-red-700'>{keyInfo.keyPressedName}</span> in keyboard</div>
                        <div className='grid grid-cols-4 gap-4'>
                            <LabelBox title='Key Pressed'
                                valueClassName='text-red-700 text-2xl'
                                titleClassName='text-3xl'
                                value={keyInfo.keyPressed} />
                            <LabelBox title='Key Name'
                                valueClassName='text-red-700 text-2xl'
                                titleClassName='text-3xl'
                                value={keyInfo.keyPressedName} />
                            <LabelBox title='Key Code'
                                valueClassName='text-red-700 text-2xl'
                                titleClassName='text-3xl'
                                value={keyInfo.keyPressedKeyCode} />
                            <LabelBox title='Key Location'
                                valueClassName='text-red-700 text-2xl'
                                titleClassName='text-3xl'
                                value={keyInfo.keyPressedLocation} />
                        </div>
                    </div>
                }
            </button>
            {/* <div className='my-10'>
                <TextField value={textFieldValue} onChange={textFieldChanged} onKeyDown={textFieldOnKeyDown} />
                {!Helper.isEmpty(CurrectFieldValue) && <div>Did you mean <span className=''>{CurrectFieldValue}</span> ?</div>}
            </div> */}
        </>
    );
};

export default ShowDetailOfKeyboardKeys;