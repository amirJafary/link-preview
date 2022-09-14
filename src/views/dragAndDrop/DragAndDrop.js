import React, { useState } from 'react';
import { useRef } from 'react';

const DragAndDrop = () => {

    const [datas, setDatas] = useState([
        { id: 1, name: 'Veu Js' },
        { id: 2, name: 'React Js' },
        { id: 3, name: 'Bootstrap' },
        { id: 4, name: 'Material Ui' },
    ])
    const [remaning, setRemaning] = useState([]);
    const [complete, setComplete] = useState([]);

    const dargStarted = (e, id) => {
        e.dataTransfer.setData("id", id);
        let tasks = datas.filter(item => item.id === +id);
        let newAppendTask = tasks[0];
    }

    const dargOverHandler = (e) => {
        e.preventDefault();
    }

    const onDropHandler = (e, type) => {
        let id = e.dataTransfer.getData("id");
        let tasks = datas.filter(item => item.id === +id);
        let newAppendTask = tasks[0];
        let remaningTasks = datas.filter(item => item.id !== newAppendTask.id);

        switch (type) {
            case 'remaningTask': remaning.push(newAppendTask);
                break;
            case 'completeTask': complete.push(newAppendTask);
                break;
        }

        setDatas(remaningTasks)
        console.log(remaningTasks, 'remaningTasks');
        console.log(newAppendTask, 'tasks');
        console.log(complete, 'complete');
        console.log(remaning, 'remaning');
    }

    const resetData = () => {
        setComplete([]);
        setRemaning([]);
        setDatas([
            { id: 1, name: 'Veu Js' },
            { id: 2, name: 'React Js' },
            { id: 3, name: 'Bootstrap' },
            { id: 4, name: 'Material Ui' },
        ])
    }

    return (
        <div className=' p-20 flex justify-evenly items-start'>
            <div className='w-52 h-52 flex-center flex-col border-solid border bg-yellow-300 border-stone-700 rounded-lg'
                onDragOver={dargOverHandler}
                onDrop={(e) => onDropHandler(e, 'remaningTask')}>

                {remaning?.map(item =>
                    <div key={item?.id}
                        className='mt-2'>

                        {item?.id} : {item?.name}

                    </div>
                )}
            </div>

            <div className='flex items-center flex-col justify-start'>

                <button className='btn bg-red-400 text-white mb-8' onClick={resetData}>Retry</button>

                <div className='flex-center flex-col'>
                    {datas?.map(item =>
                        <div key={item?.id}
                            className='mt-2'
                            draggable
                            onDragStart={(e) => dargStarted(e, item?.id)}>

                            {item?.id} : {item?.name}

                        </div>
                    )}
                </div>
            </div>


            <div className='w-52 h-52 flex-center flex-col border border-solid bg-green-300 border-stone-700 rounded-lg'
                onDragOver={dargOverHandler}
                onDrop={(e) => onDropHandler(e, 'completeTask')}>
                {complete?.map(item =>
                    <div key={item.id} className='mb-2'>

                        {item?.id} : {item?.name}

                    </div>
                )}
            </div>
        </div>
    );
};

export default DragAndDrop;