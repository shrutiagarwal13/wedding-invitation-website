import React from 'react';

const SmartText = ({ text, length = 350, customButtonClass }) => {
  const [showLess, setShowLess] = React.useState(true);

  if (text.length < length) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></div>
    );
  }

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: showLess ? `${text.slice(0, length)}...` : text,
        }}
      ></div>
      <button
        className={`read-more-btn ${customButtonClass}`}
        onClick={() => setShowLess(!showLess)}
      >
        Read {showLess ? 'More' : 'Less'}
      </button>
    </div>
  );
};

export default SmartText;
