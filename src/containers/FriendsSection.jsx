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

const FriendsSection = () => {
  //   useEffect(() => {
  //     document.querySelector('#testimonial-slider').owlCarousel(
  //       {
  //         items: 3,
  //         itemsDesktop: [1000, 3],
  //         itemsDesktopSmall: [979, 2],
  //         itemsTablet: [768, 2],
  //         itemsMobile: [650, 1],
  //         pagination: true,
  //         autoPlay: true,
  //       },
  //       []
  //     );
  //   });
  return (
    <div>
      <section className='friends-section'>
        <div className='section-heading'>Our Friends</div>
        <Container>
          <Carousel controls={false} nextLabel='' prevLabel=''>
            <Carousel.Item interval={4000}>
              <CardGroup>
                <Row>
                  <Col md={4} sm={12}>
                    <FriendsCard
                      pic={FriendPic}
                      name='Shruti Agarwal'
                      intro="Chaitanya's Friend"
                      message='Ut venenatis tellus in metus vulputate eu. Consequat mauris nunc congue nisi. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.'
                    />
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
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <Row>
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
      </section>
    </div>
  );
};

export default FriendsSection;
