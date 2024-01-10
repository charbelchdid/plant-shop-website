import React from 'react';
import './content.css';
import NewPlants from '../modules/new-plants';
import OurStory from '../modules/our-story';
import CustomerFeedback from '../modules/customer-feedback';
import GiftCard from '../modules/gift-card';
import Payment from '../modules/payment';

const HomeContent=()=>{
    return(
        <div className="home-content">
            <NewPlants />
            <OurStory />
            <CustomerFeedback />
            <GiftCard />
            <Payment />
        </div>
    )
}

export default HomeContent;