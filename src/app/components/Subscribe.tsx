import React from 'react'
import { TextAnimate } from "@/components/ui/text-animate";

const Subscribe = () => {
  return (
    <div className="relative max-w-7xl mx-auto border-2 bg-green-700 md:py-14 py-5 z-[100] rounded-lg overflow-hidden">
    {/* Background Image with Opacity */}
    <img
      src="/shape-5.png"
      alt=""
      className="absolute inset-0 w-full h-full object-cover z-[99] opacity-20"
      style={{ filter: "brightness(0) saturate(100%) hue-rotate(120deg)" }}
    />
    {/* Content */}
    <div className="relative z-[100] text-white flex items-center justify-center h-full">
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full px-6">
       
        <TextAnimate animation="blurInUp" by="character"  className="md:text-4xl text-2xl font-semibold text-center mb-6 md:mb-0 md:text-left">
        Subscribe for the latest updates</TextAnimate>
        <div className="relative w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-8 py-4  pr-28  rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-black text-white font-semibold px-4 py-2 mr-4 rounded-full hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </div> 
    </div>
  </div>
  


  
  )
}

export default Subscribe
