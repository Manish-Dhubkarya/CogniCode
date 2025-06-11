import Footer from "./Footer";
import NavigationComponent from "./NavigationComponent";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import { useEffect, useState } from "react";

interface ConferenceRow {
  "S no": number;
  Publisher: string;
  "Conference Name": string;
  "Area/Subject": string;
  "Last date of Submission": string;
  "Registration Charges": string;
  Links: string;
}

const Conferences: React.FC = () => {
  const tableData: ConferenceRow[] = [
    {
      "S no": 1,
      Publisher: "Springer",
      "Conference Name":
        "fouuytgr0r98y7tyghjrdfkoi9fy76tgfdhjkopd098yt6dftghfdjf87gutrgfhjkdfo987dfutfgdhjidfiuytgfdvbnm",
      "Area/Subject": "",
      "Last date of Submission": "",
      "Registration Charges": "",
      Links: "",
    },
    {
      "S no": 2,
      Publisher: "IEEE",
      "Conference Name": "",
      "Area/Subject": "",
      "Last date of Submission": "",
      "Registration Charges": "",
      Links: "",
    },
    {
      "S no": 3,
      Publisher: "Springer",
      "Conference Name": "",
      "Area/Subject": "",
      "Last date of Submission": "",
      "Registration Charges": "",
      Links: "",
    },
    {
      "S no": 4,
      Publisher: "IEEE",
      "Conference Name": "",
      "Area/Subject": "",
      "Last date of Submission": "",
      "Registration Charges": "",
      Links: "",
    },
    {
      "S no": 5,
      Publisher: "IEEE",
      "Conference Name": "",
      "Area/Subject": "",
      "Last date of Submission": "",
      "Registration Charges": "",
      Links: "",
    },
    {
      "S no": 6,
      Publisher: "Springer",
      "Conference Name": "",
      "Area/Subject": "",
      "Last date of Submission": "",
      "Registration Charges": "",
      Links: "",
    },
  ];
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

  return (
    <div
      className={`w-full flex flex-col items-center justify-center mb-10 roboto-regular ${
        isXXS || isXS || isSM
          ? "mt-16"
          : isMD || isLG || isXL
          ? "mt-22"
          : "mt-30"
      } `}
    >
      <NavigationComponent />

      <div className="w-[87%] md:pb-2 pb-5 scrollbar-none overflow-x-auto">
        <div className="min-w-[1000px] grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_1fr] rounded-[10px] overflow-hidden border border-white">
          {/* Header */}
          <div className="contents">
            {Object.keys(tableData[0]).map((key) => (
              <div
                key={key}
                className={`border border-white px-4 py-3 flex items-center justify-center text-[16px] md:text-[20px] font-normal tracking-[0%] leading-snug roboto-regular text-center ${
                  key === "Conference Name"
                    ? "max-w-[300px] whitespace-normal break-words"
                    : ""
                }`}
              >
                {key === "S no" ? "S no." : key}
              </div>
            ))}
          </div>

          {/* Data */}
          {tableData.map((row) => (
            <div key={row["S no"]} className="contents">
              {Object.values(row).map((value, index) => (
                <div
                  key={`${row["S no"]}-${index}`}
                  className={`border border-white px-4 py-3 text-center align-middle text-[14px] md:text-[18px] font-normal tracking-[0%] leading-normal roboto-regular ${
                    index === 2
                      ? "max-w-[200px] whitespace-normal break-words"
                      : ""
                  }`}
                >
                  {index === 0 ? `${value}.` : value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div
        className={`w-full flex ${
          isXXS || isXS || isSM
            ? "mt-10"
            : isMD || isLG || isXL
            ? "mt-17"
            : "mt-27"
        } flex-col items-center`}
      >
        <div className="w-full flex flex-col items-center">
          <div
            style={{ backgroundImage: `url(${TeamBanner})`           
          }}
            className={`bg-cover roboto-regular w-full flex flex-col gap-y-0 items-center justify-center
 ${
  isXXS
    ? "h-[180px]"
    : isXS
    ? "h-[210px]"
    : isSM
    ? "h-[240px]"
    : isMD
    ? "h-[300px]"
    : isLG
    ? "h-[360px]"
    : isXL
    ? "h-[420px]"
    : is2XL
    ? "h-[541px]"
    : is3XL
    ? "h-[560px]"
    : ""
}`}
          >
            <div
              className={`text-white ${
                isXXS || isXS || isSM
                  ? "mb-2 text-[20px]"
                  : isMD
                  ? "mb-4 text-[30px]"
                  : isLG
                  ? "mb-5 text-[40px]"
                  : "mb-7 text-[64px]"
              } text-center px-4 font-extrabold leading-tight dm-sans-regular`}
            >
              Want to create FUTURE?
            </div>
            <div
              className={`text-center px-2 ${
                isXXS || isXS || isSM
                  ? "mb-2"
                  : isMD
                  ? "mb-4"
                  : isLG
                  ? "mb-5"
                  : "mb-7"
              } ${
                isXXS
                  ? "text-[12px]"
                  : isXS
                  ? "text-[14px]"
                  : isSM
                  ? "text-[12px]"
                  : isMD
                  ? "text-[14px]"
                  : isLG
                  ? "text-[17px]"
                  : isXL
                  ? "text-[19px]"
                  : "text-[20px]"
              }`}
            >
              Explore new possibilities with us everyday. Create your mark on
              future with us.
            </div>
            <div
            // className={styles.homeBannerConnectText}
            className={` bg-gradient-to-r text-black roboto-regular ${isXXS || isXS ? 'px-4 py-0.5 text-[10px]' : isSM ? 'px-6 py-1 text-[12px]' : isMD ? 'px-8 py-1 text-[14px]' : isLG ? 'px-10 py-1.5 text-[16px]' : 'px-14 py-2 text-lg sm:text-[20px]'} rounded-xl cursor-pointer shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
          >
            Join Us
          </div>
          </div>
          <div className="w-full flex border-t-3 border-[#8AFF84] mt-0 flex-col items-center">
            <div className="w-[90%] md:w-[83%] flex flex-col">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conferences;
