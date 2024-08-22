import React from 'react';
import NoSpacesInput from './WordNoSpaces';
import NumberInput from './OnlyNumber';
import AlphanumericInput from './AlphaNumericNoSpace';
import AlphanumericInputWithSpaces from './AlphaNumericWithSpace';
import CapitalizeFirstLetterInput from './CapitalizeFirstWord';
import CapitalizeAllWordsInput from './CapitalizeFirstAllWords';
import EmailInput from './EmailValidation';
import INRInput from './NumberWordInr';

const App:React.FC = () => {
  return (
    <div>
      <NoSpacesInput/>
      <br />
      <NumberInput/>
      <br />
      <AlphanumericInput/>
      <br />
      <AlphanumericInputWithSpaces/>
      <br />
      <CapitalizeFirstLetterInput/>
      <br />
      <CapitalizeAllWordsInput/>
      <br />
      <EmailInput/>
      <br />
      <INRInput/>
    </div>
  );
}

export default App;

