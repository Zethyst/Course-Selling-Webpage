import React from 'react'
import { Progress } from "@material-tailwind/react";
import Scribble from '../assets/scribble.png'
import Time from '../assets/time.png'
import man from '../assets/man.png'
import Rectangle from '../assets/Rectangle.png'

// eslint-disable-next-line react/prop-types
const Icon = ({ type }) => <img src={Rectangle} className='absolute -z-10 -translate-x-7 -translate-y-2' />;

function Refund() {
  return (
    <div className='p-40 flex flex-col justify-center items-center gap-10'>
                <p className='text-5xl text-center w-[900px] font-bold text-[#595961] leading-[4rem]'>Don't miss out on this <span className='text-[#992E9D]'>limited-time opportunity </span> to learn for <span className='text-[#992E9D]'>Free! </span> </p>
                <div className='rounded-[32px] flex flex-col justify-center items-center gap-2 p-6 w-[600px] relative' style={{background:"linear-gradient(180deg, #9849FF 0%, #841EE3 93.51%)"}}>
                    <img src={Scribble} className='absolute right-0 top-0' />
                    <p className='font-bold text-2xl text-white'>100% Refund Offer 😎</p>
                    {/* <Progress value={30} color="amber" /> */}
                    <span className='text-[#ffffff81] pt-2 text-xl self-start'>20 Seats Left</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-[#ffffff3b]">
                    <div className="bg-yellow-400 h-2.5 rounded-full progress relative" style={{width: "45%"}}></div>
                    </div>
                    <span className='text-[#fffffff3] pt-2 text-xl flex gap-1'> <img src={Time} />Offer ends in 10:00Mins</span>
                </div>
                <p className='text-[#450D45] text-4xl font-bold'>How does it work?</p>
                {/* <Steps direction='' className='text-white'
    current={1}
    items={[
      { title: 'first', icon:<Icon type="cloud" />},
    ]}
  >    <Steps.Step title="third" />
  </Steps>    */}
    <div className='flex gap-96'>
    <div className='text-white relative stepperH'><img src={Rectangle} /><p className='z-10 text-md absolute top-2 left-6'>Step 1</p></div>
    <div className='text-white relative stepperH'><img src={Rectangle} /><p className='z-10 text-md absolute top-2 left-6'>Step 2</p></div>
    <div className='text-white relative '><img src={Rectangle} /><p className='z-10 text-md absolute top-2 left-6'>Step 3</p></div>
    </div>
    <div className='flex justify-center items-center gap-5'>
        <div className='flex flex-col gap-6 justify-center items-center p-10 rounded-3xl w-[460px]' style={{border:"1px solid #F9EBFC",background:"linear-gradient(180deg, #FFFFFF 0%, #FCF5FE 100%)"}}>
            <p className='text-[#7F2781] font-semibold text-2xl'>Step 1 : Enroll into your favorite course for only ₹1,499</p>
            <img src={man} height={150} width={150}/>
            <p className='text-[#3B3B3E] text-xl'>Start Learning with <span className='font-semibold'>Lifetime Course Access.</span></p>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center p-10 rounded-3xl w-[460px]' style={{border:"1px solid #F9EBFC",background:"linear-gradient(180deg, #FFFFFF 0%, #FCF5FE 100%)"}}>
            <p className='text-[#7F2781] font-semibold text-2xl'>Step 1 : Enroll into your favorite course for only ₹1,499</p>
            <div className='p-7 rounded-3xl flex justify-start items-center gap-3' style={{border:"1px solid #E5E5E8"}}>
                <span className='gradient2 text-3xl'>2</span>
                <p className='text-[#4C4D52]'>years time from the date of enrollment</p>
            </div>
            <p className='text-[#3B3B3E] text-lg'>Finish the course within <span className='font-semibold'>2 Years </span>to Qualify for Refund.</p>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center p-10 rounded-3xl w-[460px]' style={{border:"1px solid #F9EBFC",background:"linear-gradient(180deg, #FFFFFF 0%, #FCF5FE 100%)"}}>
            <p className='text-[#7F2781] font-semibold text-2xl'>Step 1 : Enroll into your favorite course for only ₹1,499</p>
            <div className='p-7 flex justify-start items-center gap-3' style={{border:"1px solid #E5E5E8"}}>
                <span className='gradient2 text-3xl'>100%</span>
                <p className='text-[#4C4D52]'>Enrollment Fee is refunded</p>
            </div>
            <p className='text-[#3B3B3E] text-lg'>Upon Course Completion within <span className='font-semibold'>2 Years,</span> Get Your <span className='font-semibold'>₹1,499 Back.</span></p>
        </div>
    </div>
    </div>
  )
}

export default Refund