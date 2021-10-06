import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
// import ReactReadMoreReadLess from 'react-read-more-read-less';
import SmartText from '../components/SmartText.jsx';

const SpeechBubble = (props) => {
  // let formatMsg = (msg) => {
  //   let customItems = msg.split('#');

  //   for (let i = 0; i < customItems.length; i++) {
  //     customItems[i] = customItems[i] + '\n';
  //   }

  //   customItems = customItems.join('');

  //   return customItems;
  // };

  return (
    <div>
      <div className={`speech-bubble ${props.customClass}`}>
        <Container>
          <Row>
            <Col md={3} className={`order-sm-2 order-xs-2 ${props.imgOrder}`}>
              <div className='bubble-img-container'>
                <Row>
                  <Col md={12} sm={5} xs={5}>
                    <img src={props.pic} alt=''></img>
                  </Col>
                  <Col md={12} sm={7} xs={7}>
                    <div className='family-member-intro'>
                      <div className='family-member-name'>{props.name}</div>
                      <div className='family-member-relation mt-1'>
                        {props.relation}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              md={9}
              className={`order-sm-1 order-first order-sm-last ${props.msgOrder}`}
            >
              <div class='bubble bubble-text'>
                <SmartText
                  text={props.message}
                  length={props.charLength}

                  // customButtonClass='family-btn'
                />
              </div>
              <div class={`pointer ${props.customPointerClass}`}></div>
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

export default SpeechBubble;
