import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Products } from '../../App';
import helper from '../../helper/helper';
import ProductCard from './components/ProductCard';

const Store = () => {

    let products = useContext(Products);
    const [productsInCart, setProductsInCart] = useState([]);

    const updateCartItems = (id, count) => {

        let selectedProduct = products.find(item => item.id === id);
        let filterProducts = productsInCart.filter(item => item.id !== id);

        let updateCount = { ...selectedProduct, count: count }

        if (count == 0) {
            setProductsInCart(filterProducts);
        }
        if (filterProducts.length > 0) {
            count > 0 && filterProducts.push(updateCount);
            setProductsInCart(filterProducts);
        } else setProductsInCart(count > 0 ? [updateCount] : []);
    }

    console.log('productsInCart', productsInCart);

    return (
        <div className='grid grid-cols-12 p-5 gap-5'>
            {products?.map(product =>
                <ProductCard key={product.id} updateCartItems={updateCartItems} product={product} />
            )}
        </div>
    );
};

export default Store;