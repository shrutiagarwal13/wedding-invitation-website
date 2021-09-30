import React from 'react';
import Invitation from '../images/Invitation-Canva.png';
import InviteContainer from './InviteContainer';
// import party from 'party-js';

const InvitationSection = () => {
  return (
    <section className='invitation-section alternate-section-1'>
      {/* <img
        src={Invitation}
        alt='invitation poster'
        className='invitation-poster'
      /> */}
      <InviteContainer />
    </section>
  );
};

export default InvitationSection;
