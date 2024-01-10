import React from 'react';
import './header.css';
import NavBar from '../modules/navbar';
import Welcome from '../modules/welcome';

const Header = ()=>{
    return(
        <div className="header">
            <NavBar />
            <Welcome />
        </div>
    )
}

export default Header;