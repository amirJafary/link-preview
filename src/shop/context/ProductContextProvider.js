import React, { createContext, useEffect, useState } from 'react';
import { getProducts } from '../services/API';
export const ProductsContext = createContext()

const ProductContextProvider = (props) => {

    const [products, setProducts] = useState([])
    // const ProductsContext = createContext();

    // useEffect = (() => {
    //     const fetchAPI = async () => {
    //         setProducts(await getProducts().then((response) => setProducts(response)));
    //     };

    //     fetchAPI()
    // }, [])

    useEffect(() => {
        const fetchAPI = () => {
            setProducts( getProducts().then((response) => setProducts(response)));
        };
        fetchAPI();
    }, [])


    return (
        <ProductsContext.Provider value={products && products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;