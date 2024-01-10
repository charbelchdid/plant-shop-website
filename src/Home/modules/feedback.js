import React from 'react';
import './feedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Feedback=(props)=>{
    return(
        <div className='feedback'>
            <div className='row'>
                <div className='col-12'>
                    <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft} />
                    <p className='feedback-text'>{props.text}</p>
                    <div className='round-img-container'>
                        <img  className='round-img' src={props.img} alt="Image"></img>
                    </div>
                    <p className='feedback-name'>{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Feedback;