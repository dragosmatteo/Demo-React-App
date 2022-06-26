import React from "react";
import { Link } from "react-scroll";
const ListHeaderItem = (props) => {
   const { navClass, click, to, smooth, offset, duration, text } = props;
   return (
      <li className={navClass}>
         <Link
            click={click}
            to={to}
            smooth={smooth}
            offset={offset}
            duration={duration}
         >
            {text}
         </Link>
      </li>
   );
};

export default ListHeaderItem;
