import React, { useState } from "react";

function SelectLang() {
  const [isListActive, setListActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("EN");

  const handleSelectClick = () => {
    setListActive(!isListActive);
  };

  const handleSelectOptionClick = (option) => {
    setSelectedOption(option);
    setListActive(false);
  };

  return (
    <div className="select__wrapper">
      <div className="select">
        <div
          className={`select__btn ${isListActive ? "active" : ""}`}
          onClick={handleSelectClick}
        >
          <a
            className={`select__link ${
              selectedOption === "EN" ? "select__link--en" : ""
            } ${selectedOption === "KZ" ? "select__link--kz" : ""} ${
              selectedOption === "RU" ? "select__link--ru" : ""
            }`}
          >
            {selectedOption}
          </a>
        </div>
        <ul className={`select__list ${isListActive ? "active" : ""}`}>
          <li className="select__item">
            <a
              className={`select__link ${
                selectedOption === "EN" ? "active" : ""}`}
              href="#"
              onClick={() => handleSelectOptionClick("EN")}
            >
              EN
            </a>
          </li>
          <li className="select__item">
            <a
              className={`select__link ${
                selectedOption === "KZ" ? "active" : ""
              } select__link--kz`}
              href="#"
              onClick={() => handleSelectOptionClick("KZ")}
            >
              KZ
            </a>
          </li>
          <li className="select__item">
            <a
              className={`select__link ${
                selectedOption === "RU" ? "active" : ""
              } select__link--ru`}
              href="#"
              onClick={() => handleSelectOptionClick("RU")}
            >
              RU
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SelectLang;
