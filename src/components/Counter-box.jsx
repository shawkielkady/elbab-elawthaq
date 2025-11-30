import React from 'react';
import colors from '../assets/styles/colors';

export const CounterBox = ({ number, label }) => {
  return (
    <div className="counter-box">
      <p  className="counter-number" style={{ color:colors.gold,fontSize:'3.5rem',fontWeight:'bold'}}>
        {number}
      </p>
      <p style={{fontSize:'1.2rem',fontWeight:'bold'}} className="counter-label">{label}</p>
    </div>
  );
};
