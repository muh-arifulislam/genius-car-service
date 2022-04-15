import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 '>
            <div className='service border rounded p-3'>
                <img className='w-100 rounded' src={img} alt="" />
                <p className='m-0'>Service: {name}</p>
                <p className='m-0'>Price: ${price}</p>
                <p>Description: {description}</p>
                <button className='btn btn-primary'>Book Service</button>
            </div>
        </div>
    );
};

export default Service; <h1>service</h1>