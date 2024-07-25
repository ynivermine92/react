import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button
        className={`counter__btn minus ${count <= 1 ? 'disabled' : ''}`}
        type="button"
        onClick={decrement}
        disabled={count <= 1}
      />
      <input
        className="counter__input"
        type="text"
        value={count}
        maxLength="3"
        readOnly
      />
      <button
        className="counter__btn plus"
        type="button"
        onClick={increment}
      />
    </div>
  );
};

export default Counter;
