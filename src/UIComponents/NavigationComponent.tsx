import { useState, useEffect, ReactNode } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CogniCodeLogo from "../../src/assets/CogniCodeLogo.svg";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";
import { FaCircleInfo } from "react-icons/fa6";
import { GiVideoConference } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

export default function NavigationComponent() {
  interface HeadingProps{
    heading:string;
    path:string;
  }
  const Headings:HeadingProps[] = [{heading:"About Us", path:"/aboutus"}, {heading:"Services", path:"/services"}, {heading:"Conferences", path:"/conferences"}, {heading:"Publications", path:"/publications"}, {heading:"Careers", path:"/ourteam"}];
interface HeadingProps2{
    heading:string;
    path:string;
    icon:ReactNode;
  }
  const Headings_Mobile:HeadingProps2[] = [{heading:"Home", path:"/", icon:<FaHome size={20} color="#00ff00" />}, {heading:"About Us", path:"/aboutus", icon:<FaCircleInfo size={20} color="#00ff00" />}, {heading:"Services", path:"/services", icon: <SiAmazonsimpleemailservice size={20} color="#00ff00" /> }, {heading:"Conferences", path:"/conferences", icon:<GiVideoConference size={20} color="#00ff00"  />}, {heading:"Publications", path:"/publications", icon:<MdOutlinePublishedWithChanges size={20} color="#00ff00" />}, {heading:"Careers", path:"/ourteam", icon:<HiTrendingUp size={20} color="#00ff00"  />}];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const navigate=useNavigate()
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  // Determine menu visibility based on breakpoints
  const isDesktop = isXL || is2XL || is3XL;
  const mobileMenuWidth = isXXS || isXS ? "w-3/4" : isSM || isMD ? "w-2/3" : "w-1/2";

  return (
    <>
      <nav className="bg-custom-gradient-navigation fixed w-full z-50 top-0">
        <div className="w-full max-w-[100%] pr-[4vw] mx-auto flex items-center justify-between px-4">
          {/* Mobile Menu Toggle */}
          
          {/* logo */}
            <img onClick={()=>navigate("/")} className={`${isXXS || isXS|| isSM?"w-22 pt-3.75 pb-2.25":isMD?"w-22 pt-3.75 pb-2.25":isLG?"w-25 pt-4.5 pb-3":isXL?"w-30 pt-3.5 pb-2":"w-50 pt-1.5"} cursor-pointer h-fit`} src={CogniCodeLogo}/>
          <div className={`${isDesktop ? "hidden" : "flex"} justify-start`}>
            <IoMdMenu
              className="text-white hover:text-[#0e86ff] cursor-pointer"
              size={isXXS || isXS ? 20 : isSM || isMD ? 22 : 25}
              onClick={toggleMenu}
            />
          </div>
          {/* Desktop Menu */}
          <div className={`${isDesktop ? "flex" : "hidden"} items-center justify-center gap-x-6 w-full ${isXL ? "gap-x-8" : is2XL ? "gap-x-10" : "gap-x-12"}`}>
            <ul className={`flex flex-row font-medium ${isXL ? "space-x-4" : is2XL ? "space-x-8" : "space-x-10"}`}>
              {Headings.map((item, index) => (
                <li onClick={()=>navigate(item.path)} key={index} className="flex cursor-pointer items-center">
                  <a
                    className="relative flex gap-x-3 py-2 px-3 text-sm text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#0e86ff] after:w-0 after:transition-all after:duration-300 hover:after:w-[95%]"
                  >
                    {item.heading}
                    <span><MdArrowDropDown size={isXL ? 18 : 20} /></span>
                  </a>
                </li>
            
              ))}
            </ul>
          </div>
          {/* Desktop Menu Toggle */}
          <div className={`${isDesktop ? "flex" : "hidden"}`}>
            <IoMdMenu
              className="text-white hover:text-[#0e86ff] cursor-pointer"
              size={isXL ? 22 : 25}
              onClick={toggleMenu}
            />
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${isDesktop ? "hidden" : "block"} fixed top-[57px] right-0 h-[calc(100vh-57px)] ${mobileMenuWidth} bg-custom-gradient backdrop-filter backdrop-blur-sm transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className={`flex flex-col items-center justify-center py-8 font-medium ${isXXS || isXS ? "space-y-4" : "space-y-4"}`}>
  {Headings_Mobile.map((item, index) => (
    <>
      <li onClick={()=>navigate(item.path)} key={index} className="flex w-full items-center">
       <div className="px-4 flex justify-end items-center text-xl text-white">
          {item.icon}
        </div>
        <a
          href="#"
          className={` block  text-sm text-start text-white hover:text-[#0e86ff] ${isXXS || isXS ? "text-xs" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.heading}
        </a>
         
      </li>

      {/* Separator */}
      <div className="border-b-[1px] w-full border-[#8AFF84]"></div>
    </>
  ))}
</ul>

         <div className={`z-5 top-1/2 -translate-y-1/2 ${isXXS || isXS?"text-[50px]": isSM?"text-[55px] top-3/5": isMD?"text-[68px] tracking-[30px]":"text-[70px] tracking-[40px]"} absolute tracking-[20px] overflow-x-hidden saira-stencil-one-regular text-[#9fafc0] right-0 uppercase opacity-20 overflow-hidden rotate-270 translate-x-1/2`}>
  cognicode
</div>

        </div>
      </nav>
      {/* Background Overlay for Blur */}
      {isMenuOpen && (
        <div
          className={`${isDesktop ? "hidden" : "block"} fixed inset-0 bg-black/30 backdrop-filter backdrop-blur-md z-40`}
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}