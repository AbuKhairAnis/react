import React from 'react';
import Cart from './Cart/Cart';
import './Features.css'
import data from './Features_api';


const Features = () => {
    return (
        <div>
        <div className="features">
            <div className="heading">
                <h2 className='text-brand uppercase'>Features</h2>
            </div>
        </div>
        <div className='content grid'>
            {
                data.map((value, index)=> <Cart key={index} data={value}></Cart>)
            }

        </div>
        </div>
    );
};

export default Features;