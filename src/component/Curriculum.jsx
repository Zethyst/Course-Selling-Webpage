import React from 'react'
import eye from '../assets/eye.png'

function Curriculum() {
  return (
    <div className='p-20 bg-[#b73bbe1c] flex flex-col justify-center items-center gap-7'>
        <div className='w-96 text-center rounded-3xl text-[#992E9D] bg-[#ebd6ee91] p-4'>DATASCIENCE COURSE LEARNING PATH</div>
        <p className='text-[rgb(76,77,82)] font-bold text-4xl'> <span className='gradient'>Data Science</span> Course Curriculum</p>
        <div className='flex flex-col justify-center items-center p-2'>
            <div className='bg-white p-6 flex gap-52 justify-between w-[1000px] rounded-t-3xl' style={{borderBottom:"2px solid #b73bbe1c"}}>
                <div className='flex flex-col gap-1 text-[#4C4D52]'><p className='font-semibold text-2xl'>C++</p><p className='text-[#83848D]'>Learn C++ for strong programming fundamentals.</p></div>
                <button className='flex justify-center items-center gap-2 p-3 w-52 text-[#B73BBE] bg-[#FCF5FE] rounded-full'>
                    <img src={eye}/>
                    <p>View Curriculum</p>
                </button>
            </div>
            <div className='bg-white p-6 flex gap-52 justify-between w-[1000px]' style={{borderBottom:"2px solid #b73bbe1c"}}>
                <div className='flex flex-col gap-1 text-[#4C4D52]'><p className='font-semibold text-2xl'>MERN Stack</p><p className='text-[#83848D]'>Master the MERN Stack for high-demand projects.</p></div>
                <button className='flex justify-center items-center gap-2 p-3 w-52 text-[#B73BBE] bg-[#FCF5FE] rounded-full'>
                    <img src={eye}/>
                    <p>View Curriculum</p>
                </button>
            </div>
            <div className='bg-white p-6 flex gap-52  justify-between w-[1000px]' style={{borderBottom:"2px solid #b73bbe1c"}}>
                <div className='flex flex-col gap-1 text-[#4C4D52]'><p className='font-semibold text-2xl'>Data Structure & Algorithm</p><p className='text-[#83848D]'>Excel in Data Structures and Algorithms for interview success.</p></div>
                <button className='flex justify-center items-center gap-2 p-3 w-52 text-[#B73BBE] bg-[#FCF5FE] rounded-full'>
                    <img src={eye}/>
                    <p>View Curriculum</p>
                </button>
            </div>
            <div className='bg-white p-6 flex gap-52 justify-between w-[1000px] rounded-b-3xl' style={{borderBottom:"2px solid #b73bbe1c"}}>
                <div className='flex flex-col gap-1 text-[#4C4D52]'><p className='font-semibold text-2xl'>Competitive Programming</p><p className='text-[#83848D]'>Excel in Data Structures and Algorithms for interview success.</p></div>
                <button className='flex justify-center items-center gap-2 p-3 w-52 text-[#B73BBE] bg-[#FCF5FE] rounded-full'>
                    <img src={eye}/>
                    <p>View Curriculum</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Curriculum