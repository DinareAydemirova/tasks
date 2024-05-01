import React from 'react';
import reducer from '../reducer';

const Decrement = ({ state, dispatch }) => {
  return (
    <div>
      <button onClick={() => dispatch(
        {
           type: "setDec", 
           count: 1
        })}>-</button>
    </div>
  );
};

export default Decrement;
