import React from "react";
import Footer from "../Common/footer";
import NavBar from "../Common/navbar";
import './contact.css';
import ContactContent from "./content";

const About = () => {
    return (
        <div className='contact-page'>
            <NavBar/>
            <ContactContent />
            <Footer/>
        </div>
    );
}
export default About;