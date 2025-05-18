import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Swiper.module.scss";
import tourData from "../data/data.js";

const StateCarousel = () => {
  const navigate = useNavigate();

  return (
    <div id="tourCard" className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {tourData.map((state, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.card}>
              <img
                src={state.image}
                alt={state.state}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h2 className={styles.stateName}>{state.state}</h2>
                <button
                  className={styles.exploreButton}
                  onClick={() => navigate(`/tour/${state.state}`)} // Ensure the correct path here
                >
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StateCarousel;
