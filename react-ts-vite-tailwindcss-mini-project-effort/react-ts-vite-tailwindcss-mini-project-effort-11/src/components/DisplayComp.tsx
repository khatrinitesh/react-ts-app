import React from 'react';

interface DisplayProps {
    value: string;
  }

  const DisplayComp: React.FC<DisplayProps> = ({ value }) => {
    return (
      <div className="display">
        {value}
      </div>
    );
  };

export default DisplayComp