import { useState, React } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ListHeaderItem from "./ListHeaderItem";
import { v4 } from "uuid";
import { Link } from "react-scroll";
import { HeaderLinksDesktop } from "../../data";
import { motion } from "framer-motion";

const NavBar = () => {
   const [nav, setNav] = useState(false);

   const navClick = () => setNav(!nav);

   const handleClose = () => setNav(!nav);

   return (
      <div className="w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg">
         <div className="px-2 flex mx-auto 2xl:w-[1340px] justify-between items-center h-full">
            <span className="text-2xl lg:text-3xl font-extrabold ml-2 md:ml-10">
               <Link
                  to="home"
                  smooth={true}
                  className="uppercase cursor-pointer"
               >
                  Dragos.
               </Link>
            </span>
            <ul className="hidden lg:flex">
               {HeaderLinksDesktop.map((item) => (
                  <ListHeaderItem key={v4()} {...item} onClick={handleClose} />
               ))}
            </ul>
            <div className="hidden lg:flex pr-10">
               <button className="border-none bg-transparent text-black mr-4">
                  Sign in
               </button>
               <motion.button
                  className="px-8 py-3"
                  whileHover={{ scale: 1.05 }}
               >
                  Sign out
               </motion.button>{" "}
            </div>

            <div className="lg:hidden" onClick={navClick}>
               {!nav ? (
                  <MenuIcon className="w-10 " />
               ) : (
                  <XIcon className="w-10" />
               )}
            </div>
         </div>

         <ul
            className={
               !nav ? "hidden" : "absolute bg-zinc-100 w-full px-8 text-center"
            }
         >
            {HeaderLinksDesktop.map((item) => (
               <ListHeaderItem key={v4()} {...item} onClick={handleClose} />
            ))}

            <div className="flex flex-col my-4 items-center">
               <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
                  Sign in
               </button>
               <motion.button
                  className="px-8 py-3"
                  whileHover={{ scale: 1.05 }}
               >
                  Sign out
               </motion.button>
            </div>
         </ul>
      </div>
   );
};

export default NavBar;
