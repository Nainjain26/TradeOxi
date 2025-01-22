import React from 'react'
interface CryptocardProps {
    name: string;
    image :string,
    description:string
  }
  

const Cryptocard: React.FC<CryptocardProps> = (props) => {
  return (
    <div className="relative text-center  px-5 py-10 group rounded-lg shadow-lg bg-white ">
    <h1 className="font-semibold text-2xl">{props.name}</h1>
    <img
      src={props.image}
      alt="Crypto"
      className="transition-all duration-500 ease-in-out  group-hover:blur-md md:w-52 md:h-56 object-contain "
    />
  
    <div className="absolute inset-0 border-t-4 border-t-green-600 bg-green-100 bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
      <h1 className= 'text-gray-800 font-semibold'>
     {props.description}
      </h1>
    </div>
  </div>




  )
}

export default Cryptocard
