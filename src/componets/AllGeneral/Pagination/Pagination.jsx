


import React from 'react'

const Pagination = () => {
  return (
    <ul class="pagination">
    <li class="pagination__item">
      <a class="pagination__link" href="#">
        <svg class="pagination__icon" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.91674 15.6759C8.49831 16.1021 7.8132 16.1088 7.38651 15.6908L0.32445 8.77187C0.116927 8.56856 6.73996e-07 8.29038 6.99382e-07 8C7.24768e-07 7.70962 0.116927 7.43144 0.32445 7.22813L7.38651 0.309207C7.8132 -0.108835 8.49831 -0.102146 8.91674 0.324147C9.33518 0.750441 9.32848 1.43491 8.90179 1.85295L3.73102 6.91892L27.9179 6.91892C28.5155 6.91892 29 7.40294 29 8C29 8.59707 28.5155 9.08108 27.9179 9.08108L3.73102 9.08108L8.90179 14.147C9.32848 14.5651 9.33517 15.2496 8.91674 15.6759Z" />
        </svg>
      </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link current" href="#">1</a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#">2</a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#">3</a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#">4</a>
    </li>
    <li class="pagination__item">
      <span class="pagination__dots">...</span>
    </li>
    <li class="pagination__item">
      <a href="" class="pagination__link">85</a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#">
        <svg class="pagination__icon" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M20.0833 0.324148C20.5017 -0.102146 21.1868 -0.108834 21.6135 0.309208L28.6756 7.22813C28.8831 7.43144 29 7.70962 29 8C29 8.29038 28.8831 8.56856 28.6756 8.77187L21.6135 15.6908C21.1868 16.1088 20.5017 16.1021 20.0833 15.6759C19.6648 15.2496 19.6715 14.5651 20.0982 14.147L25.269 9.08108L1.08209 9.08108C0.484468 9.08108 0 8.59706 0 8C0 7.40293 0.484468 6.91892 1.08209 6.91892L25.269 6.91892L20.0982 1.85295C19.6715 1.43491 19.6648 0.750441 20.0833 0.324148Z" />
        </svg>
      </a>
    </li>
  
  </ul>
  )
}

export default Pagination