import React from "react";
import Prices from "./Prices";
const Pricing = () => {
   return (
      <div name="prices" className="w-full mt-24 mb-20">
         <div className="w-full h-[700px] bg-slate-900 absolute mix-blend-overlay"></div>

         <div className="max-w-[1240px] mx-auto py-8 text-slate-300 text-center relative">
            <h3 className="text-3xl text-gray-100 uppercase">PRICING</h3>
            <h1 className="text-white text-3xl lg:text-5xl font-black pt-4">
               The right price for your research.
            </h1>
            <p className="py-6 px-4 text-lg lg:text-2xl text-slate-300 text-center">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. In
               repudiandae veritatis ratione error tenetur, voluptates
               architecto possimus
            </p>

            <div className="grid lg:grid-cols-2">
               <Prices />
               <Prices />
            </div>
         </div>
      </div>
   );
};

export default Pricing;
