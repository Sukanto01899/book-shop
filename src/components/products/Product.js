import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = ({product, handleAddToCart}) => {
    const {img, price, name, _id} = product;
    
    return (
            <div className='flex flex-col justify-center h-80 	rounded-lg transform hover:duration-500 hover:scale-110 hover:drop-shadow-xl hover:bg-white w-56 sm:w-full overflow-hidden	'>
            <img className='h-52 mx-auto pt-3' src={img} alt="" />
            <div className='text-center space-y-1'>
                <h3 className='font-bold'>{name}</h3>
                <span>${price}</span>
                <div className='text-yellow-400	text-sm'><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></div>
            </div>
            
            <button onClick={()=> handleAddToCart(product)} className='w-4/5 mx-auto py-1 bg-orange-400 rounded-lg transform hover:duration-300 hover:bg-gray-100 hover:ring-2 hover:ring-orange-400  mb-3'>Add To Cart <FontAwesomeIcon icon={faCartPlus}/></button>
            
        </div>
    );
};

export default Product;