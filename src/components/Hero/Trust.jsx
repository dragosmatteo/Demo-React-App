import React from "react";

const Trust = (props) => {
   const { percent, text } = props;
   return (
      <div className="border py-8 rounded-xl shadow-xl">
         <p className="text-6xl font-bold text-indigo-600">{percent}</p>
         <p className="mt-2 text-gray-400">{text}</p>
      </div>
   );
};

export default Trust;
