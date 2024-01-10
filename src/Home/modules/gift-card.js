import React from'react';
import './gift-card.css'

const GiftCard=()=>{
    return(
        <div className='gift-card'>
            <div className='gift-card-content'>
                <p className='gift-card-title'>Gift Card</p>
                <h1 className='gift-card-subtitle'>Give the Gift of Greenery</h1>
                <p className='gift-card-description'>Pretium tortor risus enim neque quis pellentesque maecenas proin odio eget arcu</p>
                <button type="button" class="btn btn-light shop-now-btn">Purchase A Gift Card</button>
            </div>
        </div>
    );
}

export default GiftCard;