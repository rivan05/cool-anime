import React, { Children } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination,Autoplay } from 'swiper/modules';


export default function MainSwiper({ children,perSlide, auto }) {
    console.log(perSlide)
  return (
      <Swiper
        slidesPerView={perSlide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay= {auto?{
          delay: 2500,
          disableOnInteraction: false,
        }:false}
        loop={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
      { children }       
      </Swiper>
  );
}