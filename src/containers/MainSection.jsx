import React from 'react';
import CountdownContainer from './CountdownContainer';
// import CouplePic from '../images/Couple-Laughing-Together.jpeg';
import MainTitleName from '../images/main-title-names1.png';
import ChaitanyaName from '../images/chaitanya.png';
import PragyaName from '../images/pragya.png';
import AndName from '../images/and.png';

import { useMediaQuery } from '../components/useMediaQuery';

const MainSection = () => {
  let isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <div className='main-section'>
      <section className='main-section'>
        <div className='layer'>
          {/* <div className='main-title'>Pragya & Chaitanya</div> */}
          {!isMobile && (
            <img src={MainTitleName} alt='' className='main-names-img' />
          )}
          {isMobile && (
            <div className='mobile-main-names-img'>
              <img src={ChaitanyaName} alt='' className='main-names-img' />
              <br />
              <img
                src={AndName}
                alt=''
                className='main-names-img'
                className='mobile-title-img and-img'
              />
              <br />
              <img src={PragyaName} alt='' className='main-names-img' />
            </div>
          )}

          <CountdownContainer />
        </div>

        {/* <img src={CouplePic} className='main-image' alt='Couple'></img> */}
      </section>
    </div>
  );
};

export default MainSection;
