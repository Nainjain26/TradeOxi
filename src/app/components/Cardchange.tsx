import React from 'react'
interface CardchangeProps {
    heading: string;
    description:string;
   
   }
const Cardchange: React.FC<CardchangeProps> = (props) => {
  return (
    
      <div className="flex justify-center items-center  bg-white">
      <div className="relative inline-block px-8 py-5 border border-gray-300 rounded-lg font-medium text-lg overflow-hidden group">
        {/* Card Content */}
        <div className="relative z-10 transition-colors duration-1000 ease-in-out group-hover:text-black text-white">
          <h2 className="text-2xl font-bold">{props.heading}</h2>
          <p className="mt-2 md:text-lg ">
          {props.description}
          </p>
        </div>

        {/* Card Background */}
        <span className="absolute top-0 left-0 w-1/2 h-full bg-green-700 rounded-l-lg transition-all duration-1000 ease-in-out group-hover:w-0 group-hover:rounded-none"></span>
        <span className="absolute top-0 right-0 w-1/2 h-full bg-green-700 rounded-r-lg transition-all duration-1000 ease-in-out group-hover:w-0 group-hover:rounded-none"></span>
       </div>
    </div>
  )
}

export default Cardchange;
