import React from 'react';
import logo from '../../logo.png';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 md:h-20 h-24 md:justify-between items-center md:px-16 md:flex">
            <div className='flex items-center text-white flex justify-center mb-4 md:mb-0'>
                <img className='w-14 h-12' src={logo} alt="" />
                <span className='text-lg ml-5'>Book Shop</span>
            </div>
            <div className='text-white space-x-12 text-center'>
                <a href="/home">Home</a>
                <a href="/home">Shop</a>
                <a href="/home">Whitelist</a>
            </div>
        </nav>
    )
};

export default Navigation;