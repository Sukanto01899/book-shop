import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { updateDB } from '../../utilitis/fackdb';

const Cart = ({carts, chooseOne, chooseAgain, removeProduct}) => {
    
    return (
        <div className='sticky top-0 border-2'>
            <h1 className='text-lg text-center'>Your Cart</h1>
            <div>
                {carts.map(cart => <SelectedProduct 
                key={carts.indexOf(cart)} 
                cart={cart} 
                removeProduct={removeProduct}></SelectedProduct>)}
            </div>
            <div className='flex space-x-1'>
            <button onClick={()=> chooseOne()} className='w-full bg-orange-400 py-2'>Choose 1 for me</button>
            <button onClick={()=> chooseAgain()} className='w-full bg-orange-400 py-2'>Choose again</button>
            </div>
        </div>
    );
};

const SelectedProduct = ({cart, removeProduct})=>{
    const {img, quantity, name, _id} = cart;
    const [productCount, setProductCount] = useState(quantity);

    //Add product amount
    const productPlus = ()=>{
        setProductCount(productCount + 1);
        updateDB(_id)
    };

    //Minus product amount
    const productMinus = ()=>{
        if(productCount > 1){
            setProductCount(productCount - 1)
        }
    };
    
    return (
        <div className='flex justify-between items-center bg-gray-200 rounded-md py-3 px-2 mb-2'>
            <div className='flex items-center space-x-2'>
            <img className='w-9 h-9' src={img} alt="" />
            <h3 className='text-xs'>{name}</h3>
            </div>
            <div className='flex items-center justify-between'>
                <button className='py-1 px-2 bg-slate-300 rounded-full' onClick={productPlus}>+</button>
                <div className='p-1 w-9 text-center bg-slate-300 mx-2'>{productCount}</div>
                <button className='py-1 px-2 bg-slate-300 rounded-full' onClick={productMinus}>-</button>
            </div>
            <div>
                <button onClick={()=> removeProduct(_id)} className='p-1 text-red-500 text-lg'><FontAwesomeIcon icon={faXmark}/> </button>
            </div>
        </div>
    )
}

export default Cart;