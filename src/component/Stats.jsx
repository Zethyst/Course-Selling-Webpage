import React from 'react'
import learning from '../assets/Online learning.png'
import graduated from '../assets/Graduated.png'
import cloud from '../assets/XMLID_994_.png'
import folder from '../assets/Group.png'
function Stats() {
  return (
    <div className='mb-20 bg-[#b73bbe1c] p-10 hidden md:flex justify-center items-center gap-16'>
        <div className='flex justify-center items-center gap-3 w-64 h-24' style={{borderRight:"2px solid #F4D6F8"}}>
            <img src={learning}  />
            <div className='flex flex-col justify-center items-start '>
                <p className='font-semibold text-4xl text-[#992E9D]'>24</p>
                <p className='text-[#434347db]'>Courses</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-3 w-64 h-24' style={{borderRight:"2px solid #F4D6F8"}}>
            <img src={graduated}  />
            <div className='flex flex-col justify-center items-start '>
                <p className='font-semibold text-4xl text-[#992E9D]'>30k+</p>
                <p className='text-[#434347db]'>Learners</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-3 w-64 h-24' style={{borderRight:"2px solid #F4D6F8"}}>
            <img src={cloud}  />
            <div className='flex flex-col justify-center items-start '>
                <p className='font-semibold text-4xl text-[#992E9D]'>100k+</p>
                <p className='text-[#434347db]'>Doubts Solved</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-3 w-64 h-24' >
            <img src={folder}  />
            <div className='flex flex-col justify-center items-start '>
                <p className='font-semibold text-4xl text-[#992E9D]'>10k+</p>
                <p className='text-[#434347db]'>Student Projects</p>
            </div>
        </div>
    </div>
  )
}

export default Stats