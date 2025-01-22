import React from 'react';

interface CardoverProps {
 heading: string;
 description:string;
 icon?: React.ReactNode;
}

const Cardover: React.FC<CardoverProps> = (props) =>{
  return (
    <div className="relative mt-10 group ">
      {/* Card Container */}
      <div className="  shadow-2xl bg-white  rounded-xl flex flex-col justify-center px-5 py-10">
        
        <p   className="text-xl font-semibold">
        {props.heading}
    </p>
        <p   className="pt-2 text-gray-500">
        {props.description}
    </p>
      </div>

      {/* Icon Container */}
      <div className="absolute top-[-32px] left-4">
        <div className="relative inline-block w-16 h-16 border border-gray-300 rounded-full overflow-hidden">
          {/* Icon */}
          <span className="flex items-center justify-center w-full h-full relative z-10 text-white transition-colors duration-700 ease-in-out group-hover:text-black">
            <div className="text-4xl">
             {props.icon}
            </div>
          </span> 

         {/* Background Transition */}
          <span className="absolute top-0 left-0 w-1/2 h-full bg-green-800 rounded-l-full transition-all duration-700 ease-in-out group-hover:w-0 group-hover:rounded-none"></span>
          <span className="absolute top-0 right-0 w-1/2 h-full bg-green-800 rounded-r-full transition-all duration-700 ease-in-out group-hover:w-0 group-hover:rounded-none"></span>
        </div>
      </div>
    </div>
  );
};

export default Cardover;
