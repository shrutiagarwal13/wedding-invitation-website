import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VenueCard from './VenueCard';
import WeddingBG from '../images/wedding-bg.jpg';
import SangeetBG from '../images/sangeet-bg.jpg';
// import ReceptionBG from '../images/reception-bg.jpeg';
import WeddingIcon from '../images/wedding-icon1.png';
import SangeetIcon from '../images/sangeet-icon1.png';
// import ReceptionIcon from '../images/reception-icon.png';

const VenueSection = () => {
  let sangeetVenue = `
  <div class='venue-name mb-2 mt-4'>Gala Galaxy</div>
  <div>KK Hospital Rd, Rajendra Nagar, Bareilly, UP</div>
  `;

  let weddingVenue = `
  <div class='venue-name mb-2 mt-4'>Masumi Resort</div>
  <p> Near Bada Bypass Overbridge, Pilibhit Road, Bareilly, UP</p>
  `;

  return (
    <div>
      <section className='venue-section'>
        {/* <video
          loop={true}
          autoPlay='autoplay'
          id='videoBG'
          className='friends-msgs-video'
          // controls='true'
          playsinline='true'
          disablePictureInPicture='true'
          muted
        >
          <source src={FireworksVideo} type='video/mp4' />
        </video> */}
        <div className='section-heading venue-heading'>Place & Time</div>
        <div>
          <Container>
            <Row>
              <Col md={6} sm={12}>
                <VenueCard
                  background={SangeetBG}
                  icon={SangeetIcon}
                  functionName='Sangeet & Ring Ceremony'
                  date='Sunday, 05/12/2021'
                  time='7:00 PM onwards'
                  address={sangeetVenue}
                  mapsLink='https://www.google.com/maps/place/Hotel+Gala+Galaxy/@28.3865047,79.4297257,17z/data=!3m1!4b1!4m8!3m7!1s0x39a006e487f9ea43:0x92624108c9d74b25!5m2!4m1!1i2!8m2!3d28.3865032!4d79.4319166'
                  customClass='sangeet-function-name'
                />
              </Col>
              <Col md={6} sm={12}>
                <VenueCard
                  background={WeddingBG}
                  icon={WeddingIcon}
                  functionName='The Wedding'
                  date='Monday, 06/12/2021'
                  time='7:00PM onwards'
                  address={weddingVenue}
                  mapsLink='https://www.google.com/maps/place/Masumi+Farm+House+-+Best+Wedding+Venue+in+Bareilly/@28.4310737,79.4797722,15z/data=!4m2!3m1!1s0x0:0x11e112e225c81780?sa=X&ved=2ahUKEwiVuPnBhKfzAhWHcn0KHR7PCh4Q_BJ6BAhkEAU'
                />
              </Col>
              {/* <Col md={4} sm={12}>
                <VenueCard
                  background={ReceptionBG}
                  icon={ReceptionIcon}
                  functionName='Reception'
                  date='Friday, 07/12/2021'
                  time='8:00PM onwards'
                  address='ABC, Rajendra Nagar, Bareilly, UP'
                />
              </Col> */}
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default VenueSection;
