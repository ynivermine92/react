
/* unstall*********************************** npm install swiper ***********************************/ 

/* website   https://swiperjs.com/react#usage 
             https://codepen.io/aptyyyp/pen/MWLGyra  */

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import  node   Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Image
import MainImage from "../../image/main/page.jpg";
import MainImage2 from "../../image/main/page2.jpg";
import MainImage3 from "../../image/main/page3.jpg";

const Slider = () => {
  return (
    <section className="PageSlider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={4}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <img className="PageSlider__image" src={MainImage} alt="" />
            <div className="container">
              <div className="PageSlider__inner">
                <h1 className="title">
                  Welcome to <span>Japanese Kitchen</span> Restaurant
                </h1>
                <p className="PageSlider__text">
                  People eat with their eyes and Sushi creates an easy way for
                  customers to order when they can see beautiful photos of your
                  food
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <img
              className="PageSlider__image"
              src={MainImage2}
              alt="Главная страница"
            />
            <div className="container">
              <div className="PageSlider__inner">
                <h1 className="title">
                  Welcome to <span>Restaurant</span>
                </h1>
                <p className="PageSlider__text">
                  People eat with their eyes and Sushi creates an easy way for
                  customers to order when they can see beautiful photos of your
                  food
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <img
              className="PageSlider__image"
              src={MainImage3}
              alt="Главная страница"
            />
            <div className="container">
              <div className="PageSlider__inner">
                <h1 className="title">
                  Welcome to <span>Restaurant</span>
                </h1>
                <p className="PageSlider__text">
                  People eat with their eyes and Sushi creates an easy way for
                  customers to order when they can see beautiful photos of your
                  food
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
