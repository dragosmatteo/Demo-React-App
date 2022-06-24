import React from "react";
import support from "../assets/support.jpg";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import { AllInOne } from "./AllInOne";

const About = () => {
   return (
      <>
         <div name="about" className="w-full mt-24">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
               <img
                  className="w-full h-full object-cover mix-blend-overlay"
                  src={support}
                  alt=""
               />
            </div>
            <div className="max-w-[1240px] mx-auto text-white relative">
               <h3 className="text-3xl pt-16 text-slate-300 uppercase text-center">
                  Support
               </h3>
               <h1 className=" text-2xl sm:text-5xl font-bold py-6 text-center">
                  Finding the right team
               </h1>
               <p className="py-4 px-4 text-lg lg:text-2xl text-slate-300 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  repudiandae veritatis ratione error tenetur, voluptates
                  architecto possimus ad! Omnis minima ea quidem quisquam unde
                  beatae, minus illo et cum vel? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Neque modi repellendus omnis
                  beatae accusamus minus dolore velit vitae molestias
                  temporibus. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Quibusdam porro culpa commodi nobis
                  reiciendis suscipit sapiente doloremque nisi impedit?
               </p>

               <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                  <div className="bg-white rounded-xl shadow-2xl">
                     <div className="m-8">
                        <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                        <h3 className="text-black font-bold text-2xl my-6">
                           Sales
                        </h3>
                        <p className="text-gray-600 text-xl">
                           {" "}
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Excepturi provident iure placeat blanditiis ea
                           sint earum hic iste quibusdam exercitationem.
                        </p>
                     </div>
                     <div className="bg-slate-100 pl-9 py-4">
                        <p className="flex flex-center text-indigo-600">
                           contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                        </p>
                     </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-2xl">
                     <div className="m-8">
                        <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                        <h3 className="text-black font-bold text-2xl my-6">
                           Sales
                        </h3>
                        <p className="text-gray-600 text-xl">
                           {" "}
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Excepturi provident iure placeat blanditiis ea
                           sint earum hic iste quibusdam exercitationem.
                        </p>
                     </div>
                     <div className="bg-slate-100 pl-9 py-4">
                        <p className="flex flex-center text-indigo-600">
                           contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                        </p>
                     </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-2xl">
                     <div className="m-8">
                        <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                        <h3 className="text-black font-bold text-2xl my-6">
                           Sales
                        </h3>
                        <p className="text-gray-600 text-xl">
                           {" "}
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Excepturi provident iure placeat blanditiis ea
                           sint earum hic iste quibusdam exercitationem.
                        </p>
                     </div>
                     <div className="bg-slate-100 pl-9 py-4">
                        <p className="flex flex-center text-indigo-600">
                           contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <AllInOne />
      </>
   );
};

export default About;
