import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProductCard = ({ product, updateCartItems }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        updateCartItems(product.id, count)
    }, [count])


    const productDetailClicked = (id) => {
        console.log(id);
    }

    const plusProductCount = () => {
        setCount(count + 1);
    }

    const minusProductCount = () => {
        setCount(count - 1);
    }

    return (
        <div key={product.id}
            className='col-span-3 border-gray-solid p-3'>
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <img className='w-full h-52'
                        onClick={() => productDetailClicked(product.id)}
                        src={product.image} />
                    <div className=' whitespace-nowrap bg-slate-600 text-white rounded-b-lg p-1 overflow-hidden'>
                        {product.title}
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='font-bold'>
                        Category:
                        <span className='font-normal'>
                            {product.category}
                        </span>
                    </div>
                </div>
                <div className='font-bold my-4 line-clamp line-clamp--4'>
                    Description:
                    <span className='font-normal'>
                        {product.description}
                    </span>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='font-bold'>
                        Price:
                        <span className='font-normal'>
                            {product.price} $
                        </span>
                    </div>

                    {count === 0 &&
                        <button className='btn bg-lime-500 text-white'
                            onClick={plusProductCount}>
                            Add To Cart
                        </button>}
                    {count === 1 &&
                        <div>
                            <button className='btn bg-lime-500 text-white'
                                onClick={minusProductCount}>
                                Remove
                            </button>
                            <button className='btn bg-lime-500 text-white'
                                onClick={plusProductCount}>
                                +
                            </button>
                        </div>
                    }
                    {count > 1 &&
                        <div>
                            <button className='btn bg-lime-500 text-white'
                                onClick={() => minusProductCount(product.id)}>
                                -
                            </button>
                            <span className='p-2 px-4 border-gray-solid  rounded-none'>{count}</span>
                            <button className='btn bg-lime-500 text-white'
                                onClick={() => plusProductCount(product.id)}>
                                +
                            </button>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProductCard;