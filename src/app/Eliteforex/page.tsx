import React from "react";
import Globe from "@/components/ui/globe";
import { HiArrowSmRight } from "react-icons/hi";
import ContactForm from "../components/Form";
import Buttons from "../components/Buttons";
import { TextAnimate } from "@/components/ui/text-animate";

const features = [
 "There will be 1 signal provided daily.",
"Maintain a high level of accuracy on a monthly basis.",
"The Risk-to-Reward ratio is 1:1.",
"All recommendations will be accompanied by a single target and stop-loss.",
"Daily support and resistance levels for all major traded metals.",
"Updates on all major events and data impacting the currency market.",
"Comprehensive follow-ups on recommendations and open positions.",
"Receive daily and weekly newsletters with fundamental market reports.",
"Online assistance available via WhatsApp, Telegram, Skype, IMO, and TeamViewer."
  ];

const page = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
        <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
        Elite Comex Plan
        </span>
        <Globe className="top-16 " />
        <div className="pointer-events-none absolute inset-0 h-full " />
      </div>

      <div className="md:grid grid-cols-2 max-w-7xl mx-auto py-10 gap-5">
        <div>
          <img src="/bf1.svg" alt="" className="" />
        </div>
        <div className="text-gray-700 leading-8 ">
       

          <h1>
          The “Elite Pack” is designed for investors who trade with large investment amounts and seek higher profits on a daily or weekly basis. This service maintains a high level of accuracy in each call, enabling traders to maximize returns on their investments.
          </h1>
          <h1 className="py-3">
          Compared to the Basic Pack and Premium Pack, we provide the highest targets in the Elite Pack. Real-time trade support and market charts are provided, and our analysts are always available to manage funds effectively.
          </h1>
          <h1>Our experts utilize various technical indicators and studies to predict live market trends, ensuring maximum returns on investment. We offer quarterly, half-yearly, and yearly services, allowing traders to choose according to their needs and investment amounts. Complete technical support is provided for all our services.</h1>
          
         
        </div>
      </div>
      {/* 2nd */}
      <div className="md:grid grid-cols-2 max-w-7xl mx-auto gap-5 py-10  ">
      <div className="text-gray-800 flex flex-col justify-center relative z-[2]">
      <img
        src="/bf2.jpg"
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-[1]"
      />
      {features.map((feature, index) => (
        <p key={index} className={`flex items-center ${index % 2 !== 0 ? "py-4" : ""}`}>
          <span className="text-2xl text-green-600 border rounded-full mr-3">
            <HiArrowSmRight />
          </span>
          {feature}
        </p>
      ))}
    </div>

        <div>  
          <ContactForm />
        </div>
      </div>
      {/* 3rd */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto gap-5 md:mb-20 mb-5">
        <div className="shadow-lg border rounded-lg md:py-5 md:px-10 p-5 bg-green-50 ">
          <div>
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="md:text-4xl text-2xl font-bold"
            >
              Quarterly
            </TextAnimate>

            <p className="md:text-3xl text-xl font-semibold py-5">$ 2650</p>
          </div>
          <Buttons name="Buy Now" />
        </div>
        <div className="shadow-lg border rounded-lg md:py-5 md:px-10 p-5 bg-green-50">
          <div>
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="md:text-4xl text-2xl font-bold"
            >
              Half Yearly
            </TextAnimate>

            <p className="md:text-3xl text-xl font-semibold py-5">$ 4450</p>
          </div>
          <Buttons name="Buy Now" />
        </div>
        <div className="shadow-lg border rounded-lg md:py-5 md:px-10 p-5 bg-green-50 ">
          <div>
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="md:text-4xl text-2xl font-bold"
            >
              Yearly
            </TextAnimate>
            <p className="md:text-3xl text-xl font-semibold py-5">$ 7550</p>
          </div>
          <Buttons name="Buy Now" />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
