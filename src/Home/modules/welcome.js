import React from 'react';
import './welcome.css';


const Welcome=()=> {
    return (
        <div className="welcome">
                <h6 className='welcome-text'>Welcome To The Greenstore</h6>
                <h1 className='welcome-quote'>Let’s Bring the Spring to Your Home</h1>
                <button type="button" class="btn btn-light shop-now-btn">Shop Now</button>
        </div>
    );
}

export default Welcome;