import React from "react";
import AllInOneComp from "./AllInOneComp";

export const AllInOne = () => {
   const fields = [];
   for (let i = 1; i <= 12; i++) {
      fields.push(<AllInOneComp id={i} key={i} />);
   }
   return (
      <div className="w-full my-24">
         <div className="max-w-[1240px] mx-auto text-black px-2">
            <h1 className="text-center text-5xl font-black">
               All-In-One Platform
            </h1>
            <p className="text-gray-600 text-xl lg:text-2xl py-6 text-center">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Veritatis, ab. Officia sunt nulla aspernatur culpa, eaque tenetur
               excepturi nostrum tempore.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
               {fields}
            </div>
         </div>
      </div>
   );
};
