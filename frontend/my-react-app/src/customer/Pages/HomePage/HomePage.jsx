

import React from 'react';
import HomeSectionCarousel from '../../components/HomeSectionCard/HomeSectionCarousel';
import MainCarousel from '../../components/MainCarousel';


const HomePage = () => {
    return (
        <div >
            <MainCarousel></MainCarousel>
            <div className=' space-y-10 py-20 flex flex-col  justyfy-center'>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                </div>
        </div>
        
    );
};

export default HomePage;
