import React from "react";
import CertificateImage from '../assets/certiciate.png'
import Internship from '../assets/internship.png'
import star from '../assets/award_star2.png'

function Certificate() {
  return (
    <div className=" p-4 flex flex-col justify-center items-center gap-7">
      <p className="text-4xl md:text-5xl md:text-center w-[85%] md:w-full font-bold text-[#595961] leading-[4rem]">
        Unlock <span className="text-[#992E9D]">6 Certificates </span> &{" "}
        <span className="text-[#992E9D]">Internship Opportunities! </span>{" "}
      </p>
      <div className="flex flex-col md:flex-row gap-6">

      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center bg-[#FCF5FE] p-10 rounded-3xl w-[90%] md:w-[600px]">
          <p className="w-96 text-center text-[#450D45] text-2xl font-semibold">
            Get 6 Industry Recognized Certificates!
          </p>
          <img src={CertificateImage} className="scale-150" height={300} width={300}/>
          <div className='flex justify-start items-center gap-5 select-none'>
                <div className='rounded-3xl p-3 w-56 flex justify-center gap-1 items-center text-[#992E9D] bg-[#F9EBFC] font-semibold'><img src={star} />Official and Verified</div>
               <div className='rounded-3xl p-3 w-56 flex justify-center gap-1 items-center text-[#992E9D] bg-[#F9EBFC] font-semibold'><img src={star} />Enhances Credibility</div>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center bg-[#FFFCEA] p-9 rounded-3xl w-[90%] md:w-[600px]">
          <p className="w-96 self-start text-[#481900] text-2xl font-semibold">
          Bag Internship Opportunities!
          </p>
          <p className="text-[#686972] py-2">With every course, we make you not only industry-ready but also help you crack your first internship.</p>
          <img src={Internship} className="py-2" height={320} width={320}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Certificate;
