import { React, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  CardGroup,
} from 'react-bootstrap';
import FriendPic from '../images/friend-avatar.png';
import FriendsCard from '../components/FriendsCard';
// import MessagesBg from '../images/friends-bg1.mp4';

import NAVPic from '../images/friends/nav.jpeg';

const FriendsSection = () => {
  let msgVikas = `<div class='friends-msg'>
  <p>
  "Bhai apna United ka fan <br>
Par aloo kai paranthe le jaye uska chain <br>
Bhai apna hai bahut shai insaan <br>
Hai wo har party ki jaan <br>
Bhai kai dance moves hai too good <br>
He is a rockstar and a chill dude <br>
Bhai late night kya special maggi banata <br>
Kitna bhi khalo ki mann nahi bharta <br> 
Chaahe ho Poker, cricket ya football <br>
Bhai apna khelta hai dil sai aur pelta hai goal pe goal <br>
Bhai apna hai thoda lazy <br>
Par party aur masti kai liye he is always ready. <br>
Bhai tu rahna humesha awesome and cool <br>
kyonki tu hai humara Bro and  Bhaijaan 😘 <br>
  </p>
  <p>
  Wishing you all the love and happiness for 
the next and most important chapter in your
life. And always remember never to laugh
at your better half choices because you 
are her biggest one. 😛😉 "
  </p>
  </div>`;

  let msgNAV = `
<div class='friends-msg'>
  <p>
  " Congratulations Chaitanya and Pragya ❤️ </p> <p> We are really happy for you both.. </p>
  <p>
Chaitanya you have this amazing quality to nurture and maitain all relationships which is truly inspiring for all of us..
</p>
<p>
On behalf of the "Groom squad" I would like to tell you Pragya you are a very lucky girl because Chai is an amazingly adjusting, funny and cool guy! </p>
<p>We wish you both a happy married life ❤️ "</p>
</div>`;

  return (
    <div>
      <section className='friends-section'>
        <div className='video-container'>
          <video
            loop={true}
            autoPlay='autoplay'
            id='vid'
            className='friends-msgs-video'
            // controls='true'
            playsinline='true'
            disablePictureInPicture='true'
            muted
          >
            <source type='video/mp4' src={MessagesBg}></source>
          </video>
        </div>
        <div className='friends-msgs-container'>
          <div className='section-heading'>Our Friends</div>
          <Container className='friends-slider-container'>
            <Carousel controls={false} nextLabel='' prevLabel=''>
              <Carousel.Item interval={10000}>
                <CardGroup>
                  <Row>
                    <Col md={6} sm={12}>
                      <FriendsCard
                        pic={FriendPic}
                        name='Vikas'
                        intro="Chaitanya's Friend"
                        message={msgVikas}
                      />
                    </Col>
                    <Col md={6} sm={12}>
                      <FriendsCard
                        pic={NAVPic}
                        name='Neha, Akash and Vineet'
                        intro="Chaitanya's Friend"
                        message={msgNAV}
                        // styleCustom= {minHeight: 649px }
                      />
                    </Col>
                    {/* <Col md={4} sm={12}>
                      <FriendsCard
                        pic={FriendPic}
                        name='Shruti Agarwal'
                        intro="Chaitanya's Friend"
                        message='Ut venenatis tellus in metus vulputate eu. Consequat mauris nunc congue nisi. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.'
                      />{' '}
                    </Col> */}
                  </Row>
                </CardGroup>
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <Row>
                  <Col md={4} sm={12}>
                    <FriendsCard
                      pic={FriendPic}
                      name='Neha, Akash and Vineet'
                      intro="Chaitanya's Friend"
                      message={msgNAV}
                    />{' '}
                  </Col>
                  <Col md={4} sm={12}>
                    <FriendsCard
                      pic={FriendPic}
                      name='Shruti Agarwal'
                      intro="Chaitanya's Friend"
                      message='Ut venenatis tellus in metus vulputate eu. Consequat mauris nunc congue nisi. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.'
                    />{' '}
                  </Col>
                  <Col md={4} sm={12}>
                    <FriendsCard
                      pic={FriendPic}
                      name='Shruti Agarwal'
                      intro="Chaitanya's Friend"
                      message='Ut venenatis tellus in metus vulputate eu. Consequat mauris nunc congue nisi. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.'
                    />{' '}
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default FriendsSection;
