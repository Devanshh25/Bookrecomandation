import React from 'react';
import './search.css';

const searchcorner = () => {
    return (
        <div className='front-logged-in'>
            <input className="rectangle-8" type="text" placeholder="Search" />
            <img className="vector" alt="Vector" src={vector8} />

        </div>
    )
}
export default searchcorner;
