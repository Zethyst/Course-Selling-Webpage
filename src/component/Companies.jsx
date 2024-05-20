import React from 'react'
import learning from '../assets/Online learning.png'
import graduated from '../assets/Graduated.png'
import cloud from '../assets/XMLID_994_.png'
import folder from '../assets/Group.png'
function Companies() {
  return (
    <div className='mb-20 bg-[#FFFCEA] p-10 flex flex-col justify-center items-center gap-16'>
                <p className='text-[rgb(76,77,82)] font-bold text-4xl'> Top Companies Hiring <span className='gradient'>Data Scientist</span></p>
        <div className='flex justify-center items-center gap-10 h-24'>
            <div className='flex justify-center items-center bg-white p-10 w-64 rounded-3xl'>
                <p className='text-[#434347] text-2xl'>Logo</p>
            </div>
            <div className='flex justify-center items-center bg-white p-10 w-64 rounded-3xl'>
                <p className='text-[#434347] text-2xl'>Logo</p>
            </div>
            <div className='flex justify-center items-center bg-white p-10 w-64 rounded-3xl'>
                <p className='text-[#434347] text-2xl'>Logo</p>
            </div>
            <div className='flex justify-center items-center bg-white p-10 w-64 rounded-3xl'>
                <p className='text-[#434347] text-2xl'>Logo</p>
            </div>
            <div className='flex justify-center items-center bg-white p-10 w-64 rounded-3xl'>
                <p className='text-[#434347] text-2xl'>Logo</p>
            </div>
        </div>
    </div>
  )
}

export default Companies;