import React from "react";
import bgImg from "../assets/cyber-bg.png";

const Home = () => {
   return (
      <div
         name="home"
         className="w-full h-screen flex flex-col justify-between bg-zinc-200"
      >
         <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center ls:items-start px-2 py-8">
               <p className="font-3xl mt-5">Unique Sequencing & Production</p>
               <h1 className="py-3 text-5xl lg:text-7xl font-bold">
                  Cloud Management
               </h1>
               <p className="text-2xl">This is our Tech brand.</p>
               <button className="py-3 px-6 sm:w-[60%] my-4">
                  Get Started
               </button>
            </div>

            <div>
               <img className="w-full" src={bgImg} alt="/" />
            </div>
         </div>
      </div>
   );
};

export default Home;
