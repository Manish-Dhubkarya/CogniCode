import InstaLogo from "../assets/InstaLogo.png";
import LinkedinLogo from "../assets/LinkedInLogo.png";
import FbLogo from "../assets/FbLogo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import FooterAnimation from "../assets/FooterAnimation.gif"
import MapComponent from "../MapLocation/MapComponent";
import { MdOutlineArrowCircleUp } from "react-icons/md";
function Footer() {
  interface QuickLinkProps {
    title: string;
    navigation: {
      pathname: string;
      state?: { selectedService: string };
    } | string;
  }
    
  const QuickLinks:QuickLinkProps[] = [
  {
    title: "Plagiarism Check",
    navigation: {
      pathname: "/contactus",
      state: { selectedService: "Plagiarism Check" },
    },
  },
  {
    title: "Thesis Writing",
    navigation: {
      pathname: "/thesiswriting",
      state: { selectedService: "Thesis Writing" },
    },
  },
  {
    title: "IT Solutions",
    navigation: {
      pathname: "/services",
      state: { selectedService: "IT SOLUTIONS" },
    },
  },
  {
    title: "AI Services",
    navigation: {
      pathname: "/services",
      state: { selectedService: "AI SERVICES" },
    },
  },
  {
    title: "Article Writing",
    navigation: {
      pathname: "/contactus",
      state: { selectedService: "Article Writing" },
    },
  },
  {
    title: "Graphic Designing",
    navigation: {
      pathname: "/contactus",
      state: { selectedService: "Graphic Designing" },
    },
  },
];

  const MeetUs = ["B/2, Mahesh Nagar,", "Tulsi Vihar Colony", "Gwalior, M.P 474002"];
  const navigate=useNavigate()
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
  const isXXL = width > 1200;

  return (
    <div className="libre-franklin text-white">
      <div className="mt-6">
        {/* XXS Layout */}
        {isXXS && (
          <div className="flex flex-col items-start text-left gap-5 py-4">
            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[14px] mb-2 text-left">Quick Links</h3>
              {QuickLinks.map((item, index) => (
                <a
      onClick={() => typeof item.navigation === "string"?navigate(item.navigation)
                    : navigate(item.navigation.pathname, {
                        state: item.navigation.state,})}


                  key={index}
                  className="block text-[12px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Have a Query */}
            <div className="flex flex-col">
              <h3  className="font-semibold text-[14px] mb-2 text-left">Have a Query?</h3>
              <div className="w-[70%] border-t-[1.5px] border-[#8AFF84] my-3"></div>
              <p className="text-[12px] mb-2 text-left">Contact us:</p>
              <a
                href="tel:+917000515617"
                className="block text-[12px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
              >
                +91-7000515617
              </a>
              <a
                href="mailto:office.cognicode@gmail.com"
                className="block text-[12px] hover:text-[#8AFF84] transition-colors duration-200 text-left"
              >
                office.cognicode@gmail.com
              </a>
            </div>

            {/* Meet Us */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[14px] mb-2 text-left">Meet us:</h3>
              {MeetUs.map((item, index) => (
                <p key={index} className="text-[12px] mb-1 text-left">{item}</p>
              ))}
              <h3 className="text-[12px] mt-3 mb-2 text-left">Follow us:</h3>
              <div className="flex select-none justify-start">
                <a onContextMenu={(e) => e.preventDefault()} href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting/?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank"
                      rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={InstaLogo} alt="Instagram" />
                </a>
                <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={LinkedinLogo} alt="LinkedIn" />
                </a>
                <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={FbLogo} alt="Facebook" />
                </a>
              </div>
            </div>
            {/* <img  src={FooterAnimation}/> */}
          </div>
        )}

        {/* XS Layout */}
        {isXS && (
          <div className="flex">
          <div className="flex flex-col items-start text-left gap-5 py-4">
            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[14px] mb-2 text-left">Quick Links</h3>
              {QuickLinks.map((item, index) => (
                <a
      onClick={() => typeof item.navigation === "string"?navigate(item.navigation)
                    : navigate(item.navigation.pathname, {
                        state: item.navigation.state,})}

                  key={index}
                  className="block text-[12px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Have a Query */}
            <div className="flex flex-col">
              <h3 onClick={() => navigate("/contactus", { state: { selectedService: "General query" } })} className="font-semibold text-[14px] mb-2 text-left">Have a Query?</h3>
              <div className="w-[70%] border-t-[1.5px] border-[#8AFF84] my-3"></div>
              <p className="text-[12px] mb-2 text-left">Contact us:</p>
              <a
                href="tel:+917000515617"
                className="block text-[12px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
              >
                +91-7000515617
              </a>
              <a
                href="mailto:office.cognicode@gmail.com"
                className="block text-[12px] hover:text-[#8AFF84] transition-colors duration-200 text-left"
              >
                office.cognicode@gmail.com
              </a>
            </div>

            {/* Meet Us */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[14px] mb-2 text-left">Meet us:</h3>
              {MeetUs.map((item, index) => (
                <p key={index} className="text-[12px] mb-1 text-left">{item}</p>
              ))}
              <h3 className="text-[12px] mt-3 mb-2 text-left">Follow us:</h3>
              <div className="flex select-none justify-start">
                <a onContextMenu={(e) => e.preventDefault()} href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting/?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank"
                      rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={InstaLogo} alt="Instagram" />
                </a>
                <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={LinkedinLogo} alt="LinkedIn" />
                </a>
                <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={FbLogo} alt="Facebook" />
                </a>
              </div>
            </div>
            </div>
             {/* <img className="" src={FooterAnimation}/> */}
          </div>
        )}

        {/* SM Layout */}
        {isSM && (
          <>
          <div className="flex justify-between">
          <div className="flex flex-col items-start text-left gap-5 py-4">
            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[1.1rem] mb-3 text-left">Quick Links</h3>
              {QuickLinks.map((item, index) => (
                <a
      onClick={() => typeof item.navigation === "string"?navigate(item.navigation)
                    : navigate(item.navigation.pathname, {
                        state: item.navigation.state,})}


                  key={index}
                  className="block text-[0.8rem] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Have a Query */}
            <div className="flex flex-col">
              <h3 onClick={() => navigate("/contactus", { state: { selectedService: "General query" } })} className="font-semibold text-[1.1rem] mb-3 text-left">Have a Query?</h3>
              <div className="w-[70%] border-t-[1.5px] border-[#8AFF84] mb-4"></div>
              <p className="text-[0.9rem] mb-2 text-left">Contact us:</p>
              <a
                href="tel:+917000515617"
                className="block text-[0.8rem] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
              >
                +91-7000515617
              </a>
              <a
                href="mailto:office.cognicode@gmail.com"
                className="block text-[0.8rem] hover:text-[#8AFF84] transition-colors duration-200 text-left"
              >
                office.cognicode@gmail.com
              </a>
            </div>

            {/* Meet Us */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[1.1rem] mb-3 text-left">Meet us:</h3>
              {MeetUs.map((item, index) => (
                <p key={index} className="text-[0.8rem] mb-1 text-left">{item}</p>
              ))}
              <h3 className="text-[0.8rem] mt-3 mb-2 text-left">Follow us:</h3>
              <div className="flex select-none justify-start gap-x-3">
                <a onContextMenu={(e) => e.preventDefault()} href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank"
                      rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={InstaLogo} alt="Instagram" />
                </a>
                <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={LinkedinLogo} alt="LinkedIn" />
                </a>
                <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={FbLogo} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
          
             {/* <img className="opacity-60 left-50 bottom-75 w-[70vw] h-[70vh] mr-10" src={FooterAnimation}/> */}
             </div>
             <MapComponent/>
             </>
        )}

        {/* MD Layout */}
        { isMD && (
          <>
          <div className="flex justify-between">
          <div className="flex flex-col items-start text-left gap-5 py-4">
            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[20px] mb-3 text-left">Quick Links</h3>
              {QuickLinks.map((item, index) => (
                <a
      onClick={() => typeof item.navigation === "string"?navigate(item.navigation)
                    : navigate(item.navigation.pathname, {
                        state: item.navigation.state,})}


                  key={index}
                  className="block cursor-pointer text-[16px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Have a Query */}
            <div className="flex flex-col">
              <h3 onClick={() => navigate("/contactus", { state: { selectedService: "General query" } })} className="font-semibold text-[20px] mb-3 text-left">Have a Query?</h3>
              <div className="w-[70%] border-t-[1.5px] border-[#8AFF84] mb-4"></div>
              <p className="text-[18px] mb-2 text-left">Contact us:</p>
              <a
                href="tel:+917000515617"
                className="block text-[16px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
              >
                +91-7000515617
              </a>
              <a
                href="mailto:office.cognicode@gmail.com"
                className="block text-[16px] hover:text-[#8AFF84] transition-colors duration-200 text-left"
              >
                office.cognicode@gmail.com
              </a>
            </div>

            {/* Meet Us */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[20px] mb-3 text-left">Meet us:</h3>
              {MeetUs.map((item, index) => (
                <p key={index} className="text-[16px] mb-1 text-left">{item}</p>
              ))}
              <h3 className="text-[14px] mt-3 mb-2 text-left">Follow us:</h3>
              <div className="flex select-none justify-start gap-x-3">
                <a onContextMenu={(e) => e.preventDefault()} href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank"
                      rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={InstaLogo} alt="Instagram" />
                </a>
                <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={LinkedinLogo} alt="LinkedIn" />
                </a>
                <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[25px]" src={FbLogo} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
          
             {/* <img className="opacity-60" src={FooterAnimation}/> */}
             </div>
             <MapComponent/>
             </>
        )}

        {/* LG Layout */}
        {isLG && (
          <div className="flex flex-col items-center gap-6 py-6 px-0">
              <div className="flex flex-row justify-between items-start w-full">
              {/* Meet Us */}
              <div className="flex items-start w-[25%] flex-col">
                <h3 className="font-semibold text-[18px] mb-7 text-left">Meet us:</h3>
                {MeetUs.map((item, index) => (
                  <p key={index} className="text-[15px] mb-1.5 leading-tight text-left">{item}</p>
                ))}
                <a
                  href="tel:+917000515617"
                  className="block text-[15px] mt-7 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  +91-7000515617
                </a>
                <a
                  href="mailto:office.cognicode@gmail.com"
                  className="block text-[15px] hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  office.cognicode@gmail.com
                </a>
                
              </div>
              
<div className=" flex w-[60%] px-15 justify-start items-start ">
              <MapComponent/>
              </div>
              {/* Have a Query */}
              <div className="flex w-[25%] items-end flex-col">
                <div className="w-fit">
                <h3 onClick={() => navigate("/contactus", { state: { selectedService: "General query" } })} className="font-semibold cursor-pointer hover:scale-110 transition-transform text-[18px] text-right">Have a Query?</h3>
               <div className="flex justify-end">
                <div className="border-t-[1.5px] w-full  border-[#8AFF84] mt-8 mb-7"></div>
                </div>

                
               <h3 className="text-[18px] text-start mb-2">Follow us:</h3>
                <div className="flex justify-start select-none gap-4">
                  <a onContextMenu={(e) => e.preventDefault()} href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting/?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[30px]" src={InstaLogo} alt="Instagram" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[30px]" src={LinkedinLogo} alt="LinkedIn" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[30px]" src={FbLogo} alt="Facebook" />
                  </a>
                </div>
                 <div
      onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex cursor-pointer justify-start items-center space-x-3 mt-7 group"
    >
      <div
        className="text-[15px] mb-2 text-start text-white 
        group-hover:text-[#0e86ff] 
        transition duration-300 ease-in-out 
        group-hover:drop-shadow-[0_0_1px_#0e86ff]"
      >
        Back to top
      </div>
      <MdOutlineArrowCircleUp
        size={24}
        className="mb-1.5 text-white transition duration-300 ease-in-out 
        group-hover:text-[#0e86ff] 
        group-hover:drop-shadow-[0_0_6px_#0e86ff] 
        animate-bounce"
      />
    </div>
              </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col mt-6">
              <h3 className="font-semibold text-[20px] mb-4 text-center">Quick Links</h3>
              <div className="flex flex-row justify-center gap-4 flex-wrap whitespace-nowrap">
                {QuickLinks.map((item, index) => (
                  <a
      onClick={() => typeof item.navigation === "string"?navigate(item.navigation)
                    : navigate(item.navigation.pathname, {
                        state: item.navigation.state,})}


                    key={index}
                    className="block cursor-pointer text-[16px] mx-2 hover:text-[#8AFF84] transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {isXL && (


<div className="flex flex-col items-center py-6 ">
            <div className="flex flex-row justify-between items-start w-full">
              {/* Meet Us */}
              <div className="flex items-start w-[25%] flex-col">
                <h3 className="font-semibold text-[22px] mb-6 text-left">Meet us:</h3>
                {MeetUs.map((item, index) => (
                  <p key={index} className="text-[18px] mb-1.5 leading-tight text-left">{item}</p>
                ))}
                <a
                  href="tel:+917000515617"
                  className="block text-[16px] mt-6 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  +91-7000515617
                </a>
                <a
                  href="mailto:office.cognicode@gmail.com"
                  className="block text-[16px] hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  office.cognicode@gmail.com
                </a>
                
              </div>
              
<div className=" flex w-[60%] justify-start px-20 items-start ">
              <MapComponent/>
              </div>
              {/* Have a Query */}
              <div className="flex w-[25%] items-end flex-col">
                <div className="w-fit">
                <h3 onClick={() => navigate("/contactus", { state: { selectedService: "General query" } })} className={`font-semibold cursor-pointer hover:scale-110 transition-transform text-[22px] text-right`}>Have a Query?</h3>
               <div className="flex justify-end">
                <div className="border-t-[1.5px] w-full  border-[#8AFF84] mt-5 mb-4"></div>
                </div>

                
               <h3 className="text-[18px] text-start mt-4 mb-2">Follow us:</h3>
                <div className="flex justify-start select-none gap-4">
                  <a onContextMenu={(e) => e.preventDefault()} href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting/?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[35px]" src={InstaLogo} alt="Instagram" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[35px]" src={LinkedinLogo} alt="LinkedIn" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[35px]" src={FbLogo} alt="Facebook" />
                  </a>
                </div>
                 <div
      onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex cursor-pointer justify-start items-center space-x-3 mt-7 group"
    >
      <div
        className="text-[15px] mb-2 text-start text-white 
        group-hover:text-[#0e86ff] 
        transition duration-300 ease-in-out 
        group-hover:drop-shadow-[0_0_1px_#0e86ff]"
      >
        Back to top
      </div>
      <MdOutlineArrowCircleUp
        size={24}
        className="mb-1.5 text-white transition duration-300 ease-in-out 
        group-hover:text-[#0e86ff] 
        group-hover:drop-shadow-[0_0_6px_#0e86ff] 
        animate-bounce"
      />
    </div>
              </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col mt-10">
              <h3 className="font-semibold text-[22px] mb-4 text-center">Quick Links</h3>
              <div className="flex flex-row justify-center gap-4 flex-wrap whitespace-nowrap">
                {QuickLinks.map((item, index) => (
                  <a
      onClick={() => typeof item.navigation === "string"?navigate(item.navigation)
                    : navigate(item.navigation.pathname, {
                        state: item.navigation.state,})}

                    key={index}
                    className="block cursor-pointer text-[18px] mx-2 hover:text-[#8AFF84] transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              
            </div>
          </div>

        )}

        {isXXL && (
          // <div className="flex flex-row justify-between md:items-start gap-8 py-8 px-6">
          //   {/* Quick Links */}
          //   <div className="flex flex-col">
          //     <h3 className="font-semibold text-[24px] mb-4">Quick Links</h3>
          //     {QuickLinks.map((item, index) => (
          //       <a
          //         key={index}
          //         className="block text-[20px] leading-tight mb-2 hover:text-[#8AFF84] transition-colors duration-200"
          //       >
          //         {item}
          //       </a>
          //     ))}
          //   </div>

          //   {/* Meet Us */}
          //   <div className="flex flex-col">
          //     <h3 className="font-semibold text-[24px] mb-4">Meet us:</h3>
          //     {MeetUs.map((item, index) => (
          //       <p key={index} className="text-[24px] mb-2">{item}</p>
          //     ))}
          //     <h3 className="text-[20px] mt-4 mb-2">Follow us:</h3>
          //     <div className="flex justify-center gap-3">
          //       <a href="#" className="hover:scale-105 transition-transform duration-200">
          //         <img className="w-[53px]" src={InstaLogo} alt="Instagram" />
          //       </a>
          //       <a href="#" className="hover:scale-105 transition-transform duration-200">
          //         <img className="w-[54px]" src={LinkedinLogo} alt="LinkedIn" />
          //       </a>
          //       <a href="#" className="hover:scale-105 transition-transform duration-200">
          //         <img className="w-[53px]" src={FbLogo} alt="Facebook" />
          //       </a>
          //     </div>
          //   </div>

          //   {/* Have a Query */}
          //   <div className="flex flex-col">
          //     <h3 className="font-semibold text-[24px] mb-4">Have a Query?</h3>
          //     <div className="w-full border-t-[1.5px] border-[#8AFF84] my-6"></div>
          //     <p className="text-[20px] mb-4">Contact us:</p>
          //     <a
          //       href="tel:+917000515617"
          //       className="block text-[20px] mb-2 hover:text-[#8AFF84] transition-colors duration-200"
          //     >
          //       +91-7000515617
          //     </a>
          //     <a
          //       href="mailto:office.cognicode@gmail.com"
          //       className="block text-[20px] hover:text-[#8AFF84] transition-colors duration-200"
          //     >
          //       office.cognicode@gmail.com
          //     </a>
          //   </div>
          // </div>

          // New XXL Flow//
          <div className="flex flex-col items-center py-6 ">
            <div className="flex flex-row justify-between items-start w-full">
              {/* Meet Us */}
              <div className="flex items-start w-[25%] flex-col">
                <h3 className="font-semibold text-[24px] mb-6 text-left">Meet us:</h3>
                {MeetUs.map((item, index) => (
                  <p key={index} className="text-[20px] mb-1.5 leading-tight text-left">{item}</p>
                ))}
                <a
                  href="tel:+917000515617"
                  className="block text-[18px] mt-6 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  +91-7000515617
                </a>
                <a
                  href="mailto:office.cognicode@gmail.com"
                  className="block text-[18px] hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  office.cognicode@gmail.com
                </a>
                
              </div>
              
<div className=" flex w-[60%] justify-start px-20 items-start ">
              <MapComponent/>
              </div>
              {/* Have a Query */}
              <div className="flex w-[25%] items-end flex-col">
                <div className="w-fit">
                <h3 onClick={() => navigate("/contactus", { state: { selectedService: "General query" } })} className={`font-semibold cursor-pointer hover:scale-110 transition-transform text-[24px] text-right`}>Have a Query?</h3>
               <div className="flex justify-end">
                <div className="border-t-[1.5px] w-full  border-[#8AFF84] mt-7 mb-8"></div>
                </div>

                
               <h3 className="text-[20px]  mb-2 text-start">Follow us:</h3>
                <div className="flex justify-start select-none gap-5">
                  <a onContextMenu={(e) => e.preventDefault()} href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting/?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                    <img className="w-[35px]" src={InstaLogo} alt="Instagram" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                    <img className="w-[35px]" src={LinkedinLogo} alt="LinkedIn" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-110 transition-transform duration-200">
                    <img className="w-[35px]" src={FbLogo} alt="Facebook" />
                  </a>
                </div>
                <div
      onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex cursor-pointer justify-start items-center space-x-3 mt-9 group"
    >
      <div
        className="text-[17px] mb-2 text-start text-white 
        group-hover:text-[#0e86ff] 
        transition duration-300 ease-in-out 
        group-hover:drop-shadow-[0_0_1px_#0e86ff]"
      >
        Back to top
      </div>
      <MdOutlineArrowCircleUp
        size={24}
        className="mb-1.5 text-white transition duration-300 ease-in-out 
        group-hover:text-[#0e86ff] 
        group-hover:drop-shadow-[0_0_6px_#0e86ff] 
        animate-bounce"
      />
    </div>
              </div>
              </div>
              
            </div>

            {/* Quick Linksss */}
            <div className="flex flex-col mt-10">
              <h3 className="font-semibold text-[24px] mb-4 text-center">Quick Links</h3>
              <div className="flex flex-row justify-center gap-4 flex-wrap whitespace-nowrap">
                {QuickLinks.map((item, index) => (
                  <a
                  // aaaa
      onClick={() => typeof item.navigation === "string"?navigate(item.navigation)
                    : navigate(item.navigation.pathname, {
                        state: item.navigation.state,})}

                    key={index}
                    className="block cursor-pointer text-[20px] mx-2 hover:text-[#8AFF84] transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`text-white inria-sans-bold-italic w-full  text-center ${
          isXXS || isXS ? 'text-[12px] pt-4' :
          isSM ? 'text-[12px] pt-5' :
          isMD || isLG ? 'text-[18px] pt-6' :
          'text-[24px] pt-8'
        }`}
      >
        Copyright © 2025 CogniCode | Powered By CogniCode
      </div>
    </div>
  );
}

export default Footer;