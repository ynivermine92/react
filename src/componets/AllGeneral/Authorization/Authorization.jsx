import React, { useState } from "react";

const Authorization = ({ modelAuthorization, setmodelAuthorization, setModelBlock}) => {

  const [email, setEmail] = useState("impuls@gmail.com");
  const [password, setPassword] = useState("1234");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^[a-zA-Z0-9]+$/;

    const emailValid = emailRegex.test(email);
    const passwordValid = passwordRegex.test(password);

    if (emailValid && passwordValid && password.length > 3) {
      alert('Авторизация');
      setmodelAuthorization(false)
    } else {
      if (!emailValid) {
        alert("Неправильный формат email");
      }
      if (!passwordValid) {
        alert(" Введите пароль, больше чем 3 синвола ");
      }
    }
  };

  const  AuthorizatioClouse = () => {
    setmodelAuthorization(false)
  }

  const registration  = () => {
    setmodelAuthorization(false)
    setModelBlock(true)
  }

  return (
    <div className={`modal__wrapper ${modelAuthorization ? 'active' : ''}`}>
      <div className="modal">
        <div className="modal__close" onClick={AuthorizatioClouse}>
          <i className="large material-icons">close</i>
        </div>
        <div className="modal__title">
          <span>Авторизация</span>
        </div>
        <div className="modal__body">
          <div className="modal__verification" onClick={registration}>
            Перейдите к регистрации
          </div>
          <form className="modal__form" onSubmit={handleSubmit}>
            <input
              placeholder="Введите email"
              className="modal__input modal__mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Введите пароль"
              className="modal__input modal__password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="modal__button" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
