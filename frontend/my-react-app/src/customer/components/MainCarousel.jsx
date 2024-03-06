// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// import { MainCarouselData } from './HomeCarousel/MainCarouselData';




// const MainCarousel = () => {

//     const items = MainCarouselData.map((item) => <img className='cursor-pointer' 
//     role='presentation' src={item.image} alt="" />)
  
//     return(
//     <AliceCarousel 
//         items={items}
//         disableButtonsControls
//         autoPlay
//         autoPlayInterval={1200}
//         infinite
//     />
//     )
//     }



import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './HomeCarousel/MainCarouselData';
//import AliceCarousel from 'react-alice-carousel';

const MainCarousel = () => {
    const items = MainCarouselData.map((item, index) => (
        <div key={index} className='cursor-pointer'>
            <img src={item.image} alt='' />
        </div>
    ));

    

    return (
        <AliceCarousel
            items={items}
            
            disableButtonsControls
            autoPlay
            autoPlayInterval={1500}
            infinite
        />
    );
};

export default MainCarousel;
