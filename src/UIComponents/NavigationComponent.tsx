import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function NavigationComponent() {
  const Headings = [["About Us", "/aboutus"], ["Services", "/services"], ["Conferences", "/conferences"], ["Publications", "/publications"], ["Careers", "/contactus"]];
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
        <div className="w-full max-w-[90%] mx-auto flex items-center justify-between p-4">
          {/* Mobile Menu Toggle */}
          <div className={`${isDesktop ? "hidden" : "flex"} justify-start`}>
            <IoMdMenu
              className="text-white hover:text-[#0e86ff] cursor-pointer"
              size={isXXS || isXS ? 20 : isSM || isMD ? 22 : 25}
              onClick={toggleMenu}
            />
          </div>
          {/* Desktop Menu */}
          <div className={`${isDesktop ? "flex" : "hidden"} items-center justify-center gap-x-6 w-full ${isXL ? "gap-x-8" : is2XL ? "gap-x-10" : "gap-x-12"}`}>
            <ul className={`flex flex-row font-medium ${isXL ? "space-x-6" : is2XL ? "space-x-8" : "space-x-10"}`}>
              {Headings.map((heading, index) => (
                <li onClick={()=>navigate(heading[1])} key={index} className="flex items-center">
                  <a
                    className="relative block py-2 px-3 text-sm text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#0e86ff] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {heading[0]}
                  </a>
                  <MdArrowDropDown size={isXL ? 18 : 20} color="#ffff" />
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
          className={`${isDesktop ? "hidden" : "block"} fixed top-[57px] left-0 h-[calc(100vh-57px)] ${mobileMenuWidth} bg-custom-gradient backdrop-filter backdrop-blur-sm transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <ul className={`flex flex-col items-center justify-center py-8 font-medium ${isXXS || isXS ? "space-y-4" : "space-y-6"}`}>
            {Headings.map((heading, index) => (
              <>
                <li key={index} className="flex w-full justify-center items-center">
                  <a
                    href="#"
                    className={`block px-3 text-sm text-white hover:text-[#0e86ff] ${isXXS || isXS ? "text-xs" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {heading}
                  </a>
                </li>
                <div className="border-b-[1px] w-full border-[#8AFF84]"></div>
              </>
            ))}
          </ul>
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