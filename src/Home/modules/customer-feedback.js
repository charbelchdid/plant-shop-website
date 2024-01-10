import React from 'react';
import './customer-feedback.css';
import Person1 from '../../assets/person1.jpg';
import Person2 from '../../assets/person2.jpg';
import Person3 from '../../assets/person3.jpg';
import Feedback from './feedback';

const CustomerFeedback=()=>{
    return(
        <div className='customer-feedback'>
            <h2>What Our Customers Say</h2>
            <div className='underline'>
                <hr className='hr1'></hr>
            </div>
            <div className='row'>
                <div className='col-md-12 col-lg-4'>
                    <Feedback img={Person1} name="Jennifer Lewis" text="Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit."/>
                </div>
                <div className='col-md-12 col-lg-4'>
                    <Feedback img={Person2} name="Alicia Heart" text="Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit."/>
                </div>
                <div className='col-md-12 col-lg-4'>
                    <Feedback img={Person3} name="Juan Carlos" text="Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit."/>
                </div>
            </div>
        </div>
    );  
}

export default CustomerFeedback;