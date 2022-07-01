import React from "react";
import bgImg from "../assets/cyber-bg.png";
import { motion } from "framer-motion";
const Home = () => {
   const animations = {
      hidden: {
         opacity: 0,
      },

      reveal: {
         opacity: 1,
         duration: 1.5,
      },
   };

   return (
      <div
         name="home"
         className="w-full h-screen flex flex-col justify-between bg-white"
      >
         <motion.div
            className="grid md:grid-cols-2 max-w-[1240px] m-auto"
            variants={animations}
            initial="hidden"
            animate="reveal"
            transition={{ delay: 1, type: "spring", stiffness: 120 }}
         >
            <div className="flex flex-col justify-center ls:items-start px-2 py-8">
               <p className="font-3xl mt-5">Unique Sequencing & Production</p>
               <h1 className="py-3 text-5xl lg:text-7xl font-bold">
                  Cloud Management
               </h1>
               <p className="text-2xl">This is our Tech brand.</p>
               <motion.button
                  className="py-3 px-6 sm:w-[60%] my-4"
                  whileHover={{ scale: 1.1 }}
               >
                  Get Started
               </motion.button>
            </div>

            <div>
               <img className="w-full" src={bgImg} alt="/" />
            </div>
         </motion.div>
      </div>
   );
};

export default Home;
