import ContactUsBannerBack from "../assets/ContactUsBannerBack.gif";
import { LuPlus } from "react-icons/lu";
import Footer from "./Footer";
import ScrollingFooter from "./ScrollingFooter";
import NavigationComponent from "./NavigationComponent";
import { contactUsStyles as styles } from "../UIComponentCSS/ContactUsCss";
import { useEffect, useState } from "react";

export default function ContactUs() {
  const ConnectByList = [
    "Enquire about price as per services",
    "Looking for a career change",
    "Looking for new competitions",
    "New business collaboration",
    "Our Vision & Mission",
    "New business collaboration",
  ];
  const UserDetails = [
    "First name*",
    "Last name*",
    "Email address*",
    "Phone Number*",
    "How can we help you?*",
  ];

  const [width, setWidth] = useState(window.innerWidth);
  const [inputValues, setInputValues] = useState(Array(UserDetails.length).fill(""));

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

  // Handle input changes
  const handleInputChange = (index:any, value:any) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  return (
    <div className={styles.container}>
      <NavigationComponent />

      {/* Banner */}
      <div
        style={{ backgroundImage: `url(${ContactUsBannerBack})` }}
        className={`bg-cover flex-col-reverse bg-center w-full flex ${
          isXXS || isXS ? "gap-y-3" : isSM ? "gap-y-5" : isMD || isLG ? "gap-y-8" : isXL ? "gap-y-10" : "gap-y-12"
        } items-center justify-center ${
          isXXS || isXS || isSM
            ? "h-[20vh] min-h-[220px] max-h-[256px]"
            : isMD
            ? "h-[25vh] min-h-[250px] max-h-[300px]"
            : isLG
            ? "h-[30vh] min-h-[300px] max-h-[310px]"
            : isXL
            ? "h-[40vh] min-h-[400px] max-h-[406px]"
            : "h-[50vh] min-h-[450px] max-h-[456px]"
        } pt-[64px]`}
      >
        <div
          className={`bg-gradient-to-r text-black ${
            isXXS || isXS
              ? "px-4 py-0.5 text-[10px]"
              : isSM
              ? "px-6 py-1 text-[12px]"
              : isMD
              ? "px-8 py-1 text-[14px]"
              : isLG
              ? "px-10 py-1.5 text-[16px]"
              : "px-14 py-2 text-lg sm:text-[20px]"
          } rounded-xl cursor-pointer mt-3 shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
        >
          Send Message
        </div>
        <div
          className={`text-white text-center px-4 ${
            isXXS || isXS ? "text-[12px]" : isSM ? "text-[13px]" : isMD ? "text-[18px]" : isLG ? "text-[25px]" : isXL ? "text-[30px]" : "text-[36px]"
          } font-extrabold leading-tight dm-sans-regular`}
        >
          Thanks for your interest in Cognicode.
          <div>Choose from the options below and we’ll connect you</div>
          <div>with the right person.</div>
        </div>
      </div>

      {/* Connect By */}
      <div className={styles.connectWrapper}>
        <div
          className={`w-full md:max-w-[70%] max-w-[90%] flex flex-col ${
            isXXS || isXS || isSM ? "gap-y-2" : isMD ? "gap-y-2" : isLG ? "gap-y-6" : isXL ? "gap-y-8" : "gap-y-10"
          } items-center`}
        >
          <div
            className={`font-extrabold ${
              isXXS || isXS ? "mb-4" : isSM ? "mb-6" : isMD ? "mb-7" : isLG ? "mb-8" : "mb-10"
            } text-center ${
              isXXS || isXS ? "text-[12px]" : isSM ? "text-[13px]" : isMD ? "text-[17px]" : isLG ? "text-[20px]" : isXL ? "text-[27px]" : "text-[32px]"
            } tracking-tight`}
          >
            Connect with us to explore incredible future possibilities
          </div>
          {ConnectByList.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                isXXS || isXS || isSM ? "gap-y-2" : isMD ? "gap-y-4" : isLG ? "gap-y-5" : "gap-y-7"
              } w-full`}
            >
              <div
                className={`flex justify-between items-center font-semibold ${
                  isXXS || isXS
                    ? "text-[10px]"
                    : isSM
                    ? "text-[11px]"
                    : isMD
                    ? "text-[15px]"
                    : isLG
                    ? "text-[16px]"
                    : isXL
                    ? "text-[17px]"
                    : "text-[18px]"
                }`}
              >
                <div>{item}</div>
                <LuPlus size={isXXS || isXS || isSM ?14 : isMD?16: isLG?18 :20} />
              </div>
              <div className="w-full border-t-1 border-[#8AFF84]"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Details */}
      <div
        className={`flex items-start libre-franklin justify-center w-full ${
          isXXS || isXS || isSM ? "mt-8" : isMD ? "mt-12" : isLG ? "mt-14" : "mt-16"
        } px-4`}
      >
        <div className={styles.inquiryInner}>
          <div
            className={`${
              isXXS || isXS
                ? "text-[15px]"
                : isSM
                ? "text-[16px]"
                : isMD
                ? "text-[18px]"
                : isLG
                ? "text-[21px]"
                : isXL
                ? "text-[26px]"
                : "text-[32px]"
            } font-normal text-left tracking-tight`}
          >
            Please provide the following information and we’ll put you in touch with the right person.
          </div>
          <div className={styles.aboutSection}>
            <div
              className={`${
                isXXS || isXS
                  ? "text-[15px]"
                  : isSM
                  ? "text-[16px]"
                  : isMD
                  ? "text-[18px]"
                  : isLG
                  ? "text-[21px]"
                  : isXL
                  ? "text-[26px]"
                  : "text-[32px]"
              }`}
            >
              Inquiry Type*
            </div>
            <div className={styles.aboutLine}></div>
            <div
              className={`${
                isXXS || isXS
                  ? "text-[15px] font-semibold"
                  : isSM
                  ? "text-[16px] font-semibold"
                  : isMD
                  ? "text-[18px] font-semibold"
                  : isLG
                  ? "text-[21px] font-semibold"
                  : isXL
                  ? "text-[26px] font-semibold"
                  : "text-[32px] font-semibold"
              }`}
            >
              About You
            </div>
          </div>
          {UserDetails.map((item, index) => (
            <div key={index} className="flex items-start flex-col gap-y-6 w-[90%] max-w-full">
              <div
                className={`relative flex flex-col items-start w-full ${
                  isXXS || isXS || isSM ? "h-10" : isMD ? "h-12" : isLG ? "h-14" : "h-16"
                }`}
              >
                <input
                  type="text"
                  id={`input-${index}`}
                  placeholder=" "
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className={`${styles.inputField} peer`}
                />
                <label
                  htmlFor={`input-${index}`}
                  className={`absolute left-0 text-white transition-all duration-200 font-normal tracking-tight ${
                    inputValues[index]
                      ? "bottom-8 text-sm lg:bottom-10 lg:text-[20px]"
                      : "bottom-2 text-base sm:text-lg md:text-xl lg:text-[32px] peer-focus:bottom-8 peer-focus:text-sm peer-focus:lg:bottom-10 peer-focus:lg:text-[20px]"
                  }`}
                >
                  {item}
                </label>
                <div className={styles.inputUnderline} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className={styles.scrollingFooterWrapper}>
        <ScrollingFooter />
      </div>
      <div className={styles.footerWrapper}>
        <div className={styles.footerInner}>
          <Footer />
        </div>
      </div>
    </div>
  );
}