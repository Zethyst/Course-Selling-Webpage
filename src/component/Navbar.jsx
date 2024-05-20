import React from 'react'

function Navbar({title}) {
  return (
    <>
    <div className='w-full flex justify-between items-center p-6 px-24'>
        <p className='font-semibold text-2xl  translate5  '>{title}</p>
        <div className='flex justify-center items-center gap-5 md:translate-x-0 translate-x-6'>
            <p className='font-semibold text-[#992E9D] cursor-pointer'>Login</p>
            <button className='p-4 text-center text-white font-semibold rounded-2xl w-28 ' style={{background:"linear-gradient(to bottom, #B73BBE 0%, #992E9D 100%)"}}>Signup</button>
        </div>
    </div>
    <div className='relative bg-[#3B3B3E] p-3 flex justify-center items-center gap-5 text-[#CFD0D2] font-medium'>
        <p className='nav-item hover:text-white'>Overview</p>
        <p className='nav-item hover:text-white'>Curriculum</p>
        <p className='nav-item hover:text-white'>Refund</p>
        <p className='nav-item hover:text-white'>Testimonials</p>
    </div>
    </>
  )
}

export default Navbar