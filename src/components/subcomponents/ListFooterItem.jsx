import React from "react";

export default function ListItem(props) {
   const { tailwindClass, url, text } = props;
   return (
      <li className={tailwindClass}>
         <a href={url}>{text}</a>
      </li>
   );
}
