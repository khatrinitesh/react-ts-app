import React, { useState } from 'react'
import { OptionData } from '../../constants/constants';

const TrackSelected:React.FC  = () => {
    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
    const [disabled,setDisabled] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionId(Number(e.target.value));
  };

  const handleEnableSelect = () => {
    setDisabled(false)
  }

  return (
    <div>
         <button onClick={handleEnableSelect}>Enable Select</button>
         <select disabled={disabled} onChange={e => handleChange(Number(e.target.value))} value={selectedOptionId ?? ''}>
      <option value="" disabled>Select an option</option>
      {OptionData.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
    </div>
  )
}

export default TrackSelected