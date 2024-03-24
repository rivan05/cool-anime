import React, { useState } from 'react';
import brand from '../resource/brand.png';
import { Link } from 'react-router-dom';
export default function Appbar() {
    const [visible, setVisible] = useState(false);
    function hideTab() {
        setVisible(!visible);
    }
    
    return (
        <nav className='h-20 bg-slate-900 md:px-8 px-1 flex justify-between items-center text-white relative'>
            <div className='h-full flex items-end'>
                <img className='h-full translate-y-2' src={brand} />
                <h1 className='text-3xl md:block hidden'>AnimeHead</h1>
            </div>
            <ul className='gap-x-8 text-2xl items-center hidden md:flex'>
                <li> <Link to='/'>Home</Link></li>
                <li>Contact</li>
                <li><Link to='/add-movie'> Uploads</Link></li>
                
            </ul>
            <div className='bg-white rounded-full h-14 w-14 hidden md:flex'></div>
            <button onClick={hideTab} className=' md:hidden block text-3xl pr-3'><i className="fi fi-br-menu-burger"></i></button>
            <ul className={`tab h-60 w-40 rounded-lg right-1 md:hidden bg-slate-900 absolute top-[84px] text-2xl p-5 ${visible ? 'flex' : 'hidden'} flex-col gap-y-2`}>
                <li>Home</li>
                <li>Contact</li>
                <li>Uploads</li>
            </ul>
        </nav>
    )
}


// s | ns