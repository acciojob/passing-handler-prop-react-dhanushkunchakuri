import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { background, classname, label,key} = config;

  return (
    <button
      className={classname}
      data-testid={key}
      onClick={() => selectNextBackground({ background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
