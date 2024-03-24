import React from 'react'
import MainSwiper from './MainSwiper'
import animeData from '../util/moviedata'
import { SwiperSlide } from 'swiper/react';
import { Link, Navigate } from 'react-router-dom';
export default function TopAnimes() {
  return (
    <div className='container p-8 '>
        <h1 className='text-3xl font-medium flex items-center mb-10'> <span className=' text-red-500 me-3'>|</span>Top Animes :  </h1>
        <MainSwiper perSlide="4" auto={false}>
            {
                animeData.map(v=>{
                    return <SwiperSlide className='relative' key={v.id}>
                       <Link to={`movie/${v.id}`}> <img  src={v.img}/></Link>
                    </SwiperSlide>
                })
            }
        </MainSwiper>
    </div>
  )
}
