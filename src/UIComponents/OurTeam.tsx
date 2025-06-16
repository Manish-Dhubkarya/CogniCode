import NavigationComponent from "./NavigationComponent";
import Avinash_Methania from "../assets/TeamMemberPics/Avinash_Methania.svg";
import Dheer_Verma from "../assets/TeamMemberPics/Dheer_Verma.svg";
import Twinkle_Varma from "../assets/TeamMemberPics/Twinkle_Verma.svg";
import Neha_Verma from "../assets/TeamMemberPics/Neha_Verma.svg";
import Ajay_Singh from "../assets/TeamMemberPics/Ajay_Singh.svg";
import Vishal_Verma from "../assets/TeamMemberPics/Vishal_verma.svg";
import Rinkey_Kushwah from "../assets/TeamMemberPics/Rinkey_Kushwah.svg"
import Manish_Dhubkarya from "../assets/TeamMemberPics/Manish_Dhubkarya.jpg";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import Footer from "./Footer";
import { useEffect, useState } from "react";
interface TeamMember {
  name: string;
  designation: string;
  pic?: string;
}
const OurTeam = () => {
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

  const TeamData: TeamMember[] = [
    {
      pic: Avinash_Methania,
      name: "Avinash Methania",
      designation: "Data Scientist",
    },
    {
      pic: Twinkle_Varma,
      name: "Twinkle Verma",
      designation: "Sr. Data Analyst",
    },
    {
      pic: Vishal_Verma,
      name: "Vishal Verma",
      designation: "Sr. Data Analyst",
    },
    {
      pic: Neha_Verma,
      name: "Neha Verma",
      designation: "Human Resource Manager",
    },
    {
      pic: Ajay_Singh,
      name: "Ajay Karan Singh Rajpoot",
      designation: "Content Writer",
    },
    { pic:Rinkey_Kushwah, name: "Rinky Kushwah", designation: "Content Writer" },
    { pic: Dheer_Verma, name: "Dheer Verma", designation: "UI Design Head" },
    {
      pic: Manish_Dhubkarya,
      name: "Manish Dhubkarya",
      designation: "Full Stack Developer",
    },
  ];
  return (
    <div className={`flex flex-col mb-10 items-center ${isXXS || isXS || isSM?"gap-y-10":isMD?"gap-y-14": isLG?"gap-y-17":isXL?"gap-y-18":"gap-y-20"}  inter-custom justify-center`}>
      <NavigationComponent />
      {/* Header */}

      {isXXS || isXS || isSM ? (
        <div className="flex mt-15 justify-center items-center flex-col">
            <div className="text-[20px] space-x-2 font-bold flex">
              <span className="capitalize">turning</span>
              <span className="text-[#8AFF84] uppercase">visions</span>
              <span className="lowercase">INTO</span>
              <span className="text-[#1B7BFF]">REALITY</span>
            </div>
            <div className="mt-5 text-[14px] font-medium leading-snug">
              We are present in the industry since 2021 and have
              <br />
              delivered our clients with top notch quality work and
              <br />
              services.
            </div>
            <div className="justify-center flex flex-col mt-5 space-y-2 items-center">
                <div className="w-[50vw] h-[50vw] bg-white rounded-full"></div>
               <div className="text-[20px] leading-snug roboto-regular">
              <div className="font-normal">Himanshu Verma</div>
              <div className="font-medium capitalize">
                Chief Executive Officer
              </div>
            </div>
            </div>
        </div>
      ) : isMD ? (
        <div className="flex w-full mt-15 justify-center items-center flex-row-reverse">
            <div className="flex flex-col w-[65%] justify-center items-center">
            <div className="text-[18px] space-x-2 font-bold flex">
              <span className="capitalize">turning</span>
              <span className="text-[#8AFF84] uppercase">visions</span>
              <span className="lowercase">INTO</span>
              <span className="text-[#1B7BFF]">REALITY</span>
            </div>
            <div className="mt-5 w-full text-[12px] font-medium leading-snug">
              We are present in the industry since 2021 and have
              <br />
              delivered our clients with top notch quality work and
              <br />
              services.
            </div>
            </div>
            <div className="justify-between ml-[3vw] w-[35%] flex flex-col mt-5 space-y-2 items-center">
                <div className="w-[25vw] h-[25vw] bg-white rounded-full"></div>
               <div className="text-[18px] leading-snug roboto-regular">
              <div className="font-normal">Himanshu Verma</div>
              <div className="font-medium capitalize">
                Chief Executive Officer
              </div>
            </div>
            </div>
        </div>
      ) : isLG ? (
        <div className="flex w-full mt-20 justify-center items-center flex-row-reverse">
            <div className="flex flex-col w-[65%] justify-center items-center">
            <div className="text-[28px] space-x-2 font-bold flex">
              <span className="capitalize">turning</span>
              <span className="text-[#8AFF84] uppercase">visions</span>
              <span className="lowercase">INTO</span>
              <span className="text-[#1B7BFF]">REALITY</span>
            </div>
            <div className="mt-4 w-full text-[15px] font-medium leading-snug">
              We are present in the industry since 2021 and have
              <br />
              delivered our clients with top notch quality work and
              <br />
              services.
            </div>
            </div>
            <div className="justify-between ml-[3vw] w-[35%] flex flex-col mt-5 space-y-5 items-center">
                <div className="w-[30vw] h-[30vw] bg-white rounded-full"></div>
               <div className="text-[22px] leading-snug roboto-regular">
              <div className="font-normal">Himanshu Verma</div>
              <div className="font-medium capitalize">
                Chief Executive Officer
              </div>
            </div>
            </div>
        </div>
      ) : isXL ? (
        <div className="flex w-full mt-25 justify-center items-center flex-row-reverse">
            <div className="flex flex-col w-[65%] justify-center items-center">
            <div className="text-[34px] space-x-2 font-bold flex">
              <span className="capitalize">turning</span>
              <span className="text-[#8AFF84] uppercase">visions</span>
              <span className="lowercase">INTO</span>
              <span className="text-[#1B7BFF]">REALITY</span>
            </div>
            <div className="mt-4 w-full text-[18px] font-medium leading-snug">
              We are present in the industry since 2021 and have
              <br />
              delivered our clients with top notch quality work and
              <br />
              services.
            </div>
            </div>
            <div className="justify-between ml-[3vw] w-[35%] flex flex-col mt-5 space-y-5 items-center">
                <div className="w-[30vw] h-[30vw] bg-white rounded-full"></div>
               <div className="text-[28px] leading-snug roboto-regular">
              <div className="font-normal">Himanshu Verma</div>
              <div className="font-medium capitalize">
                Chief Executive Officer
              </div>
            </div>
            </div>
        </div>
      ) : (
       <div className="flex w-[90%] mt-25 justify-center items-center flex-row-reverse">
            <div className="flex flex-col w-[65%] mb-10 justify-center items-center">
            <div className="text-[40px] space-x-2 font-bold flex">
              <span className="capitalize">turning</span>
              <span className="text-[#8AFF84] uppercase">visions</span>
              <span className="lowercase">INTO</span>
              <span className="text-[#1B7BFF]">REALITY</span>
            </div>
            <div className="mt-8 w-full text-[18px] font-medium leading-snug">
              We are present in the industry since 2021 and have
              <br />
              delivered our clients with top notch quality work and
              <br />
              services.
            </div>
            </div>
            <div className="justify-between ml-[3vw] w-[35%] flex flex-col mt-5 space-y-5 items-center">
                <div className="w-[27vw] h-[27vw] bg-white rounded-full"></div>
               <div className="text-[32px] mt-4 leading-snug roboto-regular">
              <div className="font-normal">Himanshu Verma</div>
              <div className="font-medium capitalize">
                Chief Executive Officer
              </div>
            </div>
            </div>
        </div>
      )}

      {/* Team Members */}
      {isXXS || isXS || isSM?
    <div className="grid w-[90%] grid-cols-2 gap-y-10 justify-items-center">
        {TeamData.map((team, index) => (
          <div key={index} className="w-auto flex flex-col items-center">
            {!team.pic ? (
              <div className="w-[32vw] h-[180px] bg-white rounded-[5px]" />
            ) : (
              <img
                className="w-[32vw] h-[180px] rounded-[5px] bg-cover object-cover"
                src={team.pic}
                alt={team.name}
              />
            )}
            <div className="text-center leading-tight mt-3 text-[14px]">
              <div className="font-normal">{team.name}</div>
              <div className="font-medium w-full">{team.designation}</div>
            </div>
          </div>
        ))}
      </div>  :
    isMD?
    <div className="grid w-[90%] grid-cols-3 gap-y-10 justify-items-center">
        {TeamData.map((team, index) => (
          <div key={index} className="w-auto flex flex-col items-center">
            {!team.pic ? (
              <div className="w-[22vw] h-[160px] bg-white rounded-[5px]" />
            ) : (
              <img
                className="w-[22vw] h-[160px] rounded-[5px] object-cover"
                src={team.pic}
                alt={team.name}
              />
            )}
            <div className="text-center leading-tight mt-3 text-[14px]">
              <div className="font-normal">{team.name}</div>
              <div className="font-medium w-full">{team.designation}</div>
            </div>
          </div>
        ))}
      </div>:
    isLG?
    <div className="grid w-[90%] grid-cols-3 gap-y-10 justify-items-center">
        {TeamData.map((team, index) => (
          <div key={index} className="w-auto flex flex-col items-center">
            {!team.pic ? (
              <div className="w-[22vw] h-[230px] bg-white rounded-[5px]" />
            ) : (
              <img
                className="w-[22vw] h-[230px] rounded-[5px] object-cover"
                src={team.pic}
                alt={team.name}
              />
            )}
            <div className="text-center leading-normal mt-5 text-[18px]">
              <div className="font-normal">{team.name}</div>
              <div className="font-medium w-full">{team.designation}</div>
            </div>
          </div>
        ))}
      </div>:
    isXL?
    <div className="grid w-[85%] grid-cols-3 gap-y-10 justify-items-center">
        {TeamData.map((team, index) => (
          <div key={index} className="w-auto flex flex-col items-center">
            {!team.pic ? (
              <div className="w-[22vw] h-[300px] bg-white rounded-[5px]" />
            ) : (
              <img
                className="w-[22vw] h-[300px] rounded-[5px] object-cover"
                src={team.pic}
                alt={team.name}
              />
            )}
            <div className="text-center leading-normal mt-7 text-[20px]">
              <div className="font-normal">{team.name}</div>
              <div className="font-medium w-full">{team.designation}</div>
            </div>
          </div>
        ))}
      </div>:

      <div className="grid w-[79%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 justify-items-center">
        {TeamData.map((team, index) => (
          <div key={index} className="w-auto flex flex-col items-center">
            {!team.pic ? (
              <div className="w-[216px] h-[265px] bg-white rounded-[5px]" />
            ) : (
              <img
                className="w-[216px] h-[265px] rounded-[5px] object-cover"
                src={team.pic}
                alt={team.name}
              />
            )}
            <div className="text-center leading-tight mt-6 text-[20px]">
              <div className="font-normal">{team.name}</div>
              <div className="font-medium w-full">{team.designation}</div>
            </div>
          </div>
        ))}
      </div>}

      {/* Bottom Banner */}
      <div className="w-full flex flex-col items-center">
        <div
          style={{ backgroundImage: `url(${TeamBanner})` }}
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
            Be a part of the team !
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
            className={` bg-gradient-to-r text-black roboto-regular ${
              isXXS || isXS
                ? "px-4 py-0.5 text-[10px]"
                : isSM
                ? "px-6 py-1 text-[12px]"
                : isMD
                ? "px-8 py-1 text-[14px]"
                : isLG
                ? "px-10 py-1.5 text-[16px]"
                : "px-14 py-2 text-lg sm:text-[20px]"
            } rounded-xl cursor-pointer shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
          >
            Join Us
          </div>
        </div>
        <div className="w-full flex border-t-3 border-[#8AFF84] mt-0 flex-col items-center"></div>
        <div className="w-[90%] md:w-[83%] flex flex-col">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
