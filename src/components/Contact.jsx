import { React } from "react";

const Contact = () => {
   // const [name, setName] = useState("");
   // const [email, setEmail] = useState("");
   // const [text, setText] = useState("");

   // function handlerClick() {
   //    setName("");
   //    setEmail("");
   //    setText("");
   // }

   return (
      <div name="contact" className="w-full mx-auto">
         <div className="max-w-[1240px] mx-auto text-black px-2">
            <div className="flex flex-col text-center w-full bg-white text-slate-900 my-4 p-8 rounded-xl shadow-2xl">
               <h1 className="text-3xl sm:text-5xl font-black title-font mb-4 text-gray-900">
                  Contact Us
               </h1>
               <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify.
               </p>

               <form className="mx-auto">
                  <div className="flex flex-wrap -mx-6 mt-6">
                     <div className="p-2 w-full sm:w-1/2">
                        <div className="relative text-left">
                           <label
                              htmlFor="name"
                              className="leading-7 text-sm text-gray-600"
                           >
                              Name
                           </label>
                           <input
                              type="text"
                              id="name"
                              name="name"
                              // value={name}
                              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200"
                           />
                        </div>
                     </div>

                     <div className="p-2 w-full sm:w-1/2">
                        <div className="relative text-left">
                           <label
                              htmlFor="text"
                              className="leading-7 text-sm text-gray-600"
                           >
                              Email
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              // value={email}
                              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200"
                           />
                        </div>
                     </div>

                     <div className="p-2 w-full text-left">
                        <div className="relative">
                           <label
                              htmlFor="message"
                              className="leading-7 text-sm text-gray-600"
                           >
                              Message
                           </label>
                           <textarea
                              id="message"
                              name="message"
                              // value={text}
                              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-64 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                           ></textarea>
                        </div>
                     </div>
                     <div className="p-2 w-full">
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600/70 rounded text-lg">
                           Button
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;
