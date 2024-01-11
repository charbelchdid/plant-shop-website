import React from "react";
import './content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const ContactContent = () => {
    return (
        <div className='contact-content'>
            <div className="get-in-touch">
                <div className="row">
                    <div className="col-md-12 col-lg-6 git-column">
                        <h1 className='about-title'>Get In Touch</h1>
                        <p className='about-paragraph contact-version'>
                        Sit vulputate faucibus eget eget scelerisque faucibus malesuada nullam mollis ut montes, dui scelerisque ornare.
                        </p>
                        <div className="git-elemets">
                            <div className="row">
                                <FontAwesomeIcon className="git-icons" icon={faMapMarkerAlt} />
                                <p className="git-small-subtitle">Visit Us </p>
                            </div>
                            <p className="git-small-subsubtitle">123 Demo St, San Francisco, CA 45678, United States </p>
                        </div>
                        <div className="git-elemets">
                            <div className="row">
                                <FontAwesomeIcon className="git-icons" icon={faPhone} />
                                <p className="git-small-subtitle">Call Us</p>
                            </div>
                            <p className="git-small-subsubtitle">+1 123-456-7890 </p>
                        </div>
                        <div className="git-elemets">
                            <div className="row">
                                <FontAwesomeIcon className="git-icons" icon={faEnvelope} />
                                <p className="git-small-subtitle">Email Us</p>
                            </div>
                            <p className="git-small-subsubtitle">mail@example.com</p>
                        </div>
                        <hr className="git-hr"></hr>
                        <div className="follow-us">
                            <p className="git-small-subtitle">Follow us</p>
                            <div className="row follow-us-icons-row">
                                <FontAwesomeIcon className="follow-us-icons" icon={faInstagram} />
                                <FontAwesomeIcon className="follow-us-icons" icon={faPinterest} />
                                <FontAwesomeIcon className="follow-us-icons" icon={faFacebook} />
                                <FontAwesomeIcon className="follow-us-icons" icon={faYoutube} />
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-12 col-lg-6 contact-us-col">
                        <h3 className="contact-us-title">Drop us a line or two</h3>
                        <div>
                        <form>
                            <div class="form-group">
                                <label className="fl" for="exampleFormControlInput1">Name <span className="form-req">*</span></label>
                                <input type="name" class="form-control f-c-custom" id="exampleFormControlInput1" placeholder="Full name"></input>
                            </div>
                            <div class="form-group">
                                <label className="fl" for="exampleFormControlInput1">Email <span className="form-req">*</span></label>
                                <input type="email" class="form-control f-c-custom" id="exampleFormControlInput1" placeholder="Email address"></input>
                            </div>
                            <div class="form-group">
                                <label className="fl" for="exampleFormControlTextarea1">Comment or Message <span className="form-req">*</span></label>
                                <textarea  placeholder="Your message" class="form-control f-c-custom-text" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>
                        <button type="submit" class="btn btn-light shop-now-btn-2">Submit</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default ContactContent;
