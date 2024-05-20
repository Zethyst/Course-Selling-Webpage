import React, { useEffect, useState } from 'react'
import learning from '../assets/Online learning.png'
import graduated from '../assets/Graduated.png'
import cloud from '../assets/XMLID_994_.png'
import folder from '../assets/Group.png'

function Companies() {

    const [title1,setTitle1]=useState("");

    const updateTitles = () => {
        if (window.innerWidth > 768) {
          setTitle1("Data Scientist");
        } else {
          setTitle1("Full Stack Developers");
        }
      };

      useEffect(() => {
        updateTitles();

        window.addEventListener('resize', updateTitles);

        return () => {
          window.removeEventListener('resize', updateTitles);
        };
      }, []);

  return (
    <div className='mb-20 bg-[#FFFCEA] py-10 flex flex-col justify-center items-center gap-16'>
                <p className='text-[rgb(76,77,82)] font-bold text-4xl text-center md:w-full w-[90%]'> Top Companies Hiring <span className='gradient'>{title1}</span></p>
    <marquee behavior="scroll" direction="left">
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
    </marquee>
    </div>
  )
}

export default Companies;