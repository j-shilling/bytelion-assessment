import React from 'react';

import '../stylesheets/ColorCard.css';

const ColorCard = ({ data }) => {
  const { logo, title, body } = data;
  return (
    <div className="ColorCard">
      <img src={logo} alt="color icon" />
      <div className="title">{title}</div>
      <div className="content">{body}</div>
    </div>
  );
};

export default ColorCard;
