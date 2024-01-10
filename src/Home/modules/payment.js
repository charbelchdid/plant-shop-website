import React from 'react';
import './payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';


const Payment=()=> {
    return (
        <div className="payment">
            <div className='row'>
                <div className='col-md-12 col-lg-4 e'>
                    <div className='row'>
                        <FontAwesomeIcon className='left-icon' icon={faLock} />
                        <div className='col'>
                            <h6 className='payment-title'>Secure Payment</h6>
                            <p className='payment-text'>Curabitur interdum, nisl at tincidunt.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 col-lg-4 e'>
                    <div className='row'>
                        <FontAwesomeIcon className='left-icon' icon={faBox} />
                        <div className='col'>
                            <h6 className='payment-title'>Delivered With Care</h6>
                            <p className='payment-text'>Donec sit amet neque id nisl.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 col-lg-4 e'>
                    <div className='row'>
                        <FontAwesomeIcon className='left-icon' icon={faHandHoldingHeart} />
                        <div className='col'>
                            <h6 className='payment-title'>Excellent Service</h6>
                            <p className='payment-text'>Amet neque id nisl ullamcorper.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;