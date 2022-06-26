import React from "react";
import Trust from "./Trust";
import { v4 } from "uuid";

const Hero = () => {
   const trust = [
      {
         percent: "100%",
         text: "Completiton",
      },

      {
         percent: "24/7",
         text: "Delivery",
      },

      {
         percent: "100k",
         text: "Transactions",
      },
   ];

   return (
      <div name="hero" className="bg-white-200">
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
               {trust.map((item) => (
                  <Trust key={v4()} {...item} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Hero;
