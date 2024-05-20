import React from 'react'
import hat from '../assets/Graduation hat.png'
import star from '../assets/award_star.png'
import plane from '../assets/fi-br-paper-plane.png'
import question from '../assets/fi-br-interrogation.png'
function Hero() {
  return (
    <div className='p-20'>
        <div className='translate-x-20 flex flex-col justify-center items-start gap-4'>
            <div className='flex gap-3 w-72 justify-center items-center p-3 rounded-xl' style={{border:"2px solid #FFA50B"}}>
                <img src={hat} alt="" />
                <p>An <span className='font-semibold'>IIT Delhi</span> Alumni Initiative</p>
            </div>
            <p className='text-5xl w-[600px] font-bold text-[#595961] leading-[4rem]'>Become an Expert in the field of <span className='text-[#992E9D]'>Data Science with 6 courses</span> </p>
            <p className='text-[#434347]'>A specially crafted Tech Kickstarter, with <span className='font-semibold'>5+ extensive online courses.</span></p>
            <div className='flex justify-start items-center gap-5 select-none'>
                <div className='rounded-3xl p-3 w-56 flex justify-center gap-1 items-center text-[#BB5302] bg-[#fff4c58b] font-semibold'><img src={star} />Personal Mentorship</div>
                <div className='rounded-3xl p-3 w-64 flex justify-center gap-1 items-center text-[#BB5302] bg-[#fff4c58b] font-semibold'><img src={star} />Internship Assistance</div>
                <div className='rounded-3xl p-3 w-72 flex justify-center gap-1 items-center text-[#BB5302] bg-[#fff4c58b] font-semibold'><img src={star} />Industry Certified Courses</div>
            </div>
            <div className='flex gap-8'>
            <button className='p-6 text-center text-white font-semibold rounded-2xl w-52 gap-2 flex justify-center items-center' style={{background:"linear-gradient(to bottom, #B73BBE 0%, #992E9D 100%)", boxShadow:"0px 8px 48px -10px #992E9D80"}}>Enroll Now <img src={plane}/></button>
            <p className='font-semibold text-[#992E9D] cursor-pointer flex gap-2 justify-center items-center'>Know More <img src={question} /></p>
            </div>
        
        </div>
    </div>
  )
}

export default Hero