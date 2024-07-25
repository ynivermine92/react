import React, { useState } from 'react';

const ShowMore = () => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const [showMoreBtnVisible, setShowMoreBtnVisible] = useState(true);

  const images = [
    "https://i.postimg.cc/9Mv7Y1nq/1.jpg",
    "https://i.postimg.cc/bYtbwcZ0/2.jpg",
    "https://i.postimg.cc/7Y12S3Mf/3.jpg",
    "https://i.postimg.cc/6qnGjRkb/4.jpg",
    "https://i.postimg.cc/xCbk8M1j/5.jpg",
    "https://i.postimg.cc/cCyvnCvR/6.jpg",
    "https://i.postimg.cc/9Mv7Y1nq/1.jpg",
    "https://i.postimg.cc/bYtbwcZ0/2.jpg",
    "https://i.postimg.cc/7Y12S3Mf/3.jpg",
    "https://i.postimg.cc/6qnGjRkb/4.jpg",
    "https://i.postimg.cc/xCbk8M1j/5.jpg",
    "https://i.postimg.cc/cCyvnCvR/6.jpg"
    
  ];

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 3);
    if (itemsToShow + 2 >= images.length) {
      setShowMoreBtnVisible(false);
    }
  };

  return (
    <section className="show-more">
      <div className="show-more__container">
        <ul className="show-more__list">
          {images.slice(0, itemsToShow).map((image, index) => (
            <li key={index} className="show-more__item visible">
              <img className="show-more__img" src={image} alt="Фото" />
            </li>
          ))}
        </ul>
        {showMoreBtnVisible && <button className="show-more__btn" onClick={handleShowMore}>Показать ещё</button>}
      </div>
    </section>
  );
}

export default ShowMore;
