import React, { useState } from 'react';

const Spoller = () => {
  const [openItem, setOpenItem] = useState(null);
  const [openSubItem, setOpenSubItem] = useState(null);
  const [openSubItem2, setOpenSubItem2] = useState(null);

  const handleItemClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const handleSubItemClick = () => {
    console.log('Ссылки открыты');
  };

  const handleSubHeaderClick = (index) => {
    setOpenSubItem(openSubItem === index ? null : index);
    setOpenSubItem2(null);
  };

  const handleSubHeaderClick2 = (index) => {
    setOpenSubItem2(openSubItem2 === index ? null : index);
    setOpenSubItem(null);
  };

  return (
    <ul className="spoller">
      <li className="spoller__item">
        <div className="spoller__header">
          <h3
            className={`spoller__title js-title ${openItem === 0 ? 'open' : ''}`}
            onClick={() => handleItemClick(0)}
          >
            Заголовок 1
          </h3>
        </div>
        <div className="spoller__body" style={{ height: openItem === 0 ? 'auto' : '0' }}>
          <ul className="spoller__list">
            <li className="spoller__item">
              <h4
                className={`spoller__subtitle js-title ${openSubItem !== null ? 'open' : ''}`}
                onClick={() => handleSubHeaderClick(0)}
              >
                Подзаголовок 1
              </h4>
              <div className="spoller__body" style={{ height: openSubItem !== null ? 'auto' : '0' }}>
                <ul className="spoller__list">
                  <li className="spoller__item">
                    <a className="spoller__link" href="#" onClick={handleSubItemClick}>Ссылка 1</a>
                  </li>
                  <li className="spoller__item">
                    <a className="spoller__link" href="#" onClick={handleSubItemClick}>Ссылка 2</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li className="spoller__item">
        <div className="spoller__header">
          <h3
            className={`spoller__title js-title ${openItem === 1 ? 'open' : ''}`}
            onClick={() => handleItemClick(1)}
          >
            Заголовок 2
          </h3>
        </div>
        <div className="spoller__body" style={{ height: openItem === 1 ? 'auto' : '0' }}>
          <ul className="spoller__list">
            <li className="spoller__item">
              <h4
                className={`spoller__subtitle js-title ${openSubItem2 !== null ? 'open' : ''}`}
                onClick={() => handleSubHeaderClick2(0)}
              >
                Подзаголовок 1
              </h4>
              <div className="spoller__body" style={{ height: openSubItem2 !== null ? 'auto' : '0' }}>
                <ul className="spoller__list">
                  <li className="spoller__item">
                    <a className="spoller__link" href="#" onClick={handleSubItemClick}>Ссылка 1</a>
                  </li>
                  <li className="spoller__item">
                    <a className="spoller__link" href="#" onClick={handleSubItemClick}>Ссылка 2</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default Spoller;