import React, { useState } from 'react';

const AccordionMulti = () => {
  const [isOpen, setIsOpen] = useState([]);

  const toggleAccordion = (index) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
  };

  return (
    <section className="container">
      <h1>CSS Accordions</h1>
      <h3>Because we can.</h3>
      <div className="ac">
        {[0, 1].map((index) => (
          <React.Fragment key={index}>
            <input
              className="ac-input"
              id={`ac-${index}`}
              name={`ac-${index}`}
              type="checkbox"
              checked={isOpen[index]}
              onChange={() => toggleAccordion(index)}
            />
            <label className="ac-label" htmlFor={`ac-${index}`}>
              Item {index + 1}
            </label>
            <article className="ac-text">
              <div className="ac-sub">
                <input
                  className="ac-input"
                  id={`ac-${index}-sub1`}
                  name={`ac-${index}-sub1`}
                  type="checkbox"
                />
                <label className="ac-label" htmlFor={`ac-${index}-sub1`}>
                  I love jelly donuts
                </label>
                <article className="ac-sub-text">
                  <p>But not only is the sea such a foe to man who is an alien to it...</p>
                </article>
              </div>
              <div className="ac-sub">
                <input
                  className="ac-input"
                  id={`ac-${index}-sub2`}
                  name={`ac-${index}-sub2`}
                  type="checkbox"
                />
                <label className="ac-label" htmlFor={`ac-${index}-sub2`}>
                  They are so delicious
                </label>
                <article className="ac-sub-text">
                  <p>My younger brother was in London when the Martians fell at Woking...</p>
                </article>
              </div>
            </article>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AccordionMulti;
