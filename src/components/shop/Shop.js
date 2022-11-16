import React, { useEffect, useState } from 'react';
import { getAddedProduct, updateDB } from '../../utilitis/fackdb';
import Cart from '../cart/Cart';
import Product from '../products/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] =  useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    useEffect(()=>{
        const storedCart = getAddedProduct();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product._id === id);
            if(addedProduct){
                savedCart.push(addedProduct)
                addedProduct.quantity = storedCart[id]
            }
        }
        setCarts(savedCart)
    }, [products])
    
    const handleAddToCart = (product, event)=>{
        event.target.innerText = 'Already Added';
        event.target.disabled = true
        let newCart;
        if(product.quantity < 1){
            product.quantity +=1
            newCart = [...carts, product];
            setCarts(newCart)
        }else{
            product.quantity +=1
            newCart = [...carts]
            setCarts(newCart)
        }
        updateDB(product._id)
    }
    return (
        <section className='w-11/12 mx-auto '>
           <div className='grid lg:grid-cols-4 my-10 gap-6'>
             {/* Product */}
             <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-span-3 gap-5 justify-self-center	sm:justify-self-stretch'>
                {products.map(product => <Product 
                key={product._id}
                product={product}
                handleAddToCart= {handleAddToCart}
                 ></Product>)}
            </div>
            {/* Cart */}
            <div className='col-span-3 sm:col-span-1 md:col-span-1'>
                <Cart carts={carts}></Cart>
            </div>
           </div>
        </section>
    );
};

export default Shop;
