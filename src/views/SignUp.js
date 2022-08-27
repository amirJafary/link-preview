import React, { useEffect, useState } from 'react';
import { validate } from './validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false,
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const notify = (text,isSuccesfull) => isSuccesfull ? toast.success(text) :toast.warning(text);

    useEffect(() => {
        setErrors(validate(data))
    }, [data, touched])

    const inputFocused = (e) => {
        setTouched({ ...touched, [e.target.name]: true })
    }

    const valueChanged = (e) => {
        if (e.target.name === 'isAccepted') {
            setData({ ...data, [e.target.name]: e.target.checked })
        } else {
            setData({ ...data, [e.target.name]: e.target.value })
        }
    }

    const submitClicked = (e) => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            notify('your informations submit succesfully',true);
        } else {
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            });
            notify('please complete your informations',false);
        }
    }

    return (
        <div>
            <form onSubmit={submitClicked} className='text-start'>
                <h2>SignUp</h2>
                <div className='text-start mb-4'>
                    <label className='me-2'>Name</label>
                    <div>
                        <input type='text'
                            name='name'
                            onFocus={inputFocused}
                            value={data.name}
                            onChange={valueChanged}
                            placeholder='please enter your name ...' />
                        <div>{errors.name && touched.name && <span className='text-danger'>{errors.name}</span>}</div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label className='me-2'>Email</label>
                    <div>
                        <input type='email'
                            name='email'
                            onFocus={inputFocused}
                            value={data.email}
                            onChange={valueChanged}
                            placeholder='please enter your email ...' />
                        <div>{errors.email && touched.email && <span className='text-danger'>{errors.email}</span>}</div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label className='me-2'>Password</label>
                    <div>
                        <input type='password'
                            name='password'
                            onFocus={inputFocused}
                            value={data.password}
                            onChange={valueChanged}
                            placeholder='please enter your password ...' />
                        <div>{errors.password && touched.password && <span className='text-danger'>{errors.password}</span>}</div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label className='me-2'>Confirm Password</label>
                    <div>
                        <input type='password'
                            name='confirmPassword'
                            onFocus={inputFocused}
                            value={data.confirmPassword}
                            onChange={valueChanged}
                            placeholder='please confirm your password ...' />
                        <div>{errors.confirmPassword && touched.confirmPassword && <span className='text-danger'>{errors.confirmPassword}</span>}</div>
                    </div>
                </div>
                <div className='mb-4'>
                    <span className='me-2'>I Read & Accept Your Terms</span>
                    <input type='checkbox'
                        name='isAccepted'
                        onFocus={inputFocused}
                        value={data.isAccepted}
                        onChange={valueChanged} />
                    <div>{errors.isAccepted && touched.isAccepted && <span className='text-danger'>{errors.isAccepted}</span>}</div>
                </div>
                <div>
                    <button type='submit'>submit</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;