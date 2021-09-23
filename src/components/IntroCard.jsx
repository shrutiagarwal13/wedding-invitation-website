import React from 'react';

const IntroCard = (props) => {
  return (
    <div>
      <div className='card card-profile h-100'>
        <div className='card-avatar'>
          <img className='img' src={props.profilepic} alt={props.name} />
        </div>
        <div className='table'>
          <div className='card-caption my-3'>{props.name}</div>
          <p className='card-description'>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
