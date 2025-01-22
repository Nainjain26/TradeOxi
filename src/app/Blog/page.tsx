import BlogCard from '@/app/components/BlogSmallCard'
import React from 'react'
import data from '../data'
import Globe from "@/components/ui/globe";


const index = () => {
  

  return (
    <div className='container mx-auto '>
      
          <div className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
                <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
                BLOGS
                </span>
                <Globe className="top-16 " />
                <div className="pointer-events-none absolute inset-0 h-full " />
              </div>
      <div className="  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full  sm:w-auto pt-5">

        {data.map((items,index)=>(
          <BlogCard key={index} image={items.image} title={items.title} description={items.description} href={index}/>
        ))}
       
      </div>

      </div>
  )
}

export default index
