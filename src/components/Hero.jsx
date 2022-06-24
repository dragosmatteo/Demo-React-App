import React from "react";

const Hero = () => {
   return (
      <div name="hero" className="bg-white">
         <div className=" max-w-[1240px] mx-auto py-24">
            <div className="flex flex-col text-center w-full mb-20">
               <h1 className="text-2xl md:text-5xl font-bold mb-4 text-gray-900">
                  Trusted by developers across the world
               </h1>
               <p className="text-3xl text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-1 px-2 text-center">
               <div className="border py-8 rounded-xl shadow-xl">
                  <p className="text-6xl font-bold text-indigo-600">100%</p>
                  <p className="mt-2 text-gray-400">Completiton</p>
               </div>

               <div className="border py-8 rounded-xl shadow-xl">
                  <p className="text-6xl font-bold text-indigo-600">24/7</p>
                  <p className="mt-2 text-gray-400">Delivery</p>
               </div>

               <div className="border py-8 rounded-xl shadow-xl">
                  <p className="text-6xl font-bold text-indigo-600">100k</p>
                  <p className="mt-2 text-gray-400">Transactions</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
