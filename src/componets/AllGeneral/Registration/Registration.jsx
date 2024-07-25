import React, { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import ModalThank from "../../components/ModalThank/ModalThank";

const Registration = ({ ModelBlock, setModelBlock, setmodelAuthorization }) => {
  const [phoneNumber, setPhoneNumber] = useState('+380933524432');
  const [email, setEmail] = useState('impulse@gmail.com');
  const [modelThank, setModelThank] = useState(false);



  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ModelBlock && !e.target.closest('.modalRegist')) {
        setModelBlock(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ModelBlock]);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const closeModel = () => {
    setModelBlock(false);
    setModelThank(false);
  };

  const Authorization = () => {
    setModelBlock(false);
    setmodelAuthorization(true)
  }

  const registrForm = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (phoneNumber.length >= 12 && emailRegex.test(email)) {
      setTimeout(() => {
        setModelBlock(false);
        setModelThank(true);
      }, 500)
    } else {
      if (phoneNumber.length < 12) {
        alert('Номер телефона неправильной длины');
      }
      if (!emailRegex.test(email)) {
        alert('Неправильный формат email');
      }
    }
  };

  return (
    <>
    <div className={`modalRegist__wrapper ${ModelBlock ? 'active' : ''}`}>
      <div className="modalRegist">
        <div className="modalRegist__close" onClick={closeModel}>
          <i className="large material-icons">close</i>
        </div>
        <div className="modalRegist__title">
          <span>Регистрация</span>
        </div>
        <div className="modalRegist__body">
          <div className="modalRegist__regist" onClick={Authorization}>Перейти к входу</div>
          <form className="modalRegist__form" onSubmit={registrForm}>
            <input
              placeholder="email@"
              className="modalRegist__input modal__email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <MaskedInput
              className="modalRegist__input modalRegist__tell"
              type="tel"
              mask={['+', '3', '8', ' ', /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/]}
              guide={false}
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="+38"
            />
            <button className="modalRegist__button" type="submit">
              Регистрация
            </button>
          </form>
        </div>
      </div>
    </div>


<ModalThank modelThank={modelThank}  ModelBlock={ModelBlock} setModelBlock={setModelBlock}  closeModel={closeModel}/>
</>
  );
};

export default Registration;
