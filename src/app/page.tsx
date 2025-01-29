"use client"
// import Image from "next/image";
import Numbers from "./components/Numbers";
import Accounts from "./components/Accounts";
import Accrodions from "./components/Accrodions";

import Cryptopage from "./components/Cryptopage";
import Process from "./components/Process";
import Testimonals from "./components/Testimonals";
import Download from "./components/Download";
import Hero from "./components/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch('https://adminbackend-iypc.onrender.com/uploads');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const blogData = await response.json();
          console.log(blogData.images)
          
        } catch (err) {
          console.error('Error fetching data:', err);
        }
      };
  
      fetchBlogs();
    }, []);
  return (
<div>
    <Hero/>
    <Accrodions/>
     <Accounts/>
    <Numbers/>
    <Download/>
    <Process/>
    <Testimonals/>
    <Cryptopage/>
   
</div>
  );
}
