import React, { useRef, useState } from 'react';
import MainSwiper from '../components/MainSwiper';
import TopAnimes from '../components/TopAnimes';
import sliderImg from '../util/slider';
import { SwiperSlide } from 'swiper/react';
export default function Home() {
  return (
    <>
      <MainSwiper perSlide='1' auto={true}>
        {
          sliderImg.map((v, i) => {
            return <SwiperSlide className='relative' key={i}>
              <img className='w-full h-96 blur-sm' src={v} />
              <img className='h-96 m-auto absolute top-0 left-0 right-0' src={v} />
            </SwiperSlide>
          })
        }
      </MainSwiper>
      <TopAnimes />
    </>
  );
}