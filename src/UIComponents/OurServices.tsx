import React, { useEffect, useState } from "react";
import NavigationComponent from "./NavigationComponent";
import ThesisBack from "../assets/ServicesCSS/ThesisBack.png";
import DissertationBack from "../assets/ServicesCSS/DissertationBack.png";
import PaperBack from "../assets/ServicesCSS/PaperBack.png";
import DSBack from "../assets/ServicesCSS/DSBack.png";
import PythonBack from "../assets/ServicesCSS/PythonBack.png";
import PredictiveAnalytics from "../assets/ServicesCSS/Predictive_analytics.png";
import IntelligentAutomation from "../assets/ServicesCSS/Intelligent_automation.png";
import NLP_Solutions from "../assets/ServicesCSS/NLP_Solutions.png";
import ScalableAIServices from "../assets/ServicesCSS/Scalable_AI_services.png";
import MLModel from "../assets/ServicesCSS/Machine_learning_models.png";
import ScrollingFooter from "./ScrollingFooter";
import Footer from "./Footer";

const OurServices: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Breakpoints
  const isXXS = width <= 200;
  const isXS = width > 200 && width <= 300;
  const isSM = width > 300 && width <= 500;
  const isMD = width > 500 && width <= 700;
  const isLG = width > 700 && width <= 900;
  const isXL = width > 900 && width <= 1200;
  const is2XL = width > 1200 && width <= 1600;
  const is3XL = width > 1600;

  const WritingServices = [
    { title: "Thesis Writing", back: ThesisBack },
    { title: "Dissertation Writing", back: DissertationBack },
    { title: "Paper Writing", back: PaperBack },
    { title: "Plagarism Removal", back: PaperBack },
  ];

  const ITServices = [
    { title: "Data Science Services", back: DSBack },
    { title: "Python Programming Services", back: PythonBack },
  ];

  const AIservices = [
    { title: "Predictive Analytics", back: PredictiveAnalytics },
    { title: "Intelligent Automation", back: IntelligentAutomation },
    { title: "NLP Solutions", back: NLP_Solutions },
    { title: "Scalable AI Services", back: ScalableAIServices },
    { title: "Machine Learning Models", back: MLModel },
  ];

  const renderSection = (
    title: string,
    services: { title: string; back: string }[]
  ) => (
    <div className="w-full mb-10">
      <div className={`${
        isXXS || isXS ? "text-[16px] mb-4" :
        isSM ? "text-[20px] mb-5" :
        isMD ? "text-[28px] mb-6" :
        isLG ? "text-[36px] mb-8" :
        isXL ? "text-[44px] mb-8" :
        "text-[52px] mb-10"
      } font-bold uppercase text-left w-fit bg-gradient-to-r from-[#8AFF84] to-[#1B7BFF] bg-clip-text text-transparent`}>
        {title}
      </div>

      <div
        className={`w-full ${
          isLG?"grid grid-cols-4 gap-x-50  overflow-x-auto":
          isXL?"grid grid-cols-4  overflow-x-auto gap-x-26":
          
        is2XL || is3XL
            ? "grid grid-cols-4  overflow-x-auto gap-x-20"
            : "flex overflow-x-auto gap-x-4 snap-x snap-mandatory"
        } scrollbar-none`}
      >
        {services.map((item, index) => (
          <div
            key={index}
            className={`flex p-1 flex-col items-center justify-between snap-start flex-shrink-0 ${
              isXXS ? "w-[80px] h-[160px]" :
              isXS ? "w-[90px] h-[200px]" :
              isSM ? "w-[120px] h-[220px]" :
              isMD ? "w-[140px] h-[260px]" :
              isLG ? "w-[180px] h-[320px]" :
              isXL ? "w-[200px] h-[350px]" :
              "w-[240px] h-[460px]"
            }`}
          >
            <div className="w-full flex flex-col items-center justify-center">
              <div
                className={`rounded-[7px] w-full ${
                  isXXS ? "h-[100px]" :
                  isXS ? "h-[110px]" :
                  isSM ? "h-[170px]" :
                  isMD ? "h-[200px]" :
                  isLG ? "h-[250px]" :
                  isXL ? "h-[280px]" :
                  "h-[350px]"
                } flex items-center justify-center`}
                style={{
                  backgroundImage: `url(${item.back})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "2px 0px 4px #1B7BFF, 0px 2px 4px #8AFF84",
                }}
              ></div>

              <div
                className={`text-center text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis ${
                  isXXS ? "text-[10px] leading-tight mt-3" :
                  isXS ? "text-[11px] leading-tight mt-3" :
                  isSM ? "text-[12px] mt-3" :
                  isMD ? "text-[14px] mt-5" :
                  isLG ? "text-[16px] mt-6" :
                  isXL ? "text-[18px] mt-7" :
                  "text-[20px] mt-8 "
                }`}
              >
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col roboto-regular mt-15 mb-10 text-white">
      <NavigationComponent />

      <div className={`px-4 ${
        isMD ? "px-8" :
        isLG ? "px-12" :
        isXL ? "px-16" :
        is2XL ? "px-24" :
        "3xl:px-32"
      } mt-10 text-left`}>
        {renderSection("Writing Services", WritingServices)}
          <div
        className={`flex flex-col items-center w-full ${
          isXXS || isXS
            ? "my-4 px-0"
            : isSM
            ? "my-6 px-0"
            : isMD
            ? "my-8 px-0"
            : isLG
            ? "my-10 px-0"
            : isXL
            ? "my-17 px-0"
            : is2XL
            ? "my-14 px-0"
            : "my-12 px-0"
        }`}
      >
        <div
          className={`flex text-[#AFACAC] font-semibold justify-between items-center flex-row ${
            isXXS || isXS
              ? "w-[100%] text-[10px]"
              : isSM
              ? "w-[90%] text-[14px]"
              : isMD
              ? "w-[80%] text-[16px]"
              : isLG
              ? "w-[75%] text-[18px]"
              : isXL
              ? "w-[70%] text-[20px]"
              : is2XL
              ? "w-[45%] text-[20px]"
              : "w-[50%] text-[20px]"
          }`}
        >
          <div>Writing Services</div>
          <div>IT Solutions</div>
          <div>AI Services</div>
        </div>
        <div className={`${isXXS || isXS || isSM?"w-full":isMD || isLG?"w-full":isXL?"w-full": " w-full"} border-t-1 mt-4 border-[#8AFF84]`}></div>
      </div>

        {renderSection("IT Solutions", ITServices)}
        {renderSection("AI Services", AIservices)}
      </div>

      <div
        className={`${
          isXXS || isXS ? "mt-4" :
          isSM ? "mt-6" :
          isMD ? "mt-8" :
          isLG ? "mt-10" :
          isXL ? "mt-12" :
          "mt-14"
        }`}
      >
        <ScrollingFooter />
      </div>
      <div className="w-full flex border-t-3 border-[#8AFF84] flex-col items-center">
        <div
          className={`flex flex-col ${
            isXXS || isXS ? "w-[95%]" :
            isSM ? "w-[90%]" :
            isMD ? "w-[88%]" :
            isLG ? "w-[86%]" :
            isXL ? "w-[84%]" :
            "w-[82%]"
          }`}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OurServices;