import React from 'react';

const RadioCastom = () => {
  return (
    <>
      <label className="radio">
        <input type="radio" className="radio__real" name="term" />
        <span className="radio__fake"></span>
        <span className="radio__title">Любой</span>
      </label>

      <label className="radio">
        <input type="radio" className="radio__real" name="term" />
        <span className="radio__fake"></span>
        <span className="radio__title">Сдан</span>
      </label>

      <label className="radio">
        <input type="radio" className="radio__real" name="term" />
        <span className="radio__fake"></span>
        <span className="radio__title">В этом году</span>
      </label>

      <label className="radio">
        <input type="radio" className="radio__real" name="term" />
        <span className="radio__fake"></span>
        <span className="radio__title">В следующем году</span>
      </label>
    </>
  );
};

export default RadioCastom;
