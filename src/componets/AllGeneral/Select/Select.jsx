import React, { useState, useEffect, useRef } from 'react';


function SelectComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Сначала популярные');
  const [selectedValue, setSelectedValue] = useState('popular');
  const [listHeight, setListHeight] = useState(0);
  const textRef = useRef(null); // Создаем ссылку на элемент

  const selectClose = () => {
    setIsOpen(false);
  };

  const handleItemClick = (value, text) => {
    setSelectedItem(text);
    setSelectedValue(value);
    selectClose();
  };

  useEffect(() => {
    document.addEventListener("mouseup", (e) => {
      if (!document.querySelector('.select').contains(e.target)) selectClose();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") selectClose();
    });

    return () => {
      document.removeEventListener("mouseup", (e) => {
        if (!document.querySelector('.select').contains(e.target)) selectClose();
      });

      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") selectClose();
      });
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Открываем список временно, чтобы получить его высоту
      setListHeight(textRef.current.scrollHeight);
      setTimeout(() => {
        // Скрываем список после получения высоты
        setListHeight(textRef.current.childElementCount * 200); // Умножаем высоту одного элемента на количество элементов
      }, 0);
    } else {
      setListHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="select" ref={textRef}> {/* Присваиваем ссылку на элемент */}
      <input className="select__input" type="hidden" name="select" value={selectedValue} />
      <button className={`select__btn ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="select__text">{selectedItem}</span>
        <svg
            className="select__icon"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.8081 17.0664C15.7221 17.1709 15.614 17.2551 15.4916 17.3128C15.3691 17.3705 15.2354 17.4002 15.1001 17.4C14.9824 17.4007 14.8657 17.3777 14.757 17.3323C14.6484 17.2869 14.55 17.2202 14.4677 17.136L10.8629 13.5264C10.6943 13.3576 10.5997 13.1289 10.5997 12.8904C10.5997 12.6519 10.6943 12.4231 10.8629 12.2544C10.9463 12.1707 11.0454 12.1042 11.1545 12.0589C11.2637 12.0135 11.3807 11.9902 11.4989 11.9902C11.6171 11.9902 11.7341 12.0135 11.8432 12.0589C11.9524 12.1042 12.0515 12.1707 12.1349 12.2544L14.2001 14.3328V1.49999C14.2001 1.2613 14.2949 1.03238 14.4637 0.863594C14.6325 0.694812 14.8614 0.599991 15.1001 0.599991C15.3388 0.599991 15.5677 0.694812 15.7365 0.863594C15.9053 1.03238 16.0001 1.2613 16.0001 1.49999V14.3208L18.0665 12.2592C18.1499 12.1756 18.2489 12.1093 18.3579 12.0641C18.467 12.0189 18.5838 11.9956 18.7019 11.9956C18.8199 11.9956 18.9368 12.0189 19.0458 12.0641C19.1549 12.1093 19.2539 12.1756 19.3373 12.2592C19.5058 12.4279 19.6005 12.6567 19.6005 12.8952C19.6005 13.1337 19.5058 13.3624 19.3373 13.5312L15.8069 17.0664H15.8081ZM5.60809 0.933591C5.52212 0.829053 5.41402 0.744903 5.29158 0.687213C5.16915 0.629524 5.03543 0.599733 4.90009 0.599991C4.78235 0.599304 4.66569 0.622324 4.55704 0.66768C4.44839 0.713036 4.34999 0.779799 4.26769 0.863991L0.664087 4.47359C0.495546 4.64234 0.400879 4.87109 0.400879 5.10959C0.400879 5.34809 0.495546 5.57684 0.664087 5.74559C0.747484 5.82933 0.846598 5.89578 0.95574 5.94112C1.06488 5.98646 1.1819 6.0098 1.30009 6.0098C1.41827 6.0098 1.53529 5.98646 1.64443 5.94112C1.75358 5.89578 1.85269 5.82933 1.93609 5.74559L4.00009 3.66839V16.5C4.00009 16.7387 4.09491 16.9676 4.26369 17.1364C4.43247 17.3052 4.66139 17.4 4.90009 17.4C5.13878 17.4 5.3677 17.3052 5.53648 17.1364C5.70527 16.9676 5.80009 16.7387 5.80009 16.5V3.67919L7.86649 5.74079C7.94986 5.82435 8.0489 5.89064 8.15793 5.93588C8.26696 5.98111 8.38385 6.00439 8.50189 6.00439C8.61993 6.00439 8.73681 5.98111 8.84584 5.93588C8.95487 5.89064 9.05391 5.82435 9.13729 5.74079C9.30583 5.57204 9.4005 5.34329 9.4005 5.10479C9.4005 4.86629 9.30583 4.63754 9.13729 4.46879L5.60689 0.93239L5.60809 0.933591Z" />
          </svg>
      </button>
      <ul className="select__list" style={{ maxHeight: `${listHeight}px` }}> {/* Добавляем стиль для maxHeight */}
        <li className="select__item" onClick={() => handleItemClick('popular', 'Сначала популярные')}>Сначала популярные</li>
        <li className="select__item" onClick={() => handleItemClick('cheaper', 'Сначала дешевле')}>Сначала дешевле</li>
        <li className="select__item" onClick={() => handleItemClick('expensive', 'Сначала дороже')}>Сначала дороже</li>
        <li className="select__item" onClick={() => handleItemClick('high rating', 'Сначала с высоким рейтингом')}>Сначала с высоким рейтингом</li>
      </ul>
    </div>
  );
}

export default SelectComponent;
