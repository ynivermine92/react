import React, { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            <div className={`accordion__item ${activeIndex === 0 ? 'accordion__item-active' : ''}`}>
                <div className="accordion__item-trigger" onClick={() => toggleAccordion(0)}>
                    <div className="trigger__text">Аккордеон триггер 1</div>
                    <div className="trigger__img">
                        <span className="trigger__line-1"></span>
                        <span className="trigger__line-2"></span>
                    </div>
                </div>
                <div className="accordion__item-content">
                    <div className="content__text">Какой-то рандомный текст для аккордеона 1</div>
                </div>
            </div>

            <div className={`accordion__item ${activeIndex === 1 ? 'accordion__item-active' : ''}`}>
                <div className="accordion__item-trigger" onClick={() => toggleAccordion(1)}>
                    <div className="trigger__text">Аккордеон триггер 2</div>
                    <div className="trigger__img">
                        <span className="trigger__line-1"></span>
                        <span className="trigger__line-2"></span>
                    </div>
                </div>
                <div className="accordion__item-content">
                    <div className="content__text">Какой-то рандомный текст для аккордеона 2</div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
