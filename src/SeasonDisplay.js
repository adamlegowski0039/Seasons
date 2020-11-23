import React from 'react';

import './SeasonDisplay.css';

const seasonConfig = {
  cold: {
    text: 'Strasznie zimno',
    icon: 'snowflake',
  },
  sunny: {
    text: 'Lecimy na plażę',
    icon: 'sun',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'sunny' : 'cold';
  } else {
    return lat > 0 ? 'cold' : 'sunny';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${icon} icon icon-left`}></i>
      <h1>{text}</h1>
      <i className={`massive ${icon} icon icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
