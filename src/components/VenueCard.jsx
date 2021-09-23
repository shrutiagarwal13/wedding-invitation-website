import React from 'react';
import { Card } from 'react-bootstrap';

const VenueCard = (props) => {
  return (
    <div>
      <Card
        className='venue-card h-100'
        style={{ backgroundImage: `url(${props.background})` }}
      >
        <div className='venue-container'>
          <img src={props.icon} alt='' className='venue-card-icon mb-4' />
          <div className='venue-card-details-container'>
            <div className='venue-card-function mb-3'>{props.functionName}</div>
            <div className='venue-card-date'>{props.date}</div>
            <div className='venue-card-time mb-3'>{props.time}</div>
            <div className='venue-card-address mb-4'>{props.address}</div>
            <div className='venue-card-contact mb-4'>
              <a href='tel:+919315785908'>+91 9315785908</a>
            </div>
            <a
              href='https://www.google.com/maps/place/Varij+Agrawal/@28.4062869,79.4498799,17z/data=!3m1!4b1!4m5!3m4!1s0x39a00715cbcaa91b:0x57c47b3f2c73e2be!8m2!3d28.4062595!4d79.4520507'
              className='btn venue-card-map-button'
              target='_blank'
            >
              See Map
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VenueCard;
