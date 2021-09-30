import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InvitePic from '../images/invite-pic.jpeg';

const InviteContainer = () => {
  return (
    <div className='invitation-container'>
      <Container>
        <Row>
          <Col md={7}>
            <div className='content-container'>
              <div className='assisting-text'>
                Join us to celebrate the wedding of
              </div>
              <div></div>
              <div className='invitation-names'>Pragya & Chaitanya</div>
              <div className='assisting-text'>on</div>
              <div className='invitation-date assisting-text'>
                06 December 2021
              </div>
              <div className='assisting-text'>8PM onwards</div>
              <div className='assisting-text invitation-venue'>
                Masumi Resort <br /> Near Bada Bypass Overbridge, Pilibhit Road,
                Bareilly
              </div>
            </div>
          </Col>
          <Col md={5}>
            <img src={InvitePic} alt='' className='invitation-pic' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InviteContainer;
