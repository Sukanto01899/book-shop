import React from 'react';

const Cart = (props) => {
    return (
        <div className='sticky top-0 border-2'>
            <h1 className='text-lg text-center'>Your Cart</h1>
            <div>
                
            </div>
        </div>
    );
};

const SelectedProduct = ()=>{
    return (
        <div className='flex justify-between items-center bg-gray-400 rounded-md py-3'>
            <img src="" alt="" />
            <div className='flex items-center justify-between'>
                <h3>hfsdh</h3>
                <span>45</span>
            </div>
        </div>
    )
}

export default Cart;