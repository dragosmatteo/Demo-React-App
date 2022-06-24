import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

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
               <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                  <div className="flex">
                     <span className=" bg-indigo-200 px-3 py-1 uppercase text-indigo-900 rounded-2xl text-sm">
                        STANDARD
                     </span>
                  </div>
                  <div>
                     <p className="text-6xl font-bold py-4 flex">
                        40$
                        <span className="text-xl text-slate-500 flex flex-col justify-end">
                           /mo
                        </span>
                     </p>
                  </div>

                  <p className="text-2xl py-4 text-slate-500 text-left">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="text-2xl">
                     <p className="flex py-4">
                        <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem
                        ssds asdsd
                     </p>
                     <p className="flex py-4">
                        <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem
                        ssds asdsd
                     </p>
                     <p className="flex py-4">
                        <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem
                        ssds asdsd
                     </p>
                     <p className="flex py-4">
                        <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem
                        ssds asdsd
                     </p>
                     <p className="flex py-4">
                        <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem
                        ssds asdsd
                     </p>
                     <button className="w-full py-4 my-4">Get Started</button>
                  </div>
               </div>

               <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                  <div className="flex">
                     <span className=" bg-indigo-200 px-3 py-1 uppercase text-indigo-900 rounded-2xl text-sm">
                        STANDARD
                     </span>
                  </div>
                  <div>
                     <p className="text-6xl font-bold py-4 flex">
                        40$
                        <span className="text-xl text-slate-500 flex flex-col justify-end">
                           /mo
                        </span>
                     </p>
                  </div>

                  <p className="text-2xl py-4 text-slate-500 text-left">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="text-2xl">
                     <p className="flex py-4">
                        <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem
                        ssds asdsd
                     </p>
                     <p className="flex py-4">
                        <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem
                        ssds asdsd
                     </p>
                     <p className="flex py-4">
                        <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem
                        ssds asdsd
                     </p>
                     <p className="flex py-4">
                        <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem
                        ssds asdsd
                     </p>
                     <p className="flex py-4">
                        <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem
                        ssds asdsd
                     </p>
                     <button className="w-full py-4 my-4">Get Started</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Pricing;
