import React from 'react'
import  logo  from '../assets/logo.svg';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className='bg-[#ffffff] w-full h-20 sm:px-8 px-4 py-6 border-b border-b-[#e6ebf4] '>
      <div className='flex justify-center items-center'>
        <Link to={'/'}>
          <img className='w-28' src={logo} alt="" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar