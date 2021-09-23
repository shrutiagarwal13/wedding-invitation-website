import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import VenueCard from './VenueCard';
import WeddingBG from '../images/wedding-bg.jpeg';
import SangeetBG from '../images/sangeet-bg.jpeg';
import ReceptionBG from '../images/reception-bg.jpeg';
import WeddingIcon from '../images/wedding-icon.png';
import SangeetIcon from '../images/sangeet-icon.png';
import ReceptionIcon from '../images/reception-icon.png';

const VenueSection = () => {
  return (
    <div>
      <section className='venue-section'>
        <div className='section-heading venue-heading'>Place & Time</div>
        <div>
          <Container>
            <Row>
              <Col md={4} sm={12}>
                <VenueCard
                  background={SangeetBG}
                  icon={SangeetIcon}
                  functionName='Sangeet & Ring Ceremony'
                  date='Wednesday, 05/12/2021'
                  time='8:00PM onwards'
                  address='ABC, Rajendra Nagar, Bareilly, UP'
                />
              </Col>
              <Col md={4} sm={12}>
                <VenueCard
                  background={WeddingBG}
                  icon={WeddingIcon}
                  functionName='Baraat'
                  date='Thursday, 06/12/2021'
                  time='8:00PM onwards'
                  address='ABC, XZY, Bareilly, UP'
                />
              </Col>
              <Col md={4} sm={12}>
                <VenueCard
                  background={ReceptionBG}
                  icon={ReceptionIcon}
                  functionName='Reception'
                  date='Friday, 07/12/2021'
                  time='8:00PM onwards'
                  address='ABC, Rajendra Nagar, Bareilly, UP'
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default VenueSection;
