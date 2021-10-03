import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import GroomSideSpeechBubble from '../components/GroomSideSpeechBubble';
import BrideSideSpeechBubble from '../components/BrideSideSpeechBubble.jsx';
import ParentsSpeechBubble from '../components/ParentsSpeechBubble.jsx';

import PragyaParentsPic from '../images/family/pragya_parents.jpeg';
import ChaitanyaParentsPic from '../images/family/chaitanya_parents.jpeg';
import pragyaBrotherPic from '../images/family/pragya_brother.jpeg';
import ShubhiHarshitPic from '../images/family/shubhi_harshit.jpeg';
import ShreshthSweetyPic from '../images/family/shreshth_sweety.jpeg';
import ManishKritiPic from '../images/family/manish_kriti.jpeg';
import PranetaPic from '../images/family/praneta1.jpeg';
import AditPic from '../images/family/adit.jpeg';
import MuditPic from '../images/family/mudit.jpeg';
import KanuPic from '../images/family/kanu.jpeg';
import VasuPic from '../images/family/vasu.jpeg';
import VinniPic from '../images/family/vinni.jpeg';
import ShrutiShreshthaPic from '../images/family/shruti_shreshtha.jpeg';

import SonalPic from '../images/family/sonal.jpeg';
import PriyankaPic from '../images/family/priyanka.jpeg';
import AbhinavPic from '../images/family/abhinav.jpeg';
import AarohiPic from '../images/family/aarohi.jpeg';
import ShikhaPic from '../images/family/shikha.jpeg';

const FamilySection = () => {
  let pragyaParentsMsg = `

<div className='family-msg'>
<p>"We are so happy about your wedding, although you'd remain our little princess always. May you have a wonderful life with your life partner. Our best wishes and prayers are always with you both. Wish you a never ending happy married life ahead. Congratulations on your wedding. </p>
<p>With love and blessings, <br /> Mummy and Papa"</p>

</div>`;

  let chaitanyaParentsMsg = `
<div className='family-msg'>
<p>Chaitanya beta is not only our only son but also the soul of our lives. His presence and intelligence makes our life so filled with love and respect. He is the kindest person and we are so proud of him from always. He thinks before talking, he smiles even if he is emotional, he cares for his sister dearly and respects all the elders like family. We are very happy that he found Pragya and we are so excited to welcome her in our lives! We pray and wish for their happiness and bright future and our blessings are always with them. </>
</div>
`;

  let pragyaBrotherMsg = `
<div className='family-msg'>
<p>
"My sweet little princess has finally found her prince charming. Dear sis, as you begin your life together with your husband I want you to know that I am here for you if you ever need anything. You are important to me and I love you. You've enchanted us all with your smile my darling sis. I wish you both all the best for your future. Congratulations </p>
<p>With love, <br>
Bhaiya"</p>
</p>

</div>
`;

  let shubhiHarshitMsg = `
<div className='family-msg'>
<p>
"Dear Di Jiju, </p> <p>

We wish you all the happiness in the world. May your love grow stronger each and every passing year. Loads of love today and beyond."
</p>
</div>
`;

  let shreshthSweetyMsg = `
<div className='family-msg'>
<p>
"Dear Di Jiju </p>
<p>Accept our sincere and warm wishes. 💃 🎉 <br />
Wishing you both infinite love and boundless happiness forever. <br />
Have a blissful conjugal life. 👩‍❤️‍💋‍👨 🤝 <br />
We wish you both pop endless champagnes. 🥂  <br />
Create the world you both aspire. 🌈  <br />
Love, Live, Laugh graciously💕 "
</p>
</div>
`;
  let manishKirtiMsg = `
<div className='family-msg'>
<p>
"Wishing Pragya and Chaitanya lifetime of love and happiness. We hope that all your dreams come true as you begin this new journey."
</p>
</div>
`;

  let pranetaMsg = `
<div className='family-msg'>

<p>"Chaitanya, you are the best thing that could have happened to me just one year after I was born. Our fights as kids, our going to school together, playing basketball, watching cricket, all reminds me of such a happy and eventful childhood - all thanks to you. You know I love you dearly and there is nothing in this world that I won’t do for you. You are my pride and I feel so blessed to have you. </p>
<p>Getting married is a big milestone and I am so happy that you have found that one person who will make it totally worthwhile for you. It’s very hard to find the person whom you want to spend your life with but Pragya makes it sound so easy and genuine. I promise you, I will protect and love her like i do to you and I am always on her side from now!😉  </p>
<p>Can’t wait to dance, eat and do all crazy things in your wedding!! All the best brother, I love you ❤️ "</p>

</div>

`;

  let vikramMsg = `
<div className='family-msg'>

<p>"Many congratulations Kaku!! Wish you plenty of love, laughter on your new journey and ofcourse more ManU goals!  Waiting eagerly for the big day. Wish you both a happy and healthy life together. 😄 </p>

<p>God bless. "</p>

</div>
`;

  let aditMsg = `
<div className='family-msg'>
<p>"Kaku Bhaiya, it’s always been fun to spend time with you and we’ve had some really great memories together. Hope to create many more such memories in the future (with bhabhi too this time 😜) </p>
<p>Bhabhi, welcome to the family! Eagerly waiting to meet you. 🎉 </p>
<p>Wishing you both a very happy and healthy married life! Really excited for the wedding!🤩  "</p>
</div>
`;

  let vinniMsg = `
<div className='family-msg'>
<p>"You have always protected me like a big brother , you have always been there for me. Not only professional stuff but also personal things, I can share with you which makes me feel so blessed.
I know your advice will be the best advice I can get and nothing seems impossible when I talk to you.
You correct me when I am wrong but the way you do, makes me inspired.😇 </p>

<p>Special people like you, deserve only the best. As you have found your partner, I wish you all the very best as you are entering second and the most crucial phase of life brother!❣️ </p>
<p>May your marriage bring you all the happiness and adventures that you crave for! </p>
<p>I wish bhabhi a warm welcome!🌹🤗 " </p>

</div>
`;

  let muditMsg = `

<div className='family-msg'>
<p>"Congrats Kaku bhaiya and Pragya bhabhi!❤️ Hope to meet an even better party person😛 ab to all the more reasons to celebrate❤️ Kaku bhaiya you have always been so fun to be with! You are always so supportive and inventive in solving our petty college issues🤪 Just stay the way you are!❤️ Wishing you both a very happy and exciting married life. Excited for the wedding!😍 </p>
<p>All the best!🤩 "</p>

</div>

`;

  let shrutiShreshthaMsg = `
<div className='family-msg'>

<p>"Congratulations Bhaiya and Bhabhii!!🤩 </p>
<p>We have been waiting for this day and meeting our bhabhi for so long. The wait couldn’t have come to a better end!🥰 Bhaiya, you’ve always treated us like your real sisters, pampering us with all our demands. At every birthday, how you force us to choose a gift and transfer money 💰 ultimately has been troublesome! From us spending our summer vacations in Bareilly playing cricket to you taking us out for clubbing, it has been hell of a journey! Goa still pending👀 </p>
<p>We look forward to spending our vacations with the newly added member to our family. Bhabhi, so excited to partner up with you to make fun of bhaiya. Yes, you can count us to be on your side, always!😉 </p>
<p> To the eldermost yet the coolest bhaiii and the eldermost yet the sweetest bhabhi, we wish you both the happiest married life. Cant keep calm for the most joyous celebrations!❤️❤️❤️ </p>

<p>P.S. bhabhi, you are not allowed to call us ‘di’.💝 "</p>

</div>

`;

  let kanuMsg = `
<div className='family-msg'>
<p>
"Dear kaku bhaiya, <br />
You have been role model and torch bearer for all of your brothers.. </p>
<p>Dear bhabhi, <br /> Welcome to the family... this is the much awaited day in all our lives. Wish you both love, good health ahead in life. We will have lots of fun together!!🎉 " </p>

</p>

</div>

`;

  let vasuMsg = `

<div className='family-msg'>
<p>"Finally The day is here for which we all have eagerly been waiting ⏰ </p>
<p>Congratulations bhaiya and bhabhi on your marriage 💥  </p>
<p>Kaku bhaiya you are the coolest brother one could've ever asked for, starting right from the part where you party with us like friends to the part where you give us serious advice be it for career or anything like a mentor👨‍💼 </p>
<p>You're an ideal big brother who's soon getting an ideal bhabhi for all of us to pamper❤️ </p>
</p>I'm really excited for you to start this new journey with her, i hope and wish your love continues to grow stronger with every passing day🌈 </p>
<p>We await all the fun, dance, laughter and smiles on your wedding day, let's make memories for a lifetime🕺 "</p>


</div>
`;

  let sonalMsg = `
<div className='family-msg'>
<p>Dear love birds,</p>

<p>"As you blend your lives together with each other, I want to wish you a married life full of romance,cuddles and lifetime of happiness..
May everyday of your life hereafter hold wonderful shared experiences 😍🥰 </p>
<p>Wish you both togetherness always! </p>
<p>With love 💕 "  </p>

</div>

`;

  let priyankaMsg = `
<div className='family-msg'>
<p>"Congratulations on your wedding my sweetest sister. I wish you both all the happiness and smiles in the world. May you enjoy your married life to the fullest with the blessings of Almighty. Warm wishes to the best little sister… Happy Marriage to you." </p>

</div>

`;

  let abhinavMsg = `
<div className='family-msg'>

<p>"A pretty woman and a handsome man, two bodies united into one beautiful soul. May the bond you share last forever and grow deeper day by day in the new chapter of life. </p>
<p>Stay happy an be blessed!! </p>
<p>With love," </p>
</div>

`;

  let aarohiMsg = `
<div className='family-msg'>
<p>
"You have pampered, we all three, since we are born. We'll never forget our funfilled late night talks with you bua. </p>
<p>You look awesome too to us! </p>
<p>About fufaji, eagerly waiting to play and enjoy with you. </p>
<p> We love you bua and fufaji!!😘 </p>
<p>Best wishes!" </p>

</div>

`;

  let shikhaMsg = `
<div className='friend-msg'>
<p>"The Warmest congratulations to the newly weds. Wishing that you two have an amazing life ahead. First year of marriage is a blessing. It will get harder, but it doesn't mean that you won't cope with difficulties. Keep supporting each other and learn to compromise, and you'll stay together forever." </p>

</div>
`;

  return (
    <section className='family-section'>
      <div className='section-heading'>Our Family</div>

      <div className='family-msgs-container'>
        {/* <div class='container'> */}
        {/* <div class='card-columns'> */}
        <div className='family-msg-container'>
          <Container>
            <Row>
              <Col xs={12} sm={6} md={6}>
                <ParentsSpeechBubble
                  message={chaitanyaParentsMsg}
                  pic={ChaitanyaParentsPic}
                  name=''
                  relation="Groom's Parents"
                  customClass='parents-msg'
                  customPointerClass='parents-pointer'
                />
              </Col>
              <Col xs={12} sm={6} md={6}>
                <ParentsSpeechBubble
                  message={pragyaParentsMsg}
                  pic={PragyaParentsPic}
                  name=''
                  relation="Brides's Parents"
                  customClass='parents-msg'
                  customPointerClass='parents-pointer'
                />
              </Col>
            </Row>
            {/* <Row>
              <Col xs={12} sm={4} md={4}>
                <SpeechBubble
                  message={pragyaBrotherMsg}
                  pic={pragyaBrotherPic}
                  name='Rishav'
                  relation="Brides's Brother"
                  customClass='sibling-msg'
                />
                <SpeechBubble
                  message={shrutiShreshthaMsg}
                  pic={ShrutiShreshthaPic}
                  name='Shruti & Shreshtha'
                  relation="Groom's Cousins"
                  customClass='sibling-msg'
                />
                <SpeechBubble
                  message={sonalMsg}
                  pic={SonalPic}
                  name='Sonal Ankit Anika'
                  relation="Bride's Cousin"
                  customClass='sibling-msg'
                />
              </Col>
              <Col xs={12} sm={4} md={4}>
                <SpeechBubble
                  message={pranetaMsg}
                  pic={PranetaPic}
                  name='Praneta'
                  relation="Groom's Sister"
                  customClass='sibling-msg'
                />
                <SpeechBubble
                  message={shubhiHarshitMsg}
                  pic={ShubhiHarshitPic}
                  name='Shubhi & Harshit'
                  relation="Brides's Cousin"
                  customClass='sibling-msg'
                />
                <SpeechBubble
                  message={vasuMsg}
                  pic={VasuPic}
                  name='Vatsal'
                  relation="Groom's Cousin"
                  customClass='sibling-msg'
                />
              </Col>
              <Col xs={12} sm={4} md={4}>
                <SpeechBubble
                  message={vikramMsg}
                  pic={PranetaPic}
                  name='Vikram'
                  relation="Groom's Jiju"
                  customClass='sibling-msg'
                />
                <SpeechBubble
                  message={shreshthSweetyMsg}
                  pic={ShreshthSweetyPic}
                  name='Shreshth & Sweety'
                  relation="Brides's Cousin"
                  customClass='sibling-msg'
                />
                <SpeechBubble
                  message={muditMsg}
                  pic={MuditPic}
                  name='Akarsh'
                  relation="Groom's Cousin"
                  customClass='sibling-msg'
                />
                <SpeechBubble
                  message={manishKirtiMsg}
                  pic={ManishKritiPic}
                  name='Manish, Kirti & Aarav'
                  relation="Brides's Cousin"
                  customClass='sibling-msg'
                />
              </Col>
            </Row> */}

            <Row className='mt-5'>
              <Col md={12}>
                <Carousel
                  controls={false}
                  nextLabel=''
                  prevLabel=''
                  fade
                  // vertical
                >
                  <Carousel.Item interval={8000}>
                    {/* <Row>
                        <Col > */}
                    <GroomSideSpeechBubble
                      message={pranetaMsg}
                      pic={PranetaPic}
                      name='Praneta'
                      relation="Groom's Sister"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={8000}>
                    <GroomSideSpeechBubble
                      message={vikramMsg}
                      pic={PranetaPic}
                      name='Vikram'
                      relation="Groom's Jiju"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={6000}>
                    <GroomSideSpeechBubble
                      message={kanuMsg}
                      pic={KanuPic}
                      name='Kanishk'
                      relation="Groom's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={6000}>
                    <GroomSideSpeechBubble
                      message={aditMsg}
                      pic={AditPic}
                      name='Adit'
                      relation="Groom's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={7000}>
                    <GroomSideSpeechBubble
                      message={vasuMsg}
                      pic={VasuPic}
                      name='Vatsal'
                      relation="Groom's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={6000}>
                    <GroomSideSpeechBubble
                      message={shrutiShreshthaMsg}
                      pic={ShrutiShreshthaPic}
                      name='Shruti & Shreshtha'
                      relation="Groom's Cousins"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <GroomSideSpeechBubble
                      message={muditMsg}
                      pic={MuditPic}
                      name='Akarsh'
                      relation="Groom's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={10000}>
                    <GroomSideSpeechBubble
                      message={vinniMsg}
                      pic={VinniPic}
                      name='Shubhang'
                      relation="Groom's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='groom-sibling-pointer'
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>

            <Row className='mt-5'>
              <Col md={12}>
                <Carousel
                  controls={false}
                  nextLabel=''
                  prevLabel=''
                  fade
                  // vertical
                >
                  <Carousel.Item interval={8000}>
                    {/* <Row>
                        <Col > */}
                    <BrideSideSpeechBubble
                      message={pragyaBrotherMsg}
                      pic={pragyaBrotherPic}
                      name='Rishav'
                      relation="Bride's Brother"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <BrideSideSpeechBubble
                      message={aarohiMsg}
                      pic={AarohiPic}
                      name='Aarohi, Aradhya & Dhruv'
                      relation="Bride's Nieces & Nephew"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={8000}>
                    <BrideSideSpeechBubble
                      message={shreshthSweetyMsg}
                      pic={ShreshthSweetyPic}
                      name='Shreshth & Sweety'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={6000}>
                    <BrideSideSpeechBubble
                      message={shubhiHarshitMsg}
                      pic={ShubhiHarshitPic}
                      name='Shubhi & Harshit'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={7000}>
                    <BrideSideSpeechBubble
                      message={manishKirtiMsg}
                      pic={ManishKritiPic}
                      name='Manish, Kirti & Aarav'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={6000}>
                    <BrideSideSpeechBubble
                      message={shikhaMsg}
                      pic={ShikhaPic}
                      name='Shikha & Amit'
                      relation="Bride's Cousins"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <BrideSideSpeechBubble
                      message={abhinavMsg}
                      pic={AbhinavPic}
                      name='Abhinav & Divya'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={10000}>
                    <BrideSideSpeechBubble
                      message={priyankaMsg}
                      pic={PriyankaPic}
                      name='Priyanka & Ashish'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={10000}>
                    <BrideSideSpeechBubble
                      message={sonalMsg}
                      pic={SonalPic}
                      name='Sonal, Ankit & Anika'
                      relation="Bride's Cousin"
                      customClass='sibling-msg'
                      customPointerClass='bride-sibling-pointer'
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
        {/* </div>
        </div> */}
      </div>
    </section>
  );
};

export default FamilySection;
