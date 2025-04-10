import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
const WpButton = () => {
  return (
    <a
      href="https://wa.me/+447411532008"
     
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center max-w-28 p-2 rounded-xl cursor-pointer fixed bottom-6 right-6 z-[3500] bg-white border shadow-xl">
        <p className="mr-2 text-xl md:text-3xl text-green-600">
          {<IoLogoWhatsapp />}
        </p>
        <h1 className="text-gray-700">
          <span className="text-black font-semibold">Ask</span>
        </h1>
      </div>
    </a>
  );
};

export default WpButton;
