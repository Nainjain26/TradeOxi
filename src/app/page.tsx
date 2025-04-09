"use client"
// import Image from "next/image";
import { useEffect, useState } from "react";
import Numbers from "./components/Numbers";
import Accounts from "./components/Accounts";
import Accrodions from "./components/Accrodions";

import Cryptopage from "./components/Cryptopage";
import Process from "./components/Process";
import Testimonals from "./components/Testimonals";
import Download from "./components/Download";
import Hero from "./components/Hero";

import PopupForm from "./components/ContactFormModal";
// import ContactFormModal from "./components/ContactFormModal";

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);

  // Check sessionStorage and show popup if it hasn’t been seen this session
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  // Handle popup close and mark it as seen in sessionStorage
  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("hasSeenPopup", "true");
  };

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
    {showPopup && <PopupForm onClose={handleClosePopup} />}
</div>
  );
}
