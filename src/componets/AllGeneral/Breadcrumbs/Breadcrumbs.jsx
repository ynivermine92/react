
import React from 'react'

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <a href="index.html" className="breadcrumbs__link">Главная</a>
      </li>
      <li className="breadcrumbs__item">
        <a href="#" className="breadcrumbs__link"><span>/</span> Каталог</a>
      </li>
      <li className="breadcrumbs__item">
        <a href="#" className="breadcrumbs__link"><span>/</span> Колесные экскаваторы</a>
      </li>
      <li className="breadcrumbs__item">
        <span className="breadcrumbs__current">/ Hyundai ROBEX 140W-7</span>
      </li>
    </ul>
  </div>
  
  )
}

export default Breadcrumbs