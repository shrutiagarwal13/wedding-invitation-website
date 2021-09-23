import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CountdownHolder = (props) => {
  return (
    <>
      <Container fluid>
        <Row className='count'>
          <Col>{props.d}</Col>
          <Col>{props.h}</Col>
          <Col>{props.m}</Col>
          <Col>{props.s}</Col>
        </Row>
        <Row className='count-unit'>
          <Col>Days</Col>
          <Col>Hours</Col>
          <Col>Minutes</Col>
          <Col>Seconds</Col>
        </Row>
      </Container>
      {/* <div className='count'>{props.count}</div>
      <div className='count-unit'>{props.unit}</div> */}
    </>
  );
};

export default CountdownHolder;
