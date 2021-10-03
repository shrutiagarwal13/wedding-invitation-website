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

import VikasPic from '../images/friends/vikas.jpeg';
import NAVPic from '../images/friends/nav.jpeg';
import MaulikPic from '../images/friends/maulik.jpeg';
import RakshitPic from '../images/friends/rakshit.jpeg';
import ArjunPic from '../images/friends/arjun.jpeg';
import SuyashPic from '../images/friends/suyash.jpeg';
import PratikPic from '../images/friends/pratik.jpeg';
import ChiragPic from '../images/friends/chirag.jpeg';
import JenishPic from '../images/friends/jenish.jpeg';
import DishiPic from '../images/friends/dishi.jpeg';
import AaziaPic from '../images/friends/aazia.jpeg';
import ArunimaPic from '../images/friends/arunima.jpeg';
import SrishtiPic from '../images/friends/srishti.jpeg';

const FriendsSection1 = () => {
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
  "Congratulations Chaitanya and Pragya ❤️ </p> <p> We are really happy for you both.. </p>
  <p>
Chaitanya you have this amazing quality to nurture and maitain all relationships which is truly inspiring for all of us..
</p>
<p>
On behalf of the "Groom squad" I would like to tell you Pragya you are a very lucky girl because Chai is an amazingly adjusting, funny and cool guy! </p>
<p>We wish you both a happy married life ❤️"</p>
</div>`;

  let msgMaulik = `
<div class='friends-msg'>
    <p>
  "Congratulations brother! </p>
  <p>
  Finally  the much awaited wedding is here. We have been waiting for this from our first year though. 😂
  </p>
  <p>
  Wish you a very happy married life ahead and all the best for your new beginning. You know we share a very special bond and I know each and every thing about you. So pragya can contact me for the grocery shopping to random shoes to clothes shopping. Excited for the wedding day. 😍 " </p>
</div>
`;

  let msgRakshit = `
<div class='friends-msg'>
<p> "Hey Chintu ! Wishing you the best as you embark on this next chapter of life ! Today you break the heart of millions of girls and some guys as well around the GLOBE who deeply loved you, How do you feel ? </p>
<p>
If we begin writing about you there will be endless things to write about, your kisse in Bareilly where you sat ulta on a bike and killed people with your looks, the controversial shorts your wore while playing cricket etc etc etc baaki kisse bhabhi ji ko personal sunaenge ! All the very best veere ! #yaaronkayaar" </p>
</div>`;

  let msgArjun = `
<div class='friends-msg'>
<p> "Chintu and Pragya, many congratulations! 🎉 </p>
<p> Pragya I am giving a piece of my heart with Chai 😉 .... Chai we have seen fun, togetherness, late night hang-outs and what not.... I love you for all the happiness and support we had all these year's for eachother. Wish you infinite happiness in this new venture of Life. Our bachelorhood will be missed. 🤪🍻 </p>
<p> Lots of love to both of you!" </p>
</div>
`;

  let msgSuyash = `
<div class = 'friends-msg'>
<p> "You are going to start this new journey in life. Let it be crazy, fantastic, wonderful and as awesome as you are!! </p>
<p> Wishing you all the happiness and love ❤️❤️ "</p>
</div>
`;

  let msgPratik = `
<div class='friends-msg'>
<p> "Chaitanya and Pragya </p>

<p>A big congratulations on your conjugality. </p>

<p>I would like to share few moments of my life that wouldn’t have been possible without Chaitanya’s presence. </p>

<p>First Day : Warm hearted gentleman who likes to spike his hair and create his own aura . I still remember, he is someone who never let me be alone in spite of me telling that I prefer to be alone on our first encounter. </p>
<p>College days: His absence would have taken away 5 years of my college life. There isn’t a moment where we haven’t shared every single day beginning from bunking college, eating in mess, walking to college together, late night snacks, playing cricket (on field or room), this one’s little embarrassing- falling asleep while watching movies on same bed in one blanket😜. Funnily he was the first and last person I would see each day. He is very amiable and cordial and will always make you feel his own. </p>

</p> Words are short to describe his cordialness to this world. He is a charmer by smile and enchanting by heart. Brothers are known and well, but a friend like Chaitanya is unknown and rare. I am glad that I have him much much more than just a friend or brother. Chintu, Fnatic loves you Bhai ❤️❤️❤️ "</p>
</div>`;

  let msgChirag = `
<div class='friends-msg'> 
<p>Chait.. Chait.. Chait.. probably one person who defines the word "Friend" in its real sense.. you are the most cheerful and full of life person that I have ever met.. purest soul with a genuine heart. A very big congratulations as you embark the next phase of life.. I might not be there physically to celebrate with you on the big-day but my good wishes certainly will. Enjoy every moment my friend! On a lighter note, hope you have already received permission from wifey to allow you to continue our boys-trips 😜 (hope that is part of the marriage agreement.. yes?).. stay blessed! Cheers!</p>
</div>
`;

  let msgPriya = `
<div class='friends-msg'>
<p>Dear Chintu, I think of you and my mind immediately goes back to a hundred thousand stupid, nonsensical moments we have spent together. Like .. I cant seem to track any logic in these memories but my heart feels so full. I can only remember what FUN we had, how hard we danced, how much we ate, how much we bunked and just chilled… </p>
<p>Those deep moments when all of us sat on marine drive ( we thought you were reflecting on life and you were actually counting there are 108 street lights there 😛)  or walking along the beach and landing up on Devdas street subway…
Shirpur days, thumps up and lays, the exam hall… i mean i cant even write everything down here… because in all true sense we just grew up together and got mature together ( aise he keh rahe hoon tera confirm nai hae matlab) But all and all you have been such a great friend.. A friend kne can count on , a friend who supports jo matter what.. </p>
<p>You are one of the few souls who have managed to remain innocent and I cherish that about you. </p>
<p>I hope this next chapter of your life is filled with more joy, more love and many more great memories. </p>


</div>

`;

  let msgJenish = `
<div>
<p>
Congratulations Bhai!! You have finally found that one person you get to annoy all through your life.  </p>
<p>Here's to a lifetime full of happiness and love. Cheers 🥂 <br />
Thanks for inviting us to eat and drink while you get married 😆 </p>
<p>And, Pragya welcome to the crazy Fnatic family!! </p>
</p>


</div>

`;

  let msgDishi = `
<div class = 'friends-msg'>
<p>"A beautiful soul with golden
heart. You are amazing and
Definitely my sweetheart,
Prags has not been just my
friend but a true mirror. </p>
<p> I love you always. My best wishes and
blessings are with you." </p>
</div>
`;

  let msgAazia = `
<div class='friends-msg'>
<p>"Welcome to the dangerous world of
Married life! It's too late to repent!
(Jokes apart) </p>
<p>Wishing you a Great Day with
Wonderful Memories that will last
Forever. </p>
</p>May your Love towards Each Other
only Grow Eachday. God bless! </p>
<p>With Prayers and Love" </p>
</div>`;

  let msgArunima = `
<div class='friends-msg'>
<p> "I'm so happy that I finally have a
chance to see my friend getting
married! You deserve to be loved and
appreciated, and I'm so happy that
you found someone who is perfect
for you. </p> <p>Congratulations!"</p></div>`;

  let msgSrishti = `
<div class='friends-msg'>
<p>"Hey Pragya,</p>
<p>You're the Most Sweetest and The
Cute Girl I have ever met & I Mean It! 
Simple and Kind Hearted. </p>
</p> I will miss You a Lot. </p>
</p> I am Gonna Come to Your Place and
Will Tease you after Marriage for
Sure. </p>
</p> Guddddddu:)) </p>
</p> I Love You My Beautiful <3" </p>
</div>`;

  return (
    <div>
      <section className='friends-section'>
        {/* <div className='video-container'>
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
        </div> */}
        <div className='friends-msgs-container'>
          <div className='section-heading friends-heading'>Our Friends</div>
          <Container className='friends-slider-container'>
            <Row>
              <Col md={8}>
                <div className='sub-heading'>Chaitanya's Groomsmen</div>
                <Carousel
                  controls={false}
                  nextLabel=''
                  prevLabel=''
                  fade
                  // vertical
                >
                  <Carousel.Item>
                    {/* <Row>
                        <Col > */}
                    <FriendsCard
                      pic={VikasPic}
                      name='Vikas'
                      intro="Chaitanya's Friend"
                      message={msgVikas}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={NAVPic}
                      name='Neha, Akash and Vineet'
                      intro="Chaitanya's Friend"
                      message={msgNAV}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={MaulikPic}
                      name='Maulik'
                      intro="Chaitanya's Friend"
                      message={msgMaulik}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={RakshitPic}
                      name='Rakshit'
                      intro="Chaitanya's Friend"
                      message={msgRakshit}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={ArjunPic}
                      name='Arjun'
                      intro="Chaitanya's Friend"
                      message={msgArjun}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={SuyashPic}
                      name='Suyash'
                      intro="Chaitanya's Friend"
                      message={msgSuyash}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={PratikPic}
                      name='Pratik'
                      // intro="Chaitanya's Friend"
                      message={msgPratik}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={ChiragPic}
                      name='Chirag Jain'
                      // intro="Chaitanya's Friend"
                      message={msgChirag}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={ChiragPic}
                      name='Priya'
                      // intro="Chaitanya's Friend"
                      message={msgPriya}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={JenishPic}
                      name='Jenish'
                      // intro="Chaitanya's Friend"
                      message={msgJenish}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
            <Row className='mt-4'>
              <Col md={4}> </Col>
              <Col md={8}>
                <div className='sub-heading bridesmaid-heading'>
                  Pragya's Bridesmaids
                </div>

                <Carousel controls={false} nextLabel='' prevLabel='' fade>
                  <Carousel.Item>
                    <FriendsCard
                      pic={DishiPic}
                      name='Dishi Paul'
                      //   intro="Chaitanya's Friend"
                      message={msgDishi}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={SrishtiPic}
                      name='Srishti Singh'
                      //   intro="Chaitanya's Friend"
                      message={msgSrishti}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={ArunimaPic}
                      name='Arunima'
                      //   intro="Chaitanya's Friend"
                      message={msgArunima}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <FriendsCard
                      pic={AaziaPic}
                      name='Aazia & Shafeek'
                      //   intro="Chaitanya's Friend"
                      message={msgAazia}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default FriendsSection1;
