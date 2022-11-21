import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './style/App.scss';
import Practice from './views/practice/Practice';
import Store from './views/store/Store';
export const Products = React.createContext();

const App = () => {

    const [products, setProducts] = useState([])

    const baseUrl = 'https://fakestoreapi.com/products';
    const getData = () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className='w-full h-screen'>
            <Products.Provider value={products}>
                {/* <Practice /> */}
                <Store />
            </Products.Provider>
        </div>
    );
};

export default App;
