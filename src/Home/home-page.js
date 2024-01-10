import React from 'react';
import Header from './layout/header';
import HomeContent from './layout/content';
import Footer from '../Common/footer';

const Home = () =>{
    return (
        <div>
            <Header />
            <HomeContent />
            <Footer />
        </div>
    );
}

export default Home;
