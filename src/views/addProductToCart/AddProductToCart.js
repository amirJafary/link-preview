import { Delete } from '@material-ui/icons';
import React, { useState } from 'react';

import helper from '../../helper/helper';

const AddProductToCart = () => {

    const [quantity, setQuantity] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
    });

    const [productsInCard, setProductsInCard] = useState([])

    const products = [
        {
            id: 1,
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            price: 109.95,
            description: 'Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday',
            category: "men's clothing",
            availableInStock: 20
        },
        {
            id: 2,
            title: 'Mens Casual Slim Fit',
            price: 15.99,
            description: 'The color could be slightly different between on t…uld be reviewed below on the product description.',
            category: "men's clothing",
            availableInStock: 40
        },
        {
            id: 3,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            price: 695,
            description: 'From our Legends Collection, the Naga was inspired…th love and abundance, or outward for protection.',
            category: 'jewelery',
            availableInStock: 2
        },
        {
            id: 4,
            title: 'Solid Gold Petite Micropave ',
            price: 168,
            description: 'Satisfaction Guaranteed. Return or exchange any or…eed. Return or exchange any order within 30 days.',
            category: 'jewelery',
            availableInStock: 3
        },
        {
            id: 5,
            title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
            price: 64,
            description: 'USB 3.0 and USB 2.0 Compatibility Fast data transf…ser’s hardware configuration and operating system',
            category: 'electronics',
            availableInStock: 15
        },
        {
            id: 6,
            title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
            price: 110,
            description: 'Easy upgrade for faster boot up, shutdown, applica…drive capacity, host device, OS and application.)',
            category: 'electronics',
            availableInStock: 7
        },
        {
            id: 7,
            title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            price: 56.99,
            description: 'Note:The Jackets is US standard size, Please choos…t season and help you adapt to different climates',
            category: "women's clothing",
            availableInStock: 20
        },
        {
            id: 8,
            title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
            price: 29.95,
            description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75…ASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
            category: "women's clothing",
            availableInStock: 40
        }
    ];

    const clearCard = () => {
        setProductsInCard([]);
    }

    const addToCardClicked = (id) => {

        let productSelected = products.filter(item => item.id == id)[0];
        let productSelectedQuantity = quantity[id];
        setQuantity({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
        })

        if (productSelectedQuantity > 0)
            setProductsInCard([...productsInCard,
            {
                id: productsInCard.length + 1,
                title: productSelected.title,
                quantity: productSelectedQuantity,
                price: productSelected.price,
                submitDate: helper.getNowDate(),
                submitTime: helper.getCurrentTime(),
                totalPrice: productSelectedQuantity * productSelected.price
            }
            ])
    }

    const quantityChanged = (e) => {
        let productSelected = products.filter(item => item.id == e.target.name);

        if (productSelected[0].availableInStock >= e.target.value && e.target.value >= 0) {
            setQuantity({ [e.target.name]: +e.target.value });
        }
    }

    const deleteOrderFromCardClicked = (id) => {
        let newCardValues = productsInCard.filter(item => item.id !== id);
        setProductsInCard(newCardValues);
    }

    const totalPriceCalcutor = () => {
        let total = 0;
        productsInCard.map(product =>
            total += product.totalPrice
        );
        return total;
    }
    return (
        <div className='p-5'>
            <ul className='grid grid-cols-12 gap-5'>
                {products.map(product =>
                    <li key={product.id}
                        className='col-span-3 flex flex-col justify-between border-gray-solid rounded-2xl p-5'>
                        <h6 className='mb-2'>
                            {product.title}
                        </h6>
                        <p>{product.description}</p>
                        <div className='flex items-center mt-2 justify-between'>
                            <div>category :
                                <span className='font-bold ml-2'>
                                    {product.category}
                                </span>
                            </div>
                            <div className='text-red-700 text-xl ml-5'>
                                {product.price} $
                            </div>
                        </div>
                        <div className='my-2'>Available In Stock :
                            <span className='font-bold ml-2'>
                                {product.availableInStock}
                            </span>
                        </div>
                        <div className='grid grid-cols-6 gap-2'>
                            <input type='number'
                                className='col-span-3 px-3 text-lg font-bold border-gray-solid'
                                value={quantity[product.id]}
                                defaultValue={0}
                                // min={0}
                                // max={product.availableInStock}
                                onChange={quantityChanged}
                                name={product.id} />
                            <button className='col-span-3 btn text-white border-gray-solid font-bold bg-sky-300'
                                onClick={() => addToCardClicked(product.id)}>Add To Card</button>
                        </div>
                    </li>
                )}
            </ul>
            {!helper.isEmpty(productsInCard) &&
                <div className='border-gray-solid p-10 mt-5'>
                    {productsInCard.map((item, index) =>
                        <div key={index} className='border-gray-solid p-5 mb-3'>
                            <div className='flex justify-between items-center mb-3'>
                                <div>{item.title}</div>
                                <button onClick={() => deleteOrderFromCardClicked(item.id)} className='cursor-pointer'>
                                    <Delete />
                                </button>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>Rate : <span className='font-bold text-red-500 ml-2'>{item.price} $</span></div>
                                <div>Quantity : <span className='font-bold ml-2'>{item.quantity}</span></div>
                                <div>Submit Time : <span className='font-bold ml-2'>{item.submitDate} - {item.submitTime}</span></div>
                                <div>Total Price : <span className='font-bold text-red-500 ml-2'>{item.totalPrice} $</span></div>
                            </div>
                        </div>
                    )}
                    <div className='flex justify-between items-center mt-5'>
                        <div className='text-lg'>Total Price : <span className='font-bold text-red-500 ml-2'>{totalPriceCalcutor()} $</span></div>
                        <button className='btn bg-yellow-600 text-white' onClick={clearCard}>Clear Card</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default AddProductToCart;