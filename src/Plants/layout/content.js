import React from "react";
import './content.css';
import Plant from "../../Home/modules/plant-widget"
import plantImage from '../../assets/plants-ecommerce-product-featured-img-8-600x900.jpg';

const PlantsContent = () => {
    return (
        <div className="plants-content">
            <div className="row">
                <p>Showing 1-9 of 25 results</p>
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
            <nav class="woocommerce-pagination">
            <ul class="page-numbers">
                <li><span aria-current="page" class="page-numbers current">1</span></li>
                <li><a class="page-numbers" href="https://websitedemos.net/plant-shop-02/shop/page/2/">2</a></li>
                <li><a class="page-numbers" href="https://websitedemos.net/plant-shop-02/shop/page/3/">3</a></li>
            </ul>
            </nav>
            </div>
    );
}

export default PlantsContent;