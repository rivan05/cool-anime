import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import animeData from '../util/moviedata';

export default function Movie() {
  useEffect(()=>{ window.scrollTo(0, 0); },[])
  const {id} = useParams();
  const anime_data = animeData.filter(v=>{
    if(v.id == id){
      return v
    }
  });
  console.log(anime_data)
  return (
    <div className='h-[500px] p-10'>
      <div className='h-full w-[70%]'>
      <iframe className='h-full w-full' src={'https://www.youtube.com/embed/nL62Bg4gdWU?si=VBQ1-W5WX7Q9lqIy'} ></iframe>
      </div>
      <div className='h-full w-[30%]'></div>
    </div>
  )
}
