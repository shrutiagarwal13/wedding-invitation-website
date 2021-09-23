import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ParentsBlock = (props) => {
  return (
    <div>
      <Row className='mb-5'>
        <Col md={1} />

        <Col md={3}>
          <img src={props.parentsPic} className='parents-pic' />
        </Col>
        <Col md={7}>
          <div className='parents-block'>{props.parentsMsg}</div>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
};

export default ParentsBlock;
