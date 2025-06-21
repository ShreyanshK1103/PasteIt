import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='sticky h-[8vh] p-7 items-center justify-between font-bold text-xs bg-transparent flex flex-row font-main '>
      <div className='m-3 p-3'>
          SVG
      </div>
      <div className='flex'>
        <Link to='/' className='m-3 p-3 text-primtext hover:text-butthover'>Home</Link>
        <Link to='/FindNote' className='m-3 p-3 text-primtext hover:text-butthover'>Find Note</Link>
      </div>
      <div className='m-3 p-3'><button className="cursor-pointer transition-all bg-primbutt text-white px-5 py-2 rounded-sm hover:butthover hover:-translate-y-[1px]">
        More
      </button></div>
    </div>
  )
}