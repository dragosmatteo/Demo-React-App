import React from "react";
import {
   FaFacebook,
   FaGithub,
   FaInstagram,
   FaTwitter,
   FaTwitch,
} from "react-icons/fa";
import ListFooterItem from "./ListFooterItem";
import { v4 } from "uuid";
import { menuItems } from "../../data";
import { motion } from "framer-motion";

const Footer = () => {
   return (
      <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
         <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
            <div>
               <h6 className="font-bold uppercase pt-2 pl-3">Solutions</h6>

               <ul>
                  {menuItems.map((item) => (
                     <ListFooterItem key={v4()} {...item} />
                  ))}
               </ul>
            </div>

            <div>
               <h6 className="font-bold uppercase pt-2 pl-3">Solutions</h6>

               <ul>
                  {menuItems.map((item) => (
                     <ListFooterItem key={v4()} {...item} />
                  ))}
               </ul>
            </div>

            <div>
               <h6 className="font-bold uppercase pt-2 pl-3">Solutions</h6>

               <ul>
                  {menuItems.map((item) => (
                     <ListFooterItem key={v4()} {...item} />
                  ))}
               </ul>
            </div>

            <div>
               <h6 className="font-bold uppercase pt-2 pl-3">Solutions</h6>
               <ul>
                  {menuItems.map((item, index) => (
                     <ListFooterItem key={index} {...item} />
                  ))}
               </ul>
            </div>

            <div className="col-span-2 pt-8 md:pt-2">
               <p className="font-bold uppercase">
                  Subscribe to our newsletter
               </p>
               <p className="py-4">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
               </p>

               <form className="flex flex-col sm:flex-row">
                  <input
                     className="w-full p-2 mr-4 rounded-md mb-4 text-black outline-none"
                     type="email"
                     placeholder="Enter mail..."
                  />
                  <motion.button
                     className="p-2 mb-4"
                     whileHover={{ scale: 1.1 }}
                  >
                     subscribe
                  </motion.button>
               </form>
            </div>
         </div>

         <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
            <p className="py-4">2022 Dragos Matteo SRL</p>
            <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
               <FaFacebook className="hover:text-white cursor-pointer " />
               <FaInstagram className="hover:text-white cursor-pointer " />
               <FaTwitter className="hover:text-white cursor-pointer " />
               <FaTwitch className="hover:text-white cursor-pointer " />
               <FaGithub className="hover:text-white cursor-pointer " />
            </div>
         </div>
      </div>
   );
};

export default Footer;
