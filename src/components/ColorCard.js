import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/ColorCard.css';

const ColorCard = ({data}) => {
  const {logo, title, body} = data;
  return (
    <div className="ColorCard">
      <img src={logo} alt="color icon" />
      <div className="title">{title}</div>
      <div className="content">{body}</div>
    </div>
  );
};

ColorCard.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default ColorCard;
