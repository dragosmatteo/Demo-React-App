import { useState, React } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
   const [nav, setNav] = useState(false);

   const navClick = () => setNav(!nav);

   const handleClose = () => setNav(!nav);

   return (
      <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
         <div className="px-2 flex mx-auto 2xl:w-[1340px] justify-between items-center h-full">
            <span className="text-2xl lg:text-3xl font-extrabold ml-2 md:ml-10">
               DRAGOS.
            </span>
            <ul className="hidden lg:flex">
               <li className="cursor-pointer">
                  <Link to="home" smooth={true} offset={-200} duration={500}>
                     Home
                  </Link>
               </li>
               <li className="cursor-pointer">
                  <Link to="hero" smooth={true} offset={-50} duration={500}>
                     Hero
                  </Link>
               </li>
               <li className="cursor-pointer">
                  <Link to="about" smooth={true} offset={-100} duration={500}>
                     Support
                  </Link>
               </li>
               <li className="cursor-pointer">
                  <Link to="prices" smooth={true} offset={-100} duration={500}>
                     Prices
                  </Link>
               </li>
               <li className="cursor-pointer">
                  <Link to="contact" smooth={true} offset={-50} duration={500}>
                     Contact
                  </Link>
               </li>
            </ul>
            <div className="hidden lg:flex pr-10">
               <button className="border-none bg-transparent text-black mr-4">
                  Sign in
               </button>
               <button className="px-8 py-3">Sign out</button>
            </div>

            <div className="lg:hidden" onClick={navClick}>
               {!nav ? (
                  <MenuIcon className="w-10" />
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
            <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
               <Link
                  onClick={handleClose}
                  to="home"
                  smooth={true}
                  offset={100}
                  duration={500}
               >
                  Home
               </Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
               {" "}
               <Link
                  onClick={handleClose}
                  to="hero"
                  smooth={true}
                  offset={100}
                  duration={500}
               >
                  Hero
               </Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
               {" "}
               <Link
                  onClick={handleClose}
                  to="about"
                  smooth={true}
                  offset={100}
                  duration={500}
               >
                  Support
               </Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
               {" "}
               <Link
                  onClick={handleClose}
                  to="prices"
                  smooth={true}
                  offset={100}
                  duration={500}
               >
                  Prices
               </Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
               <Link
                  onClick={handleClose}
                  to="contact"
                  smooth={true}
                  offset={-100}
                  duration={500}
               >
                  Contact
               </Link>
            </li>

            <div className="flex flex-col my-4 items-center">
               <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
                  Sign in
               </button>
               <button className="px-8 py-3">Sign out</button>
            </div>
         </ul>
      </div>
   );
};

export default NavBar;
