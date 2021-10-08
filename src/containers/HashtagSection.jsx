import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

// import { fab } from '@fortawesome/free-brands-svg-icons';

// import { faInstagram } from '@fortawesome/free-solid-svg-icons';

const HashtagSection = () => {
  return (
    <section className='hashtag-section'>
      <div className='hashtag'>
        Share Love at #ChaiToGya
        {/* <span> */}
        {/* <FontAwesomeIcon icon={faInstagram} className='ml-4 insta-icon' />
        </span> */}
      </div>
      <div className='hashtag-icons mx-auto'>
        <span>
          <a href='https://www.instagram.com/' target='_blank'>
            <FontAwesomeIcon
              icon={faInstagram}
              className='social-icon mr-4'
            ></FontAwesomeIcon>
          </a>
        </span>
        <span>
          <a href='https://www.facebook.com/' target='_blank'>
            <FontAwesomeIcon icon={faFacebook} className='social-icon' />
          </a>
        </span>
      </div>
    </section>
  );
};

export default HashtagSection;
