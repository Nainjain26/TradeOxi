import React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Subscribe from "../components/Subscribe";
import Globe from "@/components/ui/globe";
import Cardover from "../components/Cardover";
import { FaLeaf } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { FaFlag } from "react-icons/fa";
import { TextAnimate } from "@/components/ui/text-animate";



const page = () => {
  return (
    <div className="container mx-auto px-3 ">
      <div className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
        <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
          About Us
          
        </span>
        <Globe className="top-16 "/>
        <div className="pointer-events-none absolute inset-0 h-full " />
      </div>
      {/* top */}
    
     <div className="md:grid grid-cols-2 max-w-7xl mx-auto md:py-20 py-8  ">
       <div className="flex flex-col justify-center  ">
      
         <TextAnimate animation="blurInUp" by="character"  className="text-gray-700 md:text-xl">
         - Our Vision, Great Business</TextAnimate>
        <h1 className="md:text-6xl text-3xl font-semibold my-3">Trade-Oxi
       <span className="text-green-700"> Story</span> </h1>
       
       <TextAnimate animation="blurInUp" by="character" className="text-gray-700 md:text-xl leading-8">
       TradeOxi is a Financial Research and Analytics Company, who have more than 5 years of establishment experience, providing customer support to many of our satisfied subscribers across the globe.</TextAnimate>
       </div>
       <div>
        <img src="/team.svg" alt=""/>
       </div>
     </div>
      
      {/* 2nd */}
      <div className="relative md:grid grid-cols-3 max-w-7xl mx-auto md:py-32 py-8 gap-10 my-10  bg-white rounded-lg overflow-hidden">
  {/* Background Image */}
  <img
    src="/f3.jpg"
    alt="Decorative background"
    className="absolute inset-0 w-full h-full object-cover opacity-30 z-[1]"
  />
  
  {/* Content */}
  <div className="relative z-[2]">
    <img
      src="/gr.jpg"
      alt="Company Image"
      className="md:w-[500px] md:h-[400px] object-cover rounded-tr-[75px] rounded-bl-[75px]"
    />
  </div>

  <div className="relative z-[2]">
    <h1 className="text-gray-800 leading-7">
      We are a team of professionals of market experts with years of experience in the financial markets. We scan the
      markets 24/5 every single day. We decided to build our company to help retail Forex, Comex and Indices traders,
      make continuous profit every month using our expertise. TRADEOXI is registered in the India and all of our traders
      are located round the Globe. We went from too well to be true and lots of skepticism to a well-known brand that has
      revolutionized the trading world and redefined trading in the FX industry – and there are plenty of innovative
      developments ahead!
    </h1>
    <h1 className="pt-3 text-gray-800 leading-7">
      Our professional traders analyze the market every day. Members are notified via Message, WhatsApp or Email every
      time we take a trade.
    </h1>
  </div>

  <div className="relative z-[2]">
    <h1 className="text-gray-800 leading-7">
      Our members get 3-5 top quality signals every day. Our members get support with any of their queries 24/5. Our
      target is achieving consistent pips every week so that our clients can profit regardless of their account size. We
      have an unbeatable
    </h1>
    <h1 className="text-gray-800 pt-3 leading-7">
      Accuracy rate of more than 85%. We help all our members with their money management. TRADEOXI is reputed for its
      consistent results. We can help you in many aspects like:
    </h1>
    <p className="text-gray-800 pt-3 leading-7">1. How to Get Started & Make Cool Profits using Forex?</p>
    <p className="text-gray-800 pt-2 leading-7">2. What Psychology You Must Apply to Trade Profitably?</p>
    <p className="text-gray-800 pt-2 leading-7">3. How to trade in forex like a professional from day one?</p>
  </div>
</div>


      <div className=" md:py-20 py-7 bg-green-50">
        <div className="text-center max-w-4xl mx-auto ">
          <h1 className="md:text-4xl text-2xl font-semibold ">
            Putting Forex Traders First{" "}
            <span className="text-green-700">Since 2014.</span>
          </h1>
          <p className="md:text-xl text-gray-700 leading-7  pt-3">
            For over three decades, we’ve been empowering Forex traders by
            assisting them in taking control of their financial destinies.
          </p>
        </div>

        <div className="md:grid max-w-7xl mx-auto grid-cols-3 gap-10 mt-5  ">
          <Cardover
            heading={"Philosophy"}
            description={
              "Explore our comprehensive signal services tailored for Forex and Comex markets, designed to optimize your trading strategy and maximize profitability with precision insights and expert analysis."
            }
            icon={<FaLeaf/>}
          />
          <Cardover
            heading={"Mastering Forex"}
            description={
              "Master the intricacies of Forex, Comex, and Crypto trading with our comprehensive educational resources. From basics to advanced strategies, empower yourself for success in the financial markets."
            }
            icon={<GiSandsOfTime/>}
          />
          <Cardover
            heading={"MarketPrecision"}
            description={
              "Explore Crypto, Spot, and Futures: Navigate the volatile yet lucrative markets with precision. Gain insights, seize opportunities, and maximize profits with our expert trading solutions and advanced tools."
            }
            icon={<FaFlag/>}
          />
        </div>
      </div>

      {/* <div className=" md:pt-32 bg-green-50 pt-5">
        <div className=" md:grid grid-cols-2 gap-10 max-w-7xl mx-auto">
          <div className="">
            <p className="text-[#22823A] font-semibold border-2 w-fit px-3 bg-gray-100 rounded-2xl py-1 mb-5">
              ABOUT US
            </p>
            <h1 className=" text-2xl md:text-5xl font-bold mb-10">
              Our reputation is built on{" "}
              <span className="text-green-700">Experience</span>{" "}
            </h1>
            <div>
              <Accordion defaultExpanded className="mb-5">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span" className="font-semibold ">
                    Who we are
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    As a brokerage firm or trading platform. We are dedicated to
                    providing innovative and user-friendly trading
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="mb-5">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span" className="font-semibold ">
                    What we do
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="mb-5">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel2-header"
                >
                  <Typography component="span" className="font-semibold ">
                    How it works
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
         
          <div>
            <video
              src="/vd2.mp4"
              autoPlay
              loop
              muted
              className="w-full md:h-[600px] h-auto rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div> */}
      <div className="md:my-10 my-5">
        {" "}
        <Subscribe />
      </div>
    </div>
  );
};

export default page;
