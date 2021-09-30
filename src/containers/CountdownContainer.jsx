import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
import CountdownHolder from '../components/CountdownHolder.jsx';

const Completionist = () => (
  <span className='count-unit'>
    C'mon! Dress up quickly for the grand celebrations!
  </span>
);

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <CountdownHolder d={days} h={hours} m={minutes} s={seconds} />
      // <span>

      //   {days}:{hours}:{minutes}:{seconds}
      // </span>
    );
  }
};

const CountdownContainer = () => {
  return (
    // <Container fluid>
    // <Row>
    // <Col md={1}> </Col>
    // <Col md={12}>
    <div className='countdown-container'>
      <Countdown date='2021-12-06T20:00:00' renderer={renderer} />
    </div>
    //     {/* </Col> */}
    //     {/* <Col md={1}> </Col> */}
    //   {/* </Row> */}
    // {/* </Container> */}
  );
};

export default CountdownContainer;
