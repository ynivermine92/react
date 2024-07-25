/* npm install react-text-mask*/ ///install 
/* https://www.npmjs.com/package/react-text-mask */


import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('+38');

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div>
      <MaskedInput
        className="modalRegist__input modalRegist__tell"
        type="tel"
        mask={['+', '3', '8', ' ', /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/]}
        guide={false}
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="+38"
      />
    </div>
  );
};

export default PhoneNumberInput;

