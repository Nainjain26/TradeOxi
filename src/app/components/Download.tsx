import Link from 'next/link'
import React from 'react'
import { TextAnimate } from "@/components/ui/text-animate";


const Download = () => {
  return (
    <div className='container mx-auto md:my-20 my-6 px-3'>
    <div className="relative max-w-7xl mx-auto border-2 bg-gray-800 py-7 z-[100] rounded-3xl overflow-hidden">
    {/* Background Image with Opacity */}
    <img 
      src="/TF1.png" 
      alt="Background Image" 
      className="absolute inset-0 w-full h-full object-cover z-[99] opacity-40"
      style={{ filter: 'brightness(0.7)' }} 
    />
    {/* Content */}
    <div className="relative z-[100] text-white flex items-center justify-center h-full px-6">
      <div className="md:grid grid-cols-2 items-center w-full max-w-5xl gap-5 space-y-4 md:space-y-0">
      <div><p className="text-[#22823A] font-semibold border-2 w-fit px-3 bg-gray-100 rounded-2xl py-1 my-5">
           DOWNLOAD APP
          </p>
           <TextAnimate animation="blurInUp" by="character"   className='md:text-4xl text-2xl font-semibold mb-2'>
           Download Trading APP
                                                 </TextAnimate>
       
        <p>We use cookies to understand how you use our website and to give you the best possible experience.</p>
       <div className='flex gap-4'> <button className='border p-3 rounded-lg bg-black hover:bg-green-900 inline-flex items-center mt-5 text-white font-semibold w-auto'>
      <img src="/google_play.svg" alt="" className='pr-2 object-contain' />
      <h1 className='md:text-lg text-sm'>
        <Link href={"https://play.google.com/store/search?q=mobile+trader+roboforex&c=apps&hl=en"}>Google play</Link>
      </h1>
    </button>
    <button className='border p-3 rounded-lg bg-black hover:bg-green-900 inline-flex items-center mt-5 text-white font-semibold w-auto'>
      <img src="/app_store.png" alt="" className='pr-2 object-contain' />
      <h1 className='md:text-lg text-sm'>
        <Link href={"https://apps.apple.com/in/app/mobiletrader-fx-trading-online/id1137639247"}>Apple Store</Link>
      </h1>
    </button>
        </div>
        </div>

        <div>
          <img src="/mockup.svg" alt="" className='md:w-[800px] md:h-[600px] h-[300px] w-[400px]' />
        </div>
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default Download
