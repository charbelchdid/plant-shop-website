import React from 'react';
import './our-story.css';
import Image from '../../assets/plants-store-story-section-img.jpg';

const OurStory=()=>{
    return(
        <div className="our-story">
            <div className='row'>
                <div className='col-md-12 col-lg-6'>
                    <img className='our-story-image' src={Image} alt="Image"></img>
                </div>
                <div className='col-md-12 col-lg-6 OS-second-col'>
                    <h6 className='our-story-title'>Our Story</h6>
                    <h3 className='our-story-subtitle'>For People Who Love Plants</h3>
                    <p className='our-story-text'>Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc at velit lacinia porttitor a nulla tellus ultrices varius aliquet sed in placerat.</p>
                    <p className='our-story-text'>Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis, mauris consectetur nisl vitae gravida ultricies sem condimentum aliquet ut sed gravida amet vitae euismod pulvinar volutpat laoreet pharetra.</p>
                    <button type="button" class="btn btn-light shop-now-btn-2">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default OurStory;