import React, { useEffect, useRef, useState } from "react";
import NavigationComponent from "./NavigationComponent";
import ThesisBack from "../assets/ServicesCSS/ThesisBack.png";
import DissertationBack from "../assets/ServicesCSS/DissertationBack.png";
import PaperBack from "../assets/ServicesCSS/PaperBack.png";
import DSBack from "../assets/ServicesCSS/DSBack.png";
import PythonBack from "../assets/ServicesCSS/PythonBack.png";
import PredictiveAnalytics from "../assets/ServicesCSS/Predictive_analytics.png";
import IntelligentAutomation from "../assets/ServicesCSS/Intelligent_automation.png";
import NLP_Solutions from "../assets/ServicesCSS/NLP_solutions.png";
import ScalableAIServices from "../assets/ServicesCSS/Scalable_AI_services.png";
import MLModel from "../assets/ServicesCSS/Machine_learning_models.png";
import PlagarismRemovel from "../assets/ServicesCSS/PlagarismRemoval.png";
import ScrollingFooter from "./ScrollingFooter";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";

const OurServices: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { selectedService = "No service selected" } = state || {};
  const stickyDivRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  // Refs for section headings
  const writingServicesRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const itSolutionsRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const aiServicesRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const scrollRef = useRef<HTMLDivElement>(null);

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollCycle = async () => {
      // Make sure it's scrollable
      if (el.scrollWidth <= el.clientWidth + 10) return;

      // Perform the smooth scroll twice
      for (let i = 0; i < 2; i++) {
        el.scrollBy({ left: 100, behavior: "smooth" });
        await wait(1000); // wait for scroll to complete

        el.scrollTo({ left: 0, behavior: "smooth" });
        await wait(1200); // wait before next cycle starts
      }
    };

    // Delay start until layout fully settles
    const raf = requestAnimationFrame(() => {
      setTimeout(() => scrollCycle(), 300); // wait after mount
    });

    return () => cancelAnimationFrame(raf);
  }, []);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedService === "No service selected") {
      window.scrollTo(0, 0);
    }
  }, [selectedService]);

  // Handle scroll to toggle fixed position
  useEffect(() => {
    const handleScroll = () => {
      if (stickyDivRef.current && placeholderRef.current) {
        const offsetTop = placeholderRef.current.getBoundingClientRect().top + window.scrollY;
        const topPosition = 40; // Matches top-[64px]
        if (window.scrollY >= offsetTop - topPosition) {
          setIsFixed(true);
          placeholderRef.current.style.height = `${stickyDivRef.current.offsetHeight}px`;
        } else {
          setIsFixed(false);
          placeholderRef.current.style.height = "0px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the appropriate section based on selectedService
  useEffect(() => {
    if (selectedService !== "No service selected") {
      let targetRef: React.RefObject<HTMLDivElement> | null = null;
      switch (selectedService) {
        case "Thesis Writing":
          targetRef = writingServicesRef;
          break;
        case "IT SOLUTIONS":
          targetRef = itSolutionsRef;
          break;
        case "AI SERVICES":
          targetRef = aiServicesRef;
          break;
        case "NEW EVENTS":
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        default:
          break;
      }
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedService]);

  // Breakpoints
  const isXXS = width <= 200;
  const isXS = width > 200 && width <= 300;
  const isSM = width > 300 && width <= 500;
  const isMD = width > 500 && width <= 700;
  const isLG = width > 700 && width <= 900;
  const isXL = width > 900 && width <= 1200;
  const is2XL = width > 1200 && width <= 1600;
  const is3XL = width > 1600;

  interface Service {
    title: string;
    back: string;
    navigation: string | { pathname: string; state?: { selectedService: string } };
  }

  const WritingServices: Service[] = [
    { title: "Thesis Writing", back: ThesisBack, navigation: "/thesiswriting" },
    {
      title: "Dissertation Writing",
      back: DissertationBack,
      navigation: "/dissertationswriting",
    },
    { title: "Paper Writing", back: PaperBack, navigation: "/paperwriting" },
    {
      title: "Plagiarism Removal",
      back: PlagarismRemovel,
      navigation: {
        pathname: "/contactus",
        state: { selectedService: "Plagiarism Removal" },
      },
    },
  ];

  const ITServices: Service[] = [
    {
      title: "Data Science Services",
      back: DSBack,
      navigation: {
        pathname: "/contactus",
        state: { selectedService: "Data Science Services" },
      },
    },
    {
      title: "Python Programming Services",
      back: PythonBack,
      navigation: {
        pathname: "/contactus",
        state: { selectedService: "Python Programming Services" },
      },
    },
  ];

  const AIservices: Service[] = [
    {
      title: "Predictive Analytics",
      back: PredictiveAnalytics,
      navigation: {
        pathname: "/contactus",
        state: { selectedService: "Predictive Analytics" },
      },
    },
    {
      title: "Intelligent Automation",
      back: IntelligentAutomation,
      navigation: {
        pathname: "/contactus",
        state: { selectedService: "Intelligent Automation" },
      },
    },
    {
      title: "NLP Solutions",
      back: NLP_Solutions,
      navigation: {
        pathname: "/contactus",
        state: { selectedService: "NLP Solutions" },
      },
    },
    {
      title: "Scalable AI Services",
      back: ScalableAIServices,
      navigation: {
        pathname: "/contactus",
        state: { selectedService: "Scalable AI Services" },
      },
    },
    {
      title: "Machine Learning Models",
      back: MLModel,
      navigation: {
        pathname: "/contactus",
        state: { selectedService: "Machine Learning Models" },
      },
    },
  ];

  const renderSection = (
    title: string,
    services: Service[],
    sectionRef: React.RefObject<HTMLDivElement>
  ) => (
    <div className="w-full mb-10">
      <div

        ref={sectionRef}
        className={`${
          isXXS || isXS
            ? "text-[16px] mb-4"
            : isSM
            ? "text-[20px] mb-5"
            : isMD
            ? "text-[28px] mb-6"
            : isLG
            ? "text-[36px] mb-8"
            : isXL
            ? "text-[44px] mb-8"
            : "text-[52px] mb-10"
        } font-bold uppercase text-left w-fit bg-gradient-to-r from-[#8AFF84] to-[#1B7BFF] bg-clip-text text-transparent`}
      >
        {title}
      </div>

      <div
      ref={services === WritingServices ? scrollRef : null}

        className={`w-full ${services==ITServices && (isXXS || isXS || isSM)? "gap-x-10": services==ITServices && isMD?"gap-x-15": services==ITServices && isLG?"gap-x-60": services==ITServices && isXL?"gap-x-65": services==ITServices && is2XL?"gap-x-60":""} gap-5 ${
          isLG
            ? `grid grid-cols-5  gap-x-50 overflow-x-auto`
            : isXL
            ? "grid grid-cols-5 overflow-x-auto gap-x-56"
            : is2XL || is3XL
            ? "grid grid-cols-4 overflow-x-auto gap-x-10"
            : `flex overflow-x-auto snap-x snap-mandatory`
        } scrollbar-none`}
      >
        {services.map((item, index) => (
          <div
            key={index}
            className={`flex p-1 flex-col items-center justify-between snap-start flex-shrink-0 ${
              isXXS
                ? "w-[80px] h-[160px]"
                : isXS
                ? "w-[90px] h-[200px]"
                : isSM
                ? "w-[120px] h-[220px]"
                : isMD
                ? "w-[140px] h-[260px]"
                : isLG
                ? "w-[180px] h-[320px]"
                : isXL
                ? "w-[200px] h-[350px]":
                is2XL?
                "w-[18vw] h-[450px]"
                
                : "w-[18vw] h-[590px]"
            }`}
          >
            <div  onClick={() =>
                  typeof item.navigation === "string"
                    ? navigate(item.navigation)
                    : navigate(item.navigation.pathname, {
                        state: item.navigation.state,
                      })
                } className="w-full cursor-pointer flex flex-col items-center justify-center">
              <div
               
                className={`rounded-[7px] w-full ${
                  isXXS
                    ? "h-[100px]"
                    : isXS
                    ? "h-[110px]"
                    : isSM
                    ? "h-[170px]"
                    : isMD
                    ? "h-[200px]"
                    : isLG
                    ? "h-[250px]"
                    : isXL
                    ? "h-[280px]":
                    is2XL?"h-[350px]"
                    : "h-[480px]"
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
                  isXXS
                    ? "text-[10px] leading-tight mt-3"
                    : isXS
                    ? "text-[11px] leading-tight mt-3"
                    : isSM
                    ? "text-[12px] mt-3"
                    : isMD
                    ? "text-[14px] mt-5"
                    : isLG
                    ? "text-[16px] mt-6"
                    : isXL
                    ? "text-[18px] mt-7"
                    : "text-[20px] mt-8"
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
    <div
      className={`flex flex-col roboto-regular ${
        isXXS || isXS || isSM
          ? "mt-7"
          : isMD
          ? "mt-8"
          : isLG
          ? "mt-12"
          : "mt-15"
      } mb-5 text-white`}
    >
      <NavigationComponent />
      <div
        className={`px-4 ${
          isXXS || isXS || isSM
            ? "px-4"
            : isMD
            ? "px-8"
            : isLG
            ? "px-12"
            : isXL
            ? "px-16"
            : is2XL
            ? "px-24"
            : "px-32"
        } mt-10 text-left`}
      >
        {renderSection("Writing Services", WritingServices, writingServicesRef)}
        <div ref={placeholderRef} className="w-full"></div>
        <div
          ref={stickyDivRef}
          className={`flex flex-col items-center w-full transition-all duration-300 ease-in-out ${
            isFixed
              ? `fixed pt-3 backdrop-blur-2xl bg-white/0 ${isXXS || isXS || isSM?"top-[28px]":isMD?"top-[23px]":isLG?"top-[24px]":isXL?"top-[0px]":is2XL?"top-[8px]": "top-[20px]"}  left-0 z-20 px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32`
              : ""
          } ${
            isXXS || isXS
              ? "my-4 px-0"
              : isSM
              ? "my-6 px-0"
              : isMD
              ? "my-8 px-0"
              : isLG
              ? "my-10 px-0"
              : isXL
              ? "my-16 px-0"
              : is2XL
              ? "my-15 px-0"
              : "my-13  px-0"
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
            <div
              onClick={() =>
                navigate("/services", { state: { selectedService: "Thesis Writing" } })
              }
              className="hover:text-white cursor-pointer"
              style={{ fontFamily: "Roboto", fontWeight: 600 }}
            >
              Writing Services
            </div>
            <div
              onClick={() =>
                navigate("/services", { state: { selectedService: "IT SOLUTIONS" } })
              }
              className="hover:text-white cursor-pointer"
            >
              IT Solutions
            </div>
            <div
              onClick={() =>
                navigate("/services", { state: { selectedService: "AI SERVICES" } })
              }
              className="hover:text-white cursor-pointer"
            >
              AI Services
            </div>
          </div>
          <div
            className={`w-[95%] border-t-1 mt-4 border-[#8AFF84]`}
          ></div>
        </div>
        {renderSection("IT Solutions", ITServices, itSolutionsRef)}
        {renderSection("AI Services", AIservices, aiServicesRef)}
      </div>
      <div
        className={`${
          isXXS || isXS
            ? "my-4"
            : isSM
            ? "my-6"
            : isMD
            ? "my-8"
            : isLG
            ? "my-10"
            : isXL
            ? "my-12"
            : "my-14"
        }`}
      >
        <ScrollingFooter />
      </div>
      <div className="w-full flex border-t-2 border-[#8AFF84] flex-col items-center">
        <div
          className={`flex flex-col ${
            isXXS || isXS
              ? "w-[83%]"
              : isSM
              ? "w-[83%]"
              : isMD
              ? "w-[88%]"
              : isLG
              ? "w-[86%]"
              : isXL
              ? "w-[84%]"
              : "w-[82%]"
          }`}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OurServices;