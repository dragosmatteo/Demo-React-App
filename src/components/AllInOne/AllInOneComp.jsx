import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const AllInOneComp = () => {
   return (
      <div className="flex">
         <div>
            <CheckIcon className="text-green-600 w-7 mr-4" />
         </div>
         <div>
            <h3 className="font-bold text-lg">Notifications</h3>
            <p className="text-lg pt-2 pb-4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Asperiores maxime deserunt voluptatibus consequatur similique
               voluptates!
            </p>
         </div>
      </div>
   );
};

export default AllInOneComp;
