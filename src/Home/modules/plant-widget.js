import React from 'react';
import './plant-widget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';



const Plant=(props)=>{
    return(
        <div className="plant">
            <div className='row'>
                <div className='col-12'>
                    <img className='plant-image' src={props.image} alt="Image"></img>
                    <FontAwesomeIcon icon={farStar} />
                    <FontAwesomeIcon icon={farStar} />
                    <FontAwesomeIcon icon={farStar} />
                    <FontAwesomeIcon icon={farStar} />
                    <FontAwesomeIcon icon={farStar} />
                    <p className='plant-name'>{props.plantName}</p>
                    <p className='plant-type'>{props.plantType}</p>
                    <p className='plant-price'>{props.plantPrice}</p>
                </div>
            </div>
        </div>
    );
}

export default Plant;
