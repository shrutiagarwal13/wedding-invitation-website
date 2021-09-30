import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InvitePic from '../images/invite-pic.jpeg';
import Lamp1 from '../images/lamp1.png';
import Lamp2 from '../images/lamp2.png';

const InviteContainer = () => {
  return (
    <div className='invitation-container'>
      <Container fluid>
        <Row>
          <Col md={1} className='lamp-col d-none d-md-block'>
            <img src={Lamp1} alt='' className='lamp1' />
          </Col>

          <Col md={6} sm={12} xs={12}>
            <div className='content-container'>
              {/* <div className='overlay-invite'>
                <div className='text-container'> */}
              <div className='assisting-text'>
                We cordially invite your gracious presence to celebrate the
                auspicious occasion of marriage of
              </div>
              <div></div>
              <div className='invitation-names'>Pragya & Chaitanya</div>
              <div className='assisting-text'>on</div>
              <div className='invitation-date assisting-text'>
                06 December 2021
              </div>
              <div className='assisting-text'>7 PM onwards</div>
              <div className='assisting-text invitation-venue'>
                Masumi Resort <br /> Near Bada Bypass Overbridge, Pilibhit Road,
                Bareilly
              </div>
              {/* </div>
              </div> */}
            </div>
          </Col>
          <Col md={4} className='d-none d-md-block'>
            <img src={InvitePic} alt='' className='invitation-pic' />
          </Col>
          <Col md={1} className='lamp-col d-none d-md-block'>
            <img src={Lamp2} alt='' className='lamp2' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InviteContainer;
