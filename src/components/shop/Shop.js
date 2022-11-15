import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../products/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <section className='w-11/12 mx-auto '>
           <div className='grid lg:grid-cols-4 my-10'>
             {/* Product */}
             <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-span-3 gap-5 justify-self-center	sm:justify-self-stretch	'>
                {products.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
            {/* Cart */}
            <div>
                <Cart></Cart>
            </div>
           </div>
        </section>
    );
};

export default Shop;