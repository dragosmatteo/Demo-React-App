import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

const AboutText = (props) => {
   const { title, description } = props;
   return (
      <div className="bg-white rounded-xl shadow-2xl">
         <div className="m-8">
            <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
            <h3 className="text-black font-bold text-2xl my-6">{title}</h3>
            <p className="text-gray-600 text-xl">{description}</p>
         </div>
         <div className="bg-slate-100 pl-9 py-4">
            <p className="flex flex-center text-indigo-600 cursor-pointer">
               <Link smooth={true} to="contact" className="flex" offset={-100}>
                  contact Us <ArrowSmRightIcon className="w-5 ml-2" />
               </Link>
            </p>
         </div>
      </div>
   );
};

export default AboutText;
