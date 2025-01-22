'use client'
import React from "react";
import Cryptocard from "./Cryptocard";
import TypingAnimation from "@/components/ui/typing-animation";
import { TextAnimate } from "@/components/ui/text-animate";
 

const Cryptopage = () => {
    
  return (
    <div className="container mx-auto bg-green-50 md:py-32 my-8 px-3 ">
    <div className="max-w-7xl mx-auto ">
     
     
      <TextAnimate animation="blurInUp" by="character"   className="text-center md:text-5xl font-semibold text-2xl md:mb-14 mb-7 ">
      Comprehensive Guide to Trading Assets
                             </TextAnimate>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Cryptocard
          name={"Crypto Trading"}
          image={"/b1.svg"}
          description={
            "Crypto trading involves buying, selling, and exchanging cryptocurrencies to profit from price fluctuations in markets."
          }
        />
         <Cryptocard
          name={"Shares Trading"}
          image={"/td.svg"}
          description={
            "Crypto trading involves buying, selling, and exchanging cryptocurrencies to profit from price fluctuations in markets."
          }
        />
         <Cryptocard
          name={"Commodity Trading"}
          image={"/b3.svg"}
          description={
            "Crypto trading involves buying, selling, and exchanging cryptocurrencies to profit from price fluctuations in markets."
          }
        />
         <Cryptocard
          name={"Currency Trading"}
          image={"/b2.svg"}
          description={
            "Crypto trading involves buying, selling, and exchanging cryptocurrencies to profit from price fluctuations in markets."
          }
        />
         
      </div>
    </div>
    </div>
  );
};

export default Cryptopage;
