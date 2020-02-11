import React from 'react';
import '../stylesheets/ColorCardContainer.css';
import data from '../resources/ColorData';
import ColorCard from '../components/ColorCard';

const ColorCardContainer = () => {
  return (
    <div className="ColorCardContainer">
      {data.map((el, idx) => <ColorCard key={idx} data={el} />)}
    </div>
  );
};

export default ColorCardContainer;
