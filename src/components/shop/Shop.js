import React, { useEffect, useState } from 'react';
import { getAddedProduct, removeCartFromDB, removeFullCart, updateDB } from '../../utilitis/fackdb';
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

    //Choose random item from cart
    const chooseOne = ()=>{ 
        if(carts.length > 0){
            const random = Math.round(Math.random() * (carts.length - 1));
            setCarts([carts[random]])
        }
    };

    //Choose again button function from cart
    const chooseAgain = ()=>{
        setCarts([])
        removeFullCart()
    };

    // Remove item from cart
    const removeProduct = (id)=>{
        removeCartFromDB(id)
        const removeProduct = carts.find(cart => cart._id === id);
        const removingCart = [...carts]
        const rIndex = carts.indexOf(removeProduct)
        removingCart.splice(rIndex, 1)
        setCarts(removingCart)
    };
    
    //Handle add to cart function
    const handleAddToCart = (product, event)=>{
        if(carts.length >= 4){
            alert('You can not add more then 4 product')
            return;
        }
        event.target.innerText = 'Already Added';
        if(carts.indexOf(product) === -1){
            product.quantity +=1
            const newCart = [...carts, product];
            setCarts(newCart)
            updateDB(product._id)
        }else{
            alert('Product already added')
        }
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
            <div className='col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1'>
                <Cart carts={carts} chooseOne={chooseOne} chooseAgain={chooseAgain} removeProduct={removeProduct}></Cart>
            </div>
           </div>
        </section>
    );
};


export default Shop;
