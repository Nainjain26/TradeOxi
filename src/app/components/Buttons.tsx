import Link from "next/link";
import React from "react";
// import Link from "next/link";
interface ButtonsProps {
  name: string,
  href:string
}

const Buttons: React.FC<ButtonsProps> = (props) => {
  return (
    <Link href={props.href}>
      <button className="relative inline-block px-5 py-2.5 border bg-black  border-gray-300 rounded-full font-medium text-lg overflow-hidden group">
        <span className="relative z-10 transition-colors duration-700 ease-in-out  font-semibold  text-white">
         {props.name}
        </span>
        <span className="absolute top-0 left-0 w-1/2 h-full bg-green-600 rounded-l-full transition-all duration-700 ease-in-out group-hover:w-0   group-hover:rounded-none"></span>
        <span className="absolute top-0 right-0 w-1/2 h-full bg-green-600 rounded-r-full transition-all duration-700 ease-in-out group-hover:w-0   group-hover:rounded-none"></span>
      </button>
    </Link>
  );
};

export default Buttons;
