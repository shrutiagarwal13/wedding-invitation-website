import React from 'react';
// import GroomPic from '../images/groom-avatar.png';
// import BridePic from '../images/bride-avatar.png';
import CouplePic from '../images/Indian-couple.png';
import IntroCard from '../components/IntroCard';

const IntroductionSection = () => {
  return (
    <div>
      <section className='introduction-section'>
        <div className='section-heading intro-heading'>The Couple</div>
        <div>
          <div className='container'>
            <div className='row intro-cards'>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <IntroCard
                  profilepic={CouplePic}
                  name='Chaitanya Agrawal'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
                />
              </div>

              <div className='col-md-5'>
                <IntroCard
                  profilepic={CouplePic}
                  name='Pragya Lakshmi'
                  description='Lobortis feugiat vivamus at augue eget. Duis convallis convallis tellus id. Est ante in nibh mauris. Ut venenatis tellus in metus vulputate eu. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Feugiat nibh sed pulvinar proin gravida hendrerit. Bibendum enim facilisis gravida neque convallis a. Nulla aliquet porttitor. '
                />
              </div>
              <div className='col-md-1'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroductionSection;
