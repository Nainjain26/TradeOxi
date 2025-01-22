import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Cardover from "./Cardover";
import { MdOutlineAccountTree } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { AiOutlineAccountBook } from "react-icons/ai";


const Accounts = () => {
  return (
    <div className="container mx-auto  md:py-20 py-10 px-4 bg-green-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
          <p className="text-[#22823A] font-semibold border-2 w-fit px-3 bg-gray-100 rounded-2xl py-1">
            ACCOUNTS
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
            Level up your trading with{" "}
            <span className="text-green-700">Account</span>
          </h1>
          <p className="text-gray-600 leading-7 text-base md:text-lg">
            Not sure which is the right FOREX com platform for you? Check out
            our handy platform comparison table which will show you all the
            differences.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600 flex items-center">
              <span className="text-2xl text-green-600 border rounded-full mr-3">
                <HiArrowSmRight />
              </span>
              Trade with one tap, anywhere, anytime
            </p>
            <p className="text-gray-600 flex items-center">
              <span className="text-2xl text-green-600 border rounded-full mr-3">
                <HiArrowSmRight />
              </span>
              Seamlessly manage your account and portfolio
            </p>
            <p className="text-gray-600 flex items-center">
              <span className="text-2xl text-green-600 border rounded-full mr-3">
                <HiArrowSmRight />
              </span>
              Stay ahead with real-time charts and indicators
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Cardover
            icon={<MdAccountBalance />}
            heading={"Professional Account"}
            description={
              "Traders with professional accounts gain access to a wide range of benefits, including enhanced trading platforms."
            }
          />
          <Cardover
            icon={<MdOutlineAccountTree />}
            heading={"Demo Account"}
            description={
              "Trading demo accounts are particularly valuable for novice traders who are new to the world of investing."
            }
          />
          <Cardover
            icon={<MdOutlineAccountBalanceWallet />}
            heading={"Overview Account"}
            description={
              "The primary feature of a trading overview account is its ability to aggregate information from multiple accounts."
            }
          />
          <Cardover
            icon={<AiOutlineAccountBook />}
            heading={"Islamic Account"}
            description={
              "Islamic accounts also adhere to ethical guidelines that prohibit trading certain financial instruments deemed unethical."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
