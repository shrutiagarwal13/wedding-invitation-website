import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const GroomSideSpeechBubble = (props) => {
  return (
    <div>
      <div className={`speech-bubble ${props.customClass}`}>
        <Container>
          <Row>
            <Col md={9} className='offset-md-0'>
              <div
                class='bubble'
                dangerouslySetInnerHTML={{ __html: props.message }}
              ></div>
              <div class={`pointer ${props.customPointerClass}`}></div>
            </Col>
            <Col md={3}>
              <div className='bubble-img-container'>
                <img src={props.pic} alt=''></img>

                <div className='family-member-intro'>
                  <div className='family-member-name'>{props.name}</div>
                  <div className='family-member-relation mt-1'>
                    {props.relation}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <div className={`speech-bubble ${props.customClass}`}>
          <div
            class='bubble'
            dangerouslySetInnerHTML={{ __html: props.message }}
          ></div>
          <div class='pointer'></div>
          <div className='bubble-img-container mt-3'>
            <Container>
              <Row>
                <Col md={5} sm={5} xs={5}>
                  <img src={props.pic} alt=''></img>
                </Col>
                <Col md={7} sm={7} xs={7}>
                  <div className='family-member-intro ml-3 mb-3'>
                    <div className='family-member-name'>{props.name}</div>
                    <div className='family-member-relation mt-1'>
                      {props.relation}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GroomSideSpeechBubble;
