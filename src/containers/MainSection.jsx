import React from 'react';
import CountdownContainer from './CountdownContainer';
// import CouplePic from '../images/Couple-Laughing-Together.jpeg';

const MainSection = () => {
  return (
    <div className='main-section'>
      <section className='main-section'>
        <div className='layer'>
          <div className='main-title'>Pragya & Chaitanya</div>
          <CountdownContainer />
        </div>

        {/* <img src={CouplePic} className='main-image' alt='Couple'></img> */}
      </section>
    </div>
  );
};

export default MainSection;
