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
    <div className="flex flex-col roboto-regular my-4 items-center justify-center">
      <NavigationComponent />
      <div
        className={`text-[#C9C9C9] font-bold roboto-regular ${
          isXXS || isXS
            ? "text-[16px] mt-8"
            : isSM
            ? "text-[24px] mt-10"
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
            mainHeading === "Paper Writing"
              ? `flex flex-col items-start w-full ${
                  isXXS || isXS || isSM || isMD || isLG ? "mx-4" : isXL ? "mx-9" : "mx-6"
                }`
              : isXXS || isXS || isSM
              ? "flex flex-col items-center w-full mx-2"
              : isMD || isLG
              ? "columns-2 gap-4 mx-4"
              : "columns-3 gap-8 mx-auto"
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
        className={`flex flex-col items-center w-full ${
          isXXS || isXS
            ? "mt-4"
            : isSM
            ? "mt-6"
            : isMD
            ? "mt-8"
            : isLG
            ? "mt-10"
            : isXL
            ? "mt-17"
            : is2XL
            ? "mt-14"
            : "mt-12"
        }`}
      >
        <div
          className={`flex text-[#AFACAC]  font-semibold justify-between items-center flex-row ${
            isXXS || isXS
              ? "w-[90%] text-[10px]"
              : isSM
              ? "w-[80%] text-[14px]"
              : isMD
              ? "w-[70%] text-[16px]"
              : isLG
              ? "w-[60%] text-[18px]"
              : isXL
              ? "w-[40%] text-[20px]"
              : is2XL
              ? "w-[45%] text-[20px]"
              : "w-[50%] text-[20px]"
          }`}
        >
          <div className="hover:text-white" style={{ fontFamily: "Roboto", fontWeight: 600 }}>
            Writing Services
          </div>
          <div className="hover:text-white">IT Solutions</div>
          <div className="hover:text-white">AI Services</div>
        </div>
        <div
          className={`${
            isXXS || isXS || isSM
              ? "w-full"
              : isMD || isLG
              ? "w-[90%]"
              : isXL
              ? "w-[85%]"
              : "w-[80%]"
          } border-t mt-4 border-[#8AFF84]"
        `}
        ></div>
      </div>
      <div
        className={`${
          isXXS || isXS
            ? "mt-4"
            : isSM
            ? "mt-6"
            : isMD
            ? "mt-8"
            : isLG
            ? "mt-10"
            : isXL
            ? "mt-15"
            : is2XL
            ? "mt-12"
            : "mt-10"
        }`}
      >
        <ScrollingFooter />
      </div>
      <div className="w-full flex border-t border-[#8AFF84] mt-0 flex-col items-center">
        <div
          className={`flex flex-col ${
            isXXS || isXS
              ? "w-[95%]"
              : isSM
              ? "w-[90%]"
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