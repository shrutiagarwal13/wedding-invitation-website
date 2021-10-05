import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import SmartText from './SmartText';

const FriendsCard = (props) => {
  return (
    <Card className='friends-card'>
      <Card.Body>
        <Card.Text>
          {/* <div dangerouslySetInnerHTML={{ __html: props.message }}> */}
          <SmartText
            text={props.message}
            customButtonClass='friends-btn'
            length={props.charLength}
          />
          {/* {props.message} */}
          {/* </div> */}
        </Card.Text>
      </Card.Body>
      <Container>
        <Row>
          <Col md={4} sm={4}>
            <Card.Img src={props.pic} className='friends-card-img' />
          </Col>
          <Col md={8} sm={8}>
            <div className='friends-intro-container'>
              <div className='friend-name'>{props.name}</div>
              {/* <div>{props.intro}</div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default FriendsCard;
