import React from "react";
import Globe from "@/components/ui/globe";
import { HiArrowSmRight } from "react-icons/hi";
import ContactForm from "../components/Form";
import Buttons from "../components/Buttons";
import { TextAnimate } from "@/components/ui/text-animate";

const features = [
    "There will be daily 2-4 Signals.",
"High level of accuracy on monthly basis.",
"In this service, the risk-to-reward ratio is 1:2.",
"All recommendations are based on technical analysis.",
"Support and resistance levels for all major traded metals are provided daily.",
"Updates on all major events and data impacting the currency market.",
"Comprehensive follow-ups on recommendations and open positions.",
"Receive daily and weekly newsletters with fundamental market reports.",
"Online assistance via WhatsApp, Telegram, IMO, and TeamViewer.,"
  ];
  

const page = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
        <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
        Premium Comex Plan
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
          Our Premium Comex Pack is specially designed for traders dealing in standard lots and requiring high targets. It contains high accuracy and significant targets to enable higher returns from the market.
          </h1>
          <h1 className="py-3">
          Our Signal Experts, keeping in mind the risks associated with the commodity market and the volatility of the market, equip traders and scalpers with trading signals and strategies.
          </h1>
          <h1>We offer quarterly, half-yearly, and yearly services, allowing traders to choose based on their needs and investment amount. We provide complete technical support for all our services.</h1>
         
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

            <p className="md:text-3xl text-xl font-semibold py-5">$ 1850</p>
          </div>
          <Buttons href="/Payment" name="Buy Now" />
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

            <p className="md:text-3xl text-xl font-semibold py-5">$ 3150</p>
          </div>
          <Buttons href="/Payment" name="Buy Now" />
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
            <p className="md:text-3xl text-xl font-semibold py-5">$ 5950</p>
          </div>
          <Buttons  href="/Payment" name="Buy Now" />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
