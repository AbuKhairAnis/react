import React from 'react';

const Cart = (props) => {
    const { image, title, desc } = props.data
    return (
        <div className='card-item'>
            <div className="card-box box_shodow">
                <img className='card-img' src={image} alt="" />
                <h2 className='row'>{title}</h2>
                <p>{desc}</p>
            </div>



        </div>
    );
};

export default Cart;