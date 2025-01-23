import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextAnimate } from "@/components/ui/text-animate";

const Accrodions = () => {
  return (
    <div className="container max-w-7xl mx-auto md:my-32 my-10 px-3">
      <div className=" md:grid grid-cols-2 gap-10">
        <div className="">
          <p className="text-[#22823A] font-semibold border-2 w-fit px-3 bg-gray-100 rounded-2xl py-1 my-5">
            ACCOUNTS
          </p>
          <TextAnimate
            animation="blurInUp"
            by="character"
            className=" text-2xl md:text-5xl font-bold mb-10"
          >
            Trading Accounts
          </TextAnimate>

          <div>
            <Accordion  className="mb-5">
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
                  Tradeoxi is a stock market platform empowering traders with
                  tools, insights, and education to excel in financial markets
                  confidently.
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
                  Tradeoxi provides trading tools, market insights, and
                  educational resources to help users navigate and succeed in
                  stock market trading effectively.
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
                Tradeoxi works by offering users real-time market data, trading tools, expert insights, and educational resources to make informed trading decisions.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        {/* left */}

        <div>
          <video
            src="/stockvd.mp4"
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Accrodions;
