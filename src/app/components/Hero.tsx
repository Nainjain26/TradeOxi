import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Buttons from "./Buttons";
import { TextAnimate } from "@/components/ui/text-animate";

const Hero = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="relative flex    overflow-hidden rounded-lg  bg-background  ">
        <p className="z-10  max-w-7xl mx-auto  md:py-20 py-12 ">
          <div className="md:grid grid-cols-2 gap-5 ">
            <div className="flex flex-col justify-center">
              <h1 className="md:text-5xl text-2xl font-semibold leading-tight">
                
                Don&apos;t Just Trade - Succeed with
                <span className="text-green-700">TRADEOXI</span>
              </h1>

              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-gray-800  md:text-xl my-4 font-medium"
              >
                We combine years of market expertise with cutting-edge analysis
                to deliver accurate Forex signals and profitable trading
                strategies.
              </TextAnimate>
              <TextAnimate
                animation="blurInUp"
                by="character"
               className="text-gray-800  md:text-xl font-medium"
              >
               Join TRADEOXI today and take the first step toward financial
               independence and trading success.
              </TextAnimate>

              
              <div className="pt-4">
                <Buttons name={"Create Account "} />
              </div>
            </div>

            <div>
              <img src="/hero2.svg" alt="" />
            </div>
          </div>
        </p>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
    </div>
  );
};

export default Hero;
