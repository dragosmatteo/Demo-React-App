import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const Prices = () => {
   const fields = [];
   for (let i = 1; i <= 5; i++) {
      fields.push(
         <motion.div
            className="flex items-center"
            whileHover={{
               scale: 1.1,
               originX: 0,
               color: "rgb(49 46 129 )",
            }}
            transition={{ stype: "spring" }}
         >
            <CheckIcon className="w-8 py-4 mr-5 text-green-600" /> Lorem
            ssdsasdsd
         </motion.div>
      );
   }

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
            {fields}
            <motion.button
               className="w-full py-4 my-4"
               whileHover={{ scale: 1.01 }}
            >
               Get Started
            </motion.button>
         </div>
      </div>
   );
};

export default Prices;
