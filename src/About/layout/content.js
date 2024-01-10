import React from 'react';
import './content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Person from '../../assets/owner.jpg';
import Im1 from '../../assets/im1.jpg';
import Im2 from '../../assets/im2.jpg';
import Im3 from '../../assets/im3.jpg';
import Im4 from '../../assets/im4.jpg';
import Im5 from '../../assets/im5.jpg';
import Im6 from '../../assets/im6.jpg';


const AboutContent = ()=>{
    return (
        <div className="about-content">
            <div className='row'>
                <div className='col-sm-12 col-lg-4'><h1 className='about-title'>About</h1></div>
                <div className='col-sm-12 col-lg-8 about-col'>
                    <div className='underline1'></div>
                    <h2 className='about-subtitle'>We provide fresh and healthy plants for your space</h2>
                    <p className='about-paragraph'>
                        Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo sapien faucibus in adipiscing risus adipiscing bibendum nec eget tincidunt sed.
                    </p>
                </div>
            </div> 
            <div class="about-video-container">
                <div id="overlay">
                    <img id="overlayImage" src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/Group-107.jpg" alt="Overlay Image"></img>
                </div>
                <iframe id="video" src="https://www.youtube.com/embed/XHOmBV4js_E?si=DkAzqo_rzGVB16Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="our-story-2">
                <div className='row'>
                    <div className='col-sm-12 col-lg-5'><h1 className='our-story-title'>Our Story</h1></div>
                    <div className='col-sm-12 col-lg-7 about-col'>
                        <p className='our-story-text'>Tristique dapibus porta viverra sit accumsan integer semper dolor etiam id iaculis feugiat egestas urna est magna euismod donec facilisis sed integer orci ac.</p>
                        <p className='our-story-text'>Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo, et, pellentesque pellentesque sapien faucibus in adipiscing risus adipiscing bibendum in nec eget tincidunt in in sed magna arcu molestie nec mauris quisque.</p>
                        <p className='our-story-text'>Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae in volutpat faucibus elementum, sodales orci mi fames molestie venenatis nunc hendrerit.</p>
                        <div className='row'>
                        <div className='col-12'>
                            <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft} />
                            <p className='feedback-text bold'>Massa aliquam montes, odio porttitor sit ac maecenas interdum ut tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in nec ullamcorper vel.</p>
                            <div className='row'>
                                    <div className='round-img-container'>
                                        <img  className='round-img' src={Person} alt="Image"></img>
                                    </div>
                                    <div className='col custom-col'>
                                        <h6 className='payment-title'>Emily Evergreen</h6>
                                        <p className='payment-text'>Founder, Owner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-images'>
                <div className="row plants-row row-im">
                    <div className='col-sm-6 col-md-4 left'>
                        <img  className='about-image' src={Im1} alt="Image"></img>
                    </div>
                    <div className='col-sm-6 col-md-4 mid'>
                        <img  className='about-image' src={Im2} alt="Image"></img>
                    </div>
                    <div className='col-sm-6 col-md-4 right'>
                        <img  className='about-image' src={Im3} alt="Image"></img>
                    </div>
                </div>
                <div className="row plants-row row-im">
                    <div className='col-sm-6 col-md-4 left'>
                        <img  className='about-image' src={Im4} alt="Image"></img>
                    </div>
                    <div className='col-sm-6 col-md-4 mid'>
                        <img  className='about-image' src={Im5} alt="Image"></img>
                    </div>
                    <div className='col-sm-6 col-md-4 right'>
                        <img  className='about-image' src={Im6} alt="Image"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;