import React from "react";
import support from "../../assets/support.jpg";
import AboutText from "./AboutText";
import { AllInOne } from "../AllInOne/AllInOne";
import { v4 } from "uuid";

const About = () => {
   const text = [
      {
         title: "Sales",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus qui sequi vitae a ducimus illum, dolorem rem pariatur dolore! ",
      },
      {
         title: "Sales",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus qui sequi vitae a ducimus illum, dolorem rem pariatur dolore! ",
      },
      {
         title: "Sales",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus qui sequi vitae a ducimus illum, dolorem rem pariatur dolore! ",
      },
   ];

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
               <h3 className="text-3xl pt-10 text-slate-300 uppercase text-center">
                  About
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
                  {text.map((items) => (
                     <AboutText key={v4()} {...items} />
                  ))}
               </div>
            </div>
         </div>

         <AllInOne />
      </>
   );
};

export default About;
