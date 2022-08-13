import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../context/ProductContextProvider';


const Products = () => {
    const [data, setData] = useState([])
    const value = useContext(ProductsContext);

    useEffect(() => {
        
    }, [])

    return (
        <div>
            {console.info('---------value is =>', value)}
            <h1>Products</h1>
        </div >
    )
};

export default Products;