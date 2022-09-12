import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import FaqImg from "../Images/pose_8.png";
import AddIcon from "@mui/icons-material/Add";
import Img from "../Images/image 5.png";

const FAQ = () => {
  return (
    <div className="bg-[#F7F7F7] md:px-24 px-4 grid lg:grid-cols-2 grid-cols-1 md:gap-6 gap-3 lg:py-16">
      {/* --leftInfo-- */}
      <div className="space-y-3 lg:order-1 order-2">
        <p className="text-base text-[#642DFF] font-medium uppercase">
          faq questions
        </p>
        <h2 className="text-3xl font-semibold text-[#1E1E1E] capitalize">
          get your general answer
        </h2>
        {/* --qstn_1-- */}
        <Accordion
          sx={{
            "& .MuiAccordionSummary-root": {
              padding: "0 !important",
            },
            "& .MuiAccordionDetails-root": {
              padding: 0,
            },
            boxShadow: "none",
            backgroundColor: "#F7F7F7",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "#2D89FF" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 20 }}>
              Get Your General Answer
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* --qstn_2-- */}
        <Accordion
          sx={{
            "& .MuiAccordionSummary-root": {
              padding: "0 !important",
            },
            "& .MuiAccordionDetails-root": {
              padding: 0,
            },
            boxShadow: "none",
            backgroundColor: "#F7F7F7",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "#2D89FF" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 20 }}>
              Will I always see my own doctors?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* --qstn_3-- */}
        <Accordion
          sx={{
            "& .MuiAccordionSummary-root": {
              padding: "0 !important",
            },
            "& .MuiAccordionDetails-root": {
              padding: 0,
            },
            boxShadow: "none",
            backgroundColor: "#F7F7F7",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "#2D89FF" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 20 }}>
              What is one Medical's care?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* --qstn_4-- */}
        <Accordion
          sx={{
            "& .MuiAccordionSummary-root": {
              padding: "0 !important",
            },
            "& .MuiAccordionDetails-root": {
              padding: 0,
            },
            boxShadow: "none",
            backgroundColor: "#F7F7F7",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "#2D89FF" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 20 }}>
              What is evidence based medicine?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* --qstn_5-- */}
        <Accordion
          sx={{
            "& .MuiAccordionSummary-root": {
              padding: "0 !important",
            },
            "& .MuiAccordionDetails-root": {
              padding: 0,
            },
            boxShadow: "none",
            backgroundColor: "#F7F7F7",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "#2D89FF" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 20 }}>
              What is an academic medical center?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* --rightImg-- */}
      <div className="lg:order-2 order-1 lg:pb-0 md:pb-0 pb-36">
        <div className="relative">
          <div className="rounded-full w-40 h-40 mt-10 bg-gradient-to-b p-[6px] from-[#642DFF] via-[#F7F7F7] m-auto">
            <div className="w-32 h-32 items-center mx-auto my-3 ease-in duration-300 rounded-full bg-[#F7F7F7] relative"></div>
          </div>
          <img
            className="absolute lg:w-80 lg:h-80 -top-5 md:left-32 lg:left-32 left-4"
            src={FaqImg}
            alt=""
          />
          <div className="bg-[#FFFFFF] w-60 rounded-md shadow-md flex items-center gap-2 p-2 absolute lg:left-3 md:left-4 -bottom-24 right-0">
            <img
              className="inline w-12 h-12 p-2 rounded-full bg-[#f7e7bb]"
              src={Img}
              alt=""
            />
            <h2 className="text-base capitalize text-[#1E1E1E] font-medium">
              get solution from our experts
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
