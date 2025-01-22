import React from 'react'
import Globe from "@/components/ui/globe";
const page = () => {
  return (
    <div className="container mx-auto px-3">
       <div className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
              <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
              Terms And Conditions
              </span>
              <Globe className="top-16 " />
              <div className="pointer-events-none absolute inset-0 h-full " />
              
            </div>

            <div className="container max-w-5xl green-shadow   mx-auto px-5 py-10 mb-10 relative z-[2]">
            <img
    src="/bg.jpg"
    alt="Decorative background"
    className="absolute inset-0 w-full h-full object-cover opacity-20 z-[1]"
  />
  
         <div className="text-gray-900 space-y-6 leading-8">
        <section>
          <h3 className="text-2xl font-semibold mb-4">
          USER AGREEMENT:
          </h3>
          <p>
          Forex, Comex, and Indices, has large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in markets. Don&apos;t trade with money you can&apos;t afford to lose especially with leveraged instruments such as Forex, Comex, and Indices Trading , The past performance of any trading system or  methodology is not necessarily indicative of future results. You could lose all of your money fast due too: poor market trading conditions, mechanical error, emotional induced errors, news surprises and earnings releases. Tradeoxi Consultant takes not responsibility for loss incurred as a result of our trading signals. You must make your own financial decisions, we take no responsibility for money you made or lost as a result of our signals or advice on forex-related products on this website. You should ensure you understand all of the risks associated with trading before using Tradeoxi Consultant services.
          </p>
          
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">
          All rights reserved. The use of this website constitutes acceptance of our user agreement:
          </h3>
          <p>
          While Tradeoxi Consultant believes that the content provided is accurate, there are no explicit or implied warranties of accuracy. The information provided is believed to be reliable; Tradeoxi Consultant does not guarantee the accuracy or completeness of the information provided. Third parties refer to TradeoxiConsultant to provide technology and information if a third party fails, and then there is a risk that the information may be delayed or not delivered at all.
          </p>
          <p className="py-3">
          All information and comments contained on this website, including but not limited to, opinions, analyzes, news, prices, research, and general, do not constitute investment advice or an invitation to buy or sell any type of instrument.
          </p>
         
          <p className="">Forex trading is potentially high risk and may not be suitable for all investors. The high level of leverage can work both for and against merchants. Before each Forex investment, you should carefully consider your goals, past experience and risk level. You explicitly agree that viewing, visiting or using this website is at your own risk.</p>
          <p className="py-3">
          We hold the right to make changes to our site and these disclaimers, terms, and conditions at any time.
          </p>
         
        </section>
      </div>
          </div>
    </div>
  )
}

export default page
