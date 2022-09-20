import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Pagination = () => {

    const datas = [
        { id: 1, name: 'lorem ipsum 1' },
        { id: 2, name: 'lorem ipsum 2' },
        { id: 3, name: 'lorem ipsum 3' },
        { id: 4, name: 'lorem ipsum 4' },
        { id: 5, name: 'lorem ipsum 5' },
        { id: 6, name: 'lorem ipsum 6' },
        { id: 7, name: 'lorem ipsum 7' },
        { id: 8, name: 'lorem ipsum 8' },
        { id: 9, name: 'lorem ipsum 9' },
        { id: 10, name: 'lorem ipsum 10' },
        { id: 11, name: 'lorem ipsum 11' },
        { id: 12, name: 'lorem ipsum 12' },
        { id: 13, name: 'lorem ipsum 13' },
        { id: 14, name: 'lorem ipsum 14' },
        { id: 15, name: 'lorem ipsum 15' },
        { id: 16, name: 'lorem ipsum 16' },
        { id: 17, name: 'lorem ipsum 17' },
        { id: 18, name: 'lorem ipsum 18' },
        { id: 19, name: 'lorem ipsum 19' },
        { id: 20, name: 'lorem ipsum 20' },
    ];
    const rowPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState([]);
    const buttons = [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
    ]

    useEffect(() => {
        setCurrentListByCurrentPage()
    }, [currentPage])

    const setCurrentListByCurrentPage = () => {
        let endIndex = currentPage * rowPerPage;
        let startIndex = endIndex - rowPerPage;
        setCurrentList(datas.slice(startIndex, endIndex));
    }

    const paginationChanged = (e) => {
        let currentPageIs = e.target.id;
        setCurrentPage(currentPageIs);
        setCurrentListByCurrentPage()
    };

    const prevButtonClicked = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1)
    }

    const nextButtonClicked = () => {
        if (currentPage < 4)
            setCurrentPage(currentPage + 1)
    }

    return (
        <div className='flex items-center p-10 h-full flex-col justify-between'>
            <div>
                <ul>
                    {currentList?.map(item =>
                        <li className='btn bg-slate-200 mb-1' id={item.id}
                            key={item.id}>
                            {item.name}
                        </li>
                    )}
                </ul>
            </div>
            <div className='flex-center'>
                <button onClick={prevButtonClicked} className='text-3xl pb-2 pt-1 w-10'>
                    <ArrowBackIos fontSize='inherit' className='text-slate-500 h-32' />
                </button>
                {buttons?.map(button =>
                    <button key={button.id}
                        id={button.id}
                        onClick={paginationChanged}
                        className={`btn ${+button.id === +currentPage && 'bg-sky-600 text-white'}`}>
                        {button.value}
                    </button>
                )}
                <button onClick={nextButtonClicked} className='text-3xl pb-2 pt-1 w-10'>
                    <ArrowForwardIos fontSize='inherit' className='text-slate-500 h-32' />
                </button>
            </div>
        </div>
    );
};

export default Pagination;