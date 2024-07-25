import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.modal')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };



  return (
    <>
        <div className={`modal__wrapper ${isOpen ? 'active' : ''}`}>
        <div className="modal">
          <div className="modal__close" onClick={closeModal}>
            <img src="./img/cancel.svg" alt="cancel" width="10px" height="10px" />
          </div>
          <div className="modal__title"><span>Заголовок модального окна</span></div>
          <div className="modal__body">Содержимое модального окна</div>
        </div>
      </div>
      <button className="btn modal__btn" onClick={openModal}>Открыть модальное окно</button>
    </>
  );
};

export default Modal;
