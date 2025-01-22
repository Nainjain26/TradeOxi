import React from "react";
import NumberTicker from "@/components/ui/number-ticker";

import { TextAnimate } from "@/components/ui/text-animate";


const Numbers = () => {
  return (
    <div className="container max-w-7xl mx-auto md:my-40 my-10 px-3">
 
 <TextAnimate animation="blurInUp" by="character"  className="text-center md:text-5xl font-semibold text-2xl mb-14 ">
 Global Impact and Achievements
    </TextAnimate>
      <div className="md:grid grid-cols-3 gap-5">
        <div className="border border-green-400 py-12 px-10 rounded-lg bg-green-50 mt-5">
          <p className="whitespace-pre-wrap text-5xl font-semibold  text-green-700 dark:text-white">
            <NumberTicker value={100} />+{" "}
            <span className="text-2xl">Countries</span>
          </p>
          <p className="text-xl text-gray-600 pt-3 ">Trade policies and agreements shape the trading landscape of countries</p>
        </div>
        <div className="border border-green-400 py-12 px-10 rounded-lg bg-green-50 mt-5">
          <p className="whitespace-pre-wrap text-5xl font-semibold  text-green-700 dark:text-white ">
            <NumberTicker value={40} />+{" "}
            <span className="text-2xl">Million Invest</span>
          </p>
          <p className="text-xl text-gray-600 pt-3 ">Investing a million dollars in trading represents a significant opportunity and</p>
        </div>
        <div className="border border-green-400 py-12 px-10 rounded-lg bg-green-50 mt-5">
          <p className="whitespace-pre-wrap text-5xl font-semibold  text-green-700 dark:text-white">
            <NumberTicker value={90} />+{" "}
            <span className="text-2xl">Awards</span>
          </p>
          <p className="text-xl text-gray-600 pt-3 ">Trading awards recognize excellence and achievement within the financial</p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
