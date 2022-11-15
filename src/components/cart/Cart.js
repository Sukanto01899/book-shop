import React from 'react';

const Cart = ({carts}) => {
    return (
        <div className='sticky top-0 border-2'>
            <h1 className='text-lg text-center'>Your Cart</h1>
            <div>
                {carts.map(cart => <SelectedProduct key={carts.indexOf(cart)} cart={cart}></SelectedProduct>)}
            </div>
        </div>
    );
};

const SelectedProduct = ({cart})=>{
    const {img, quantity, name} = cart;
    return (
        <div className='flex justify-between items-center bg-gray-400 rounded-md py-3 px-2 mb-2'>
            <div className='flex items-center'>
            <img className='w-12 h-12' src={img} alt="" />
            <h3>{name}</h3>
            </div>
            <div className='flex items-center justify-between'>
                <span>{quantity}</span>
            </div>
        </div>
    )
}

export default Cart;