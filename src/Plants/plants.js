import React from "react";
import Footer from "../Common/footer";
import NavBar from "../Common/navbar";
import PlantsContent from "./layout/content";
import './plants.css';
const Plants = () => {
    return (
        <div className='plants-page'>
            <NavBar/>
            <PlantsContent/>
            <Footer/>
        </div>
    );
}
export default Plants;