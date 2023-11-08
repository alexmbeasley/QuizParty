/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';

const Achievement = ({ achievement }) => {
  return (
    <div key={achievement}>
      {achievement}
    </div>
  );
};

export default Achievement;
