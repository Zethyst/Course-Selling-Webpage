import React, { useEffect, useState } from "react";
import Image2  from '../assets/custom.png'
import Image from "../assets/LEARN.png";

function Working() {
  const [title1, setTitle1] = useState("");
  const [mobileView, setMobileView] = useState("");

  const updateTitles = () => {
    if (window.innerWidth > 768) {
      setTitle1("DATASCIENCE COURSE LEARNING PATH");
    } else {
      setTitle1("FULL STACK COURSE LEARNING PATH");
      setMobileView(true);
    }
  };

  useEffect(() => {
    updateTitles();

    window.addEventListener("resize", updateTitles);

    return () => {
      window.removeEventListener("resize", updateTitles);
    };
  }, []);
  return (
    <div className="p-12 md:p-32 flex flex-col gap-10 justify-center items-center">
      <p
        className="gradient3 text-center font-bold"
        style={{ fontSize: "40px" }}
      >
        How does the Internship Program works ?
      </p>

      {mobileView ? (<div className="flex flex-col relative justify-center items-center font-semibold">
        <div className="flex justify-center items-center gap-4 ">
            <div className="p-8 rounded-full flex justify-center items-center" style={{border:"1px solid black"}}><img src={Image2} style={{scale:"2.2"}}/></div><p>Learn from our structured pre recorded courses made by experts to meet industry needs</p>
        </div>
            <div  className={`h-16 p-2 self-start translate-x-9`} style={{borderLeft:"2px solid black"}}></div>
        <div className="flex gap-4 justify-center items-center">
            <div className="p-8 rounded-full flex justify-center items-center" style={{border:"1px solid black"}}><img src={Image2} style={{scale:"2.1"}}/></div><p>1:1 live doubt solving support available throughout the day to clear your doubts instantly </p>
        </div>
            <div  className={`h-16 p-2 self-start translate-x-9`} style={{borderLeft:"2px solid black"}}></div>
        <div className="flex gap-4 justify-center items-center">
            <div className="p-8 rounded-full flex justify-center items-center" style={{border:"1px solid black"}}><img src={Image2} style={{scale:"2.1"}}/></div><p>Personal mentors to guide and help you throughout your journey as a friend</p>
        </div>
            <div  className={`h-16 p-2 self-start translate-x-9`} style={{borderLeft:"2px solid black"}}></div>
        <div className="flex gap-4 justify-center items-center">
            <div className="p-8 rounded-full flex justify-center items-center" style={{border:"1px solid black"}}><img src={Image2} style={{scale:"1.6"}}/></div><p>Build major projects which makes your resume stand apart </p>
        </div>
            <div  className={`h-16 p-2 self-start translate-x-9`} style={{borderLeft:"2px solid black"}}></div>
        <div className="flex gap-4 justify-center items-center">
            <div className="p-8 rounded-full flex justify-center items-center" style={{border:"1px solid black"}}><img src={Image2} style={{scale:"3"}}/></div><p>Get guaranteed paid internships after completion of the program along with course completion certificates </p>
        </div>
           
      </div>) : <img src={Image} />}
      <button
        className="text-white p-3 w-56 rounded-2xl  translate-y-6 "
        style={{
          background:
            " linear-gradient(176.18deg, #800080 -2.53%, #7E267E 27.29%)",
        }}
      >
        Apply now for ₹ 2999
      </button>
    </div>
  );
}

export default Working;
