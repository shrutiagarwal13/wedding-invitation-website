import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
            <div className={`venue-card-function mb-4 ${props.customClass}`}>
              {props.functionName}
            </div>
            <div className='venue-card-date '>{props.date}</div>
            <div className='venue-card-time mb-3'>{props.time}</div>
            <div
              className='venue-card-address mb-4'
              dangerouslySetInnerHTML={{ __html: props.address }}
            >
              {/* {props.address} */}
            </div>
            <div className='venue-card-contact mb-4'>
              <a href='tel:+919837030201'>+91 9837030201</a>
            </div>
            <a
              href={props.mapsLink}
              className='btn venue-card-map-button'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className='mr-2'
              ></FontAwesomeIcon>
              See Map
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VenueCard;
