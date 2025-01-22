import React from 'react'
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

import { TextAnimate } from "@/components/ui/text-animate";


const reviews = [
  {
    name: "Ishita M.",
    username: "@ishita",
    body: "Reliable platform and accurate signals helped me double my Forex profits in just months.",
    img: "/a6.jpg",
  },
  {
    name: "Aakash H.",
    username: "@aakash",
    body: "Beginner-friendly tools and support made Forex trading easy and profitable right from the start",
    img: "/a1.jpg",
  },
  {
    name: "Priya S.",
    username: "@priya",
    body: "Learned profitable strategies while earning; the best platform for anyone new to Forex trading.",
    img: "/a3.jpg",
  },
  {
    name: "Vikram P.",
    username: "@vikram",
    body: "Beginner-friendly platform helped me succeed in Forex trading quickly",
    img: "/a2.jpg",
  },
  {
    name: "Arjun R.",
    username: "@arjun",
    body: "Supportive tools made Forex trading simple and consistently profitable",
    img: "/a4.jpg",
  },
  {
    name: "Ritika W.",
    username: "@ritika",
    body: "Customer support was fantastic; now Forex is my main source of income.",
    img: "/a5.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function  Testimonals() {
  return (
  <div className='container mx-auto md:py-32 py-7 '>
    <div className="text-center flex flex-col justify-center items-center">
            <p className="text-[#22823A] font-semibold border-2 w-fit px-3  bg-gray-100 rounded-2xl py-1">
              TESTIMONALS
            </p>
             <TextAnimate animation="blurInUp" by="character"   className="text-center md:text-5xl font-semibold text-2xl mt-3 md:mb-14 mb-7 ">
             Love from Users
                        </TextAnimate>
            
    
           
            
          </div>
    <div className="relative max-w-7xl mx-auto flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r  dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l  dark:from-background"></div>
    </div>
    </div>
  );
}
export default  Testimonals;
