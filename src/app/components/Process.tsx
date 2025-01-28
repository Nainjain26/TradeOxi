import React from "react";
import Cardchange from "./Cardchange";

import { TextAnimate } from "@/components/ui/text-animate";

const Process = () => {
  return (
    <div className="container mx-auto md:py-12 bg-green-50  py-5 ">
      <div className="text-center flex flex-col justify-center items-center">
        <p className="text-[#22823A] font-semibold border-2 w-fit px-3  bg-gray-100 rounded-2xl py-1">
          THE PROCESS
        </p>
        <TextAnimate animation="blurInUp" by="character"   className="text-center md:text-5xl font-semibold text-2xl mt-3 md:mb-14 mb-7 ">
        How It Works
         </TextAnimate>

      </div>
      <div className="md:grid grid-cols-2 gap-10  max-w-7xl mx-auto px-3">
        {/* left */}
        <div>
          <Cardchange
            heading={"1. Sign up, It's Free!"}
            description={
              "Our team will set up your account and help you build job to easy-to-use web dashboard."
            }
          />
          <div className="my-3">
            <Cardchange
              heading={"2. Find best Deals and Invest"}
              description={
                "Create and Trade anywhere from 1-100% openings with just a few clicks. customize your own."
              }
            />
          </div>
          <Cardchange
            heading={"3. Get you profit back"}
            description={
              "View market, reviews, and rosters before forex arrive on the site, and post reviews and pay, effortlessly."
            }
          />
        </div>
        {/* right */}
        <div className=" flex justify-center ">
        <video
            src="/mobilev.mp4"
            autoPlay
            loop
            muted
            className="w-full md:h-[430px] h-auto object-cover rounded-lg mt-5 sm:mt-0 "
          >
            Your browser does not support the video tag.
          </video>
          {/* <img src="/f3.jpg" alt="" className="md:w-[450px] md:h-[450px] object-cover rounded-2xl " /> */}
        </div>
      </div>
    </div>
  );
};

export default Process;
