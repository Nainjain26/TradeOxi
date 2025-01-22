import React from 'react'
import Globe from "@/components/ui/globe";
const page = () => {
  return (
    <div className="container mx-auto px-3">
       <div className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
              <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
              Refund Policy
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
  
         <div className="text-gray-900 space-y-6 leading-8 ">
        <section>
         
          <p>
          For  Tradeoxi Consultant customer satisfaction is the utmost priority and hence we recommend paper trading of the free trial signals for the user to judge the appropriateness of our services. It takes extreme analytical research to reach accuracy levels but we don&apos;t support any guarantee or warrantee on our recommendations and hence cannot offer refund/cancellation support once the services have been subscribed regardless of a client&apos;s individual profiling, because execution of the real time recommendations plays a big role in profits and losses for which the client is solely to be held accountable.
          </p>
          <p className="py-4">
          We believe that the client goes through all the pros and cons of subscribing our services, need suitability and risks and rewards ratio of the subscriptions before paying for the services which he wishes to subscribe through his willful consent. Hence any claims of refunds or cancellations stand null and void.
          </p>
          <p>Once a service has been subscribed and a payment has been made the client starts receiving recommendations he has subscribed for and in case of difficulty to interpret the signals, can seek direction from the assigned representative as per the company standards for future recommendations being utilized in an appropriate manner. We will put our best effort to increase the satisfaction levels in such cases. However, any request by the client to cancel a service or get a refund will not be accepted in any case.</p>
          <p className='py-4'>
          In an unlikely event that after payment, on the basis of verifiability of the information furnished by the client , if Tradeoxi Consultant through its sole discretion, after finding faults or misappropriation in the information furnished decides on not giving services to the client then he shall be paid back as soon as possible.
          </p>
          <p>Before subscribing to our services the clients are advised to go through the proper evaluation of the resources and recommendations in the free trial period of 3 days, nature of services, risk analysis, service features, and terms of use. Subscribe only if the client is satisfied with the overall package we provide and this shall ensure a more abundant and grievance free consultancy journey ahead.</p>
        </section>

       
      </div>
          </div>
    </div>
  )
}

export default page
