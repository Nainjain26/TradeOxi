'use client'
import React from "react";
import Cryptocard from "./Cryptocard";
// import TypingAnimation from "@/components/ui/typing-animation";
import { TextAnimate } from "@/components/ui/text-animate";
 

const Cryptopage = () => {
    
  return (
    <div className="container mx-auto bg-green-50 md:py-32 my-8 px-3 ">
    <div className="max-w-7xl mx-auto ">
     
     
      <TextAnimate animation="blurInUp" by="character"   className="text-center md:text-5xl font-semibold text-2xl md:mb-14 mb-7 ">
      Comprehensive Guide to Trading Assets </TextAnimate>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Cryptocard
          name={"Crypto Trading"}
          image={"/b1.svg"}
          description={
            "Crypto trading involves buying, selling, or exchanging cryptocurrencies like Bitcoin or Ethereum to profit from price fluctuations in digital markets."
          }
        /> 
         <Cryptocard
          name={"Shares Trading"}
          image={"/td.svg"}
          description={
            "Shares trading involves buying and selling company stocks on financial markets to profit from price changes or earn dividends."
          }
        />
         <Cryptocard
          name={"Commodity Trading"}
          image={"/b3.svg"}
          description={
            "Commodity trading involves buying and selling raw materials like gold, oil, or agricultural products, often linked to forex currency fluctuations."
          }
        />
         <Cryptocard
          name={"Currency Trading"}
          image={"/b2.svg"}
          description={
            "Currency trading, also known as forex trading, involves buying and selling currency pairs to profit from exchange rate fluctuations."
          }
        />
         
      </div>
    </div>
    </div>
  );
};

export default Cryptopage;
