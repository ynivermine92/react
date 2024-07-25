import React, { useState, useEffect } from 'react';

const TimerСount = () => {
  const newYear = new Date('December 31 2025 00:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    let now = new Date();
    let timeDifference = newYear - now;
    let days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    let hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(timeDifference / 1000 / 60) % 60;
    let seconds = Math.floor(timeDifference / 1000) % 60;
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  return (
    <section className="time-count">
      <div className="time-count__container">
        <h2 className="time-count__title">Таймер обратного отсчета</h2>
        <div className="time-count__inner">
          <div className="time-count__item time-count__days">
            <div className="time-count__val">{timeLeft.days}</div>
            <span className="time-count__text">{declOfNum(timeLeft.days, ['день', 'дня', 'дней'])}</span>
          </div>
          <div className="time-count__separator">:</div>
          <div className="time-count__item time-count__hours">
            <div className="time-count__val">{timeLeft.hours}</div>
            <span className="time-count__text">{declOfNum(timeLeft.hours, ['час', 'часа', 'часов'])}</span>
          </div>
          <div className="time-count__separator">:</div>
          <div className="time-count__item time-count__minutes">
            <div className="time-count__val">{timeLeft.minutes}</div>
            <span className="time-count__text">{declOfNum(timeLeft.minutes, ['минута', 'минуты', 'минут'])}</span>
          </div>
          <div className="time-count__separator">:</div>
          <div className="time-count__item time-count__seconds">
            <div className="time-count__val">{timeLeft.seconds}</div>
            <span className="time-count__text">{declOfNum(timeLeft.seconds, ['секунда', 'секунды', 'секунд'])}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimerСount;
