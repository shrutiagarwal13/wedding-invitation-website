import { React, useEffect } from 'react';
import VenueSection from '../components/VenueSection';
import FriendsSection1 from '../containers/FriendsSection1';
import IntroductionSection from '../containers/IntroductionSection';
import InvitationSection from '../containers/InvitationSection';
import MainSection from '../containers/MainSection';
import ParentsSection from '../containers/ParentsSection';
import RsvpSection from '../containers/RsvpSection';
import party from 'party-js';
import FamilySection from '../containers/FamilySection';

function MainPage() {
  useEffect(() => {
    document
      .querySelector('.main-page')
      .addEventListener('click', function (e) {
        party.confetti(this, { count: party.variation.range(300, 400) });
      });
  }, []);

  return (
    <div className='main-page'>
      <MainSection />
      <InvitationSection />
      <IntroductionSection />
      {/* <ParentsSection /> */}
      <FamilySection />
      <FriendsSection1 />
      <VenueSection />
      <RsvpSection />
    </div>
  );
}

export default MainPage;
