import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Prices = () => {
   return (
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

         <p className="text-xl lg:text-2xl py-4 text-slate-500 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
         </p>
         <div className="text-xl lg:text-3xl">
            <p className="flex py-4">
               <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ssds
               asdsd
            </p>
            <p className="flex py-4">
               <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ssds
               asdsd
            </p>
            <p className="flex py-4">
               <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ssds
               asdsd
            </p>
            <p className="flex py-4">
               <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ssds
               asdsd
            </p>
            <p className="flex py-4">
               <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ssds
               asdsd
            </p>
            <button className="w-full py-4 my-4">Get Started</button>
         </div>
      </div>
   );
};

export default Prices;
