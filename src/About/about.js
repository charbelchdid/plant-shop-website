import React from "react";
import Footer from "../Common/footer";
import NavBar from "../Common/navbar";
import './about.css';
import AboutContent from "./layout/content";

const About = () => {
    return (
        <div className='about'>
            <NavBar/>
            <AboutContent/>
            <Footer/>
        </div>
    );
}
export default About;