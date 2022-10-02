import React from 'react';
import { useState } from 'react';

const Lottery = () => {

    const [newNumber, setNewNumber] = useState('');
    const [winner, setWinner] = useState('');
    const [mobileNumbers, setMobileNumbers] = useState([]);
    const [message, setMessage] = useState('');
    const [totalNumberInLottery, setTotalNumberInLottery] = useState(0)

    const setNumbers = (numbers) => {
        let inComingNumbers = new Set(numbers);
        let finalNumbers = [...inComingNumbers];
        console.log(inComingNumbers.size);
        setTotalNumberInLottery(inComingNumbers.size);
        let setIndex = Math.ceil(Math.random() * (inComingNumbers.size - 1));
        let indexOfWinner = setIndex > 0 ? setIndex : 0;

        setWinner(finalNumbers[indexOfWinner])
    }

    const numberChanged = (e) => {
        let value = e.target.value;
        setNewNumber(value);
    }

    const addMobileNumberClicked = (newNumber) => {
        let regex = new RegExp('^(0)?9\\d{9}$');
        if (regex.test(newNumber)) {
            setMobileNumbers([...mobileNumbers, newNumber]);
            setNewNumber('');
            setMessage('');
        } else {
            setMessage('your number is not valid ...')
        }

    }

    const enterClicked = (e, number) => {
        let regex = new RegExp('^(0)?9\\d{9}$');
        if (e.charCode === 13) {
            if (regex.test(number)) {
                addMobileNumberClicked(number);
                setMessage('');
            } else {
                setMessage('your number is not valid ... ')
            }
        }
    }

    const editNumberClicked = (inComingIndex) => {
        setNewNumber(mobileNumbers[inComingIndex]);
        deleteNumberClicked(inComingIndex)
    }

    const deleteNumberClicked = (inComingIndex) => {
        let deleteSelectedNumber = mobileNumbers.filter((item, index) =>
            index !== inComingIndex
        )
        setMobileNumbers(deleteSelectedNumber);
    }

    const clearClicked = () => {
        setMobileNumbers([]);
        setWinner('');
        setNewNumber('');
        setTotalNumberInLottery(0);
        setMessage('')
    }

    const pickWinnerClicked = () => {
        setNumbers(mobileNumbers)
    }

    return (
        <div className='flex justify-between items-center flex-col h-full'>
            <div className='flex justify-start sticky top-0 items-center flex-col w-full'>
                <div className='grid grid-cols-12 bg-slate-400 w-full py-5 gap-2'>

                    <input type='number'
                        className='col-start-4 col-span-4 px-5 text-lg font-bold border-gray-solid'
                        value={newNumber}
                        onKeyPress={(e) => enterClicked(e, newNumber)}
                        placeholder='0912 111 1111'
                        onChange={numberChanged} />

                    <button className='col-span-2 btn text-white border-gray-solid font-bold bg-sky-300'
                        onClick={() => addMobileNumberClicked(newNumber)}>Add Number</button>

                </div>

                {message && <div className='py-5 font-bold text-xl text-red-700 bg-yellow-300 w-full flex-center'>{message}</div>}
            </div>

            <div className='w-full grid grid-cols-12 place-content-start h-full gap-4 p-4'>
                {mobileNumbers.map((number, index) =>
                    <div className='col-span-6 h-16 grid grid-cols-12 p-4 font-bold text-xl bg-sky-200 rounded-md'>
                        <div className='col-span-1'>{index + 1} -</div>
                        <div className='col-span-7'>{number}</div>
                        <button onClick={() => editNumberClicked(index)} className='me-1 col-span-2'>Edit</button>
                        <button onClick={() => deleteNumberClicked(index)} className='col-span-2'>Delete</button>
                    </div>)}
            </div>

            <div className='grid grid-cols-12 w-full p-5 fixed sticky bottom-0 bg-white border-t border-solid border-gray-500'>

                <div className='col-span-2 text-xl rounded-lg bg-gray-200 px-3 py-3'>
                    Total Numbers : <span className='font-bold'>{mobileNumbers.length}</span>
                </div>

                <div className='col-span-3 ml-5 text-xl rounded-lg bg-gray-200 px-3 py-3'>
                    Total Numbers in Lottery : <span className='font-bold'>{totalNumberInLottery}</span>
                </div>

                <div className='col-span-4 ml-5 text-xl rounded-lg bg-green-200 px-3 py-3'>
                    Winner : <span className='font-bold'>{winner}</span>
                </div>

                <div onClick={pickWinnerClicked}
                    className='col-span-2 cursor-pointer text-center ml-5 text-xl rounded-lg bg-blue-200 px-3 py-3'>
                    Pick the winner
                </div>

                <div onClick={clearClicked}
                    className='col-span-1 cursor-pointer text-center ml-5 text-xl rounded-lg bg-gray-200 px-3 py-3'>
                    Clear
                </div>
            </div>

        </div>
    );
};

export default Lottery;