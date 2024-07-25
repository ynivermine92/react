import React, { useState } from 'react';

const Rating = () => {
  const [rateTotal, setRateTotal] = useState(0);

  const handleStarClick = (rate) => {
    setRateTotal(rate);
  };

  return (
    <div className="rating" data-rate-total={rateTotal}>
      {[5, 4, 3, 2, 1].map((rate) => (
        <svg
          key={rate}
          className={`rating__star${rate <= rateTotal ? ' active' : ''}`}
          data-rate={rate}
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleStarClick(rate)}
        >
          <path d="M11.5204 1.9421C11.986 0.508953 14.0135 0.508955 14.4792 1.94211L16.2677 7.44656C16.476 8.08748 17.0732 8.52142 17.7471 8.52142H23.5349C25.0418 8.52142 25.6683 10.4497 24.4492 11.3354L19.7668 14.7374C19.2216 15.1335 18.9935 15.8356 19.2017 16.4765L20.9902 21.981C21.4559 23.4142 19.8156 24.6059 18.5965 23.7202L13.9141 20.3182C13.3689 19.9221 12.6307 19.9221 12.0855 20.3182L7.40308 23.7202C6.18397 24.6059 4.54367 23.4141 5.00933 21.981L6.79784 16.4765C7.00608 15.8356 6.77795 15.1335 6.23275 14.7374L1.55038 11.3354C0.331269 10.4497 0.95781 8.52142 2.46471 8.52142H8.25243C8.92634 8.52142 9.52361 8.08748 9.73186 7.44656L11.5204 1.9421Z"/>
        </svg>
      ))}
    </div>
  );
};

export default Rating;
