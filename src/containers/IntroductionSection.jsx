import React from 'react';
// import GroomPic from '../images/groom-avatar.png';
// import BridePic from '../images/bride-avatar.png';
import ChaitanyaPic from '../images/chaitanya-pic.jpeg';
import PragyaPic from '../images/pragya-pic.jpeg';
import IntroCard from '../components/IntroCard';

const IntroductionSection = () => {
  let chaitanyaDesc = `
  <div>
  <p>Engineer- MBA by profession, travel enthusiast and sports lover by heart. I like meeting new people and gather different experiences. </p> <p>
Couldn’t have asked for a better life partner than Pragya. Both of us being from completely different fields will make life even more exciting. In such a short span, she has shown that she is so caring and adjusting which is mesmerising. Looking forward to a better phase of life.</p></div>`;

  let pragyaDesc = `
<div>
<p>
Microbiologist by profession, nature lover and enjoy watching movies in my leisure time. I like to travel and explore new places. </p>
<p>Chaitanya, from the very first moment we met, I hoped it would be you, I have carried around the image of you in my heart my whole life. From this day onwards, you shall not walk alone. As I have given you my hand to hold, I give you my life to keep. I can't wait to celebrate our wedding day with you.
</p>
</div>

`;
  return (
    <div>
      <section className='introduction-section'>
        <div className='section-heading intro-heading'>The Couple</div>
        <div>
          <div className='container'>
            <div className='row intro-cards mt-5 mb-3'>
              {/* <div className='col-md-1 d-none d-md-block'></div> */}
              <div className='col-md-6 col-sm-12'>
                <IntroCard
                  profilepic={ChaitanyaPic}
                  name='Chaitanya Agrawal'
                  description={chaitanyaDesc}
                />
              </div>

              <div className='col-md-6 col-sm-12'>
                <IntroCard
                  profilepic={PragyaPic}
                  name='Pragya Lakshmi'
                  description={pragyaDesc}
                />
              </div>
              {/* <div className='col-md-1 d-none d-md-block'></div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroductionSection;
