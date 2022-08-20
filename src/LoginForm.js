import { Card, OutlinedInput, Button } from '@material-ui/core';
import React, { useState } from 'react';

const LoginForm = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameIsCurrect, setUserNameIsCurrect] = useState(false);
    const [passwordIsCurrect, setPasswordIsCurrect] = useState(false);

    const userNameChanged = (e) => {
        let value = e.target.value;
        setUserName(value);
    }

    const passwordChanged = (e) => {
        let value = e.target.value;
        setPassword(value);
    }

    const userNameBlured = (e) => {
        let value = e.target.value;
        if (value.length < 6) {
            setUserNameIsCurrect(true)
        } else
            setUserNameIsCurrect(false)
        console.log('user name field blured', value);
    }

    const passwordBlured = (e) => {
        let value = e.target.value;
        if (value.length < 8) {
            setPasswordIsCurrect(true)
        } else
            setPasswordIsCurrect(false)
        console.log('password field blured', value);
    }

    return (
        <div className='flex flex-col p-12 items-center h-full bg-yellow-200'>
            <Card raised={true} className='flex p-12 flex-col w-1/2 items-center'>
                <h1 id='login' className='mb-4'>
                    login
                </h1>
                <div className='w-96 text-left flex flex-col'>
                    <label className='mb-3 pl-2 h6'>enter your user name</label>
                    <OutlinedInput className='mb-2 border'
                        value={userName}
                        onChange={userNameChanged}
                        onBlur={userNameBlured} />
                    {userNameIsCurrect && <div className='mb-4 text-red-800'>your user name is not currect, it Should minimum 6 characters.</div>}
                </div>
                <div className='w-96 text-left flex flex-col'>
                    <label className='mb-3 pl-2 h6'>enter your password</label>
                    <OutlinedInput className='mb-2 border'
                        type={'password'}
                        value={password}
                        onChange={passwordChanged}
                        onBlur={passwordBlured} />
                    {passwordIsCurrect && <div className='mb-4 text-red-800'>your password is not currect, it Should minimum 8 characters.</div>}
                </div>

                <div className='mt-8'>
                    <Button size='large'
                        color="secondary"
                        variant="contained"> login </Button>
                </div>
            </Card>
        </div>

    );
};

export default LoginForm;