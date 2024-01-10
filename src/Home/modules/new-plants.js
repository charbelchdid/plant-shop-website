import React from 'react';
import './new-plants.css';
import Plant from './plant-widget';
import plantImage from '../../assets/plants-ecommerce-product-featured-img-8-600x900.jpg';


const NewPlants=()=>{
    return(
        <div className="new-plants">
            <div className="row">
                <h2 className='home-body-title'>New Plants</h2>
                <button type="button" class="btn btn-light shop-now-btn-2">Shop Now</button>
            </div>
            <div className="plants-row">
                <div className="row">
                    <div className='col-sm-6 col-md-4 left'>
                        <Plant 
                            image={plantImage}
                            plantName="Birdnest Japanese"
                            plantType="Air purifying"
                            plantPrice="$84.90" />
                    </div>
                    <div className='col-sm-6 col-md-4 mid'>
                        <Plant 
                            image={plantImage}
                            plantName="Birdnest Japanese"
                            plantType="Air purifying"
                            plantPrice="$84.90" />
                    </div>
                    <div className='col-sm-6 col-md-4 right'>
                        <Plant 
                            image={plantImage}
                            plantName="Birdnest Japanese"
                            plantType="Air purifying"
                            plantPrice="$84.90" />
                    </div>
                </div>
            </div>
            <div className="row plants-row">
                <div className='col-sm-6 col-md-4 left'>
                    <Plant 
                        image={plantImage}
                        plantName="Birdnest Japanese"
                        plantType="Air purifying"
                        plantPrice="$84.90" />
                </div>
                <div className='col-sm-6 col-md-4 mid'>
                    <Plant 
                        image={plantImage}
                        plantName="Birdnest Japanese"
                        plantType="Air purifying"
                        plantPrice="$84.90" />
                </div>
                <div className='col-sm-6 col-md-4 right'>
                    <Plant 
                        image={plantImage}
                        plantName="Birdnest Japanese"
                        plantType="Air purifying"
                        plantPrice="$84.90" />
                </div>
            </div>
        </div>
    )
}

export default NewPlants;