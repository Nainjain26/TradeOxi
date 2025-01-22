import React from "react";
interface CardProps {
  heading: string;
  description:string
  button:string
 }
 
const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="flex justify-center items-center  bg-white">
      <div className="relative inline-block px-5 py-5 border border-gray-300 rounded-lg font-medium text-lg overflow-hidden group w-[300px]">
        {/* Card Content */}
        <div className="relative z-10 transition-colors duration-[600ms] ease-in-out group-hover:text-black text-white text-center">
          <h2 className="text-2xl font-bold">{props.heading}</h2>
          <p className="mt-2 text-sm">
          {props.description}
          </p>
        </div>

        {/* Card Background */}
        <span className="absolute top-0 left-0 w-1/2 h-full bg-green-700 rounded-l-lg transition-all duration-[600ms] ease-in-out group-hover:w-0 group-hover:rounded-none"></span>
        <span className="absolute top-0 right-0 w-1/2 h-full bg-green-700 rounded-r-lg transition-all duration-[600ms] ease-in-out group-hover:w-0 group-hover:rounded-none"></span>

        {/* Button Container */}
        <div className="flex justify-center mt-4">
          {/* Button */}
          <button className="relative inline-block px-5 py-2.5 border border-gray-300 rounded-full font-medium text-lg overflow-hidden group ">
            {/* Button Text */}
            <span className="relative z-10 transition-colors duration-[600ms] ease-in-out text-green-700 group-hover:text-white ">
             {props.button}
            </span>

            {/* Button Background */}
            <span className="absolute top-0 left-0 w-1/2 h-full bg-white rounded-l-full transition-all duration-[600ms] ease-in-out group-hover:bg-green-700 group-hover:rounded-none"></span>
            <span className="absolute top-0 right-0 w-1/2 h-full bg-white rounded-r-full transition-all duration-[600ms] ease-in-out group-hover:bg-green-700 group-hover:rounded-none"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
