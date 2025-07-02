import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavigationComponent from "./NavigationComponent";
import ScrollingFooter from "./ScrollingFooter";

interface WritingComponentProps {
  services: string[];
  mainHeading: string;
}

const WritingComponent: React.FC<WritingComponentProps> = ({ services, mainHeading }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
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

  // Handle click to navigate to ServiceDetailComponent
  const handleServiceClick = (service: string) => {
     navigate("/contactus", { state: { selectedService: service } });
  };

  return (
    <div className="flex flex-col roboto-regular mt-6 mb-5 items-center justify-center">
      <NavigationComponent />
      <div
        className={`text-[#C9C9C9] font-bold roboto-regular ${
          isXXS || isXS
            ? "text-[16px] mt-8"
            : isSM
            ? "text-[24px] text-start w-full px-5 mt-10"
            : isMD
            ? "text-[26px] mt-12"
            : isLG
            ? "text-[30px] mt-14"
            : isXL
            ? "text-[38px] mt-20"
            : is2XL
            ? "text-[44px] mt-18"
            : "text-[48px] mt-16"
        }`}
      >
        {mainHeading}
      </div>
      {/* Services List */}
      <div
        className={`flex justify-center w-full ${
          isXXS || isXS
            ? "mt-4"
            : isSM
            ? "mt-6"
            : isMD
            ? "mt-8"
            : isLG
            ? "mt-9"
            : isXL
            ? "mt-10"
            : is2XL
            ? "mt-12"
            : "mt-14"
        }`}
      >
        <ul
          className={
            
             isXXS || isXS || isSM
              ? "flex flex-col items-start w-full mx-2"
              : isMD || isLG
              ? "grid grid-cols-2 gap-x-[4vw] w-full mx-4"
              : ` grid grid-cols-3 gapx-x-[2vw] w-full mx-[3vw]`
          }
        >
          {services.map((service, index) => (
            <li
              key={index}
              className={`break-inside-avoid mb-4 text-start flex items-start ${
                isXXS || isXS
                  ? "px-2 text-[10px]"
                  : isSM
                  ? "px-4 text-[12px]"
                  : isMD
                  ? "px-6 text-[14px]"
                  : isLG
                  ? "px-8 text-[15px]"
                  : isXL
                  ? "px-10 text-[16px]"
                  : is2XL
                  ? "px-10 text-[16px]"
                  : "px-8 text-[16px]"
              }`}
            >
              <div
                className="cursor-pointer inline-block transition-transform duration-500 ease-out hover:scale-125 hover:text-gray-400  hover:text-shadow-blowout"
                onClick={() => handleServiceClick(service)}
              >
                {index + 1}. {service}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
          className={`flex flex-col items-center w-[90%] transition-all duration-300 ease-in-out ${
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
            ? "my-15"
            : is2XL
            ? "my-12"
            : "my-10"
        }`}
      >
        <ScrollingFooter />
      </div>
      <div className="w-full flex border-t-2 border-[#8AFF84] mt-0 flex-col items-center">
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
              ? "w-[83%]"
              : is2XL
              ? "w-[84%]"
              : "w-[85%]"
          }`}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default WritingComponent;