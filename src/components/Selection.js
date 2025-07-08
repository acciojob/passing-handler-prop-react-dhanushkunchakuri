import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: '' });

  const handleClick = () => {
    applyColor(setStyle);
  };

  return (
    <div
      className="fix-box"
      onClick={handleClick}
      style={style}
    >
      Selection
    </div>
  );
};

export default Selection;
