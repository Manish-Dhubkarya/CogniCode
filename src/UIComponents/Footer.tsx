import InstaLogo from "../assets/InstaLogo.png";
import LinkedinLogo from "../assets/LinkedInLogo.png";
import FbLogo from "../assets/FbLogo.png";
import { useEffect, useState } from "react";

function Footer() {
  const QuickLinks = ["Thesis Writing", "IT solutions", "Ai solutions", "Article Writing", "Graphic Designing", "Plagiarism Check"];
  const MeetUs = ["B/2, Mahesh Nagar,", "Tulsi Vihar Colony", "Gwalior, M.P 474002"];

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

  return (
    <div className="libre-franklin text-white">
      <div
        className={`flex ${isXXS || isXS ? 'flex-col items-center text-center gap-5 py-4 px-3' : isSM ? 'flex-col items-center gap-5 py-4 px-3' : isMD || isLG ? 'flex-col items-center gap-6 py-6 px-4' : 'flex-row justify-between md:items-start gap-8 py-8 px-6'} mt-6`}
      >
        {/* For SM: Quick Links and Meet us at the top, Have a Query below */}
        {isSM && (
          <>
            <div className="flex flex-row justify-between items-start w-full gap-4">
              {/* Quick Links */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-[16px] mb-3 text-left">
                  Quick Links
                </h3>
                {QuickLinks.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-[14px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Meet Us */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-[16px] mb-3 text-right">
                  Meet us :
                </h3>
                {MeetUs.map((item, index) => (
                  <p key={index} className="text-[14px] mb-1 text-right">
                    {item}
                  </p>
                ))}
                <h3 className="text-[14px] mt-3 mb-2 text-right">
                  Follow us :
                </h3>
                <div className="flex justify-end gap-2.5">
                  <a href="#" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[35px]" src={InstaLogo} alt="Instagram" />
                  </a>
                  <a href="#" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[36px]" src={LinkedinLogo} alt="LinkedIn" />
                  </a>
                  <a href="#" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[35px]" src={FbLogo} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>

            {/* Have a Query */}
            <div className="flex flex-col mt-5">
              <h3 className="font-semibold text-[16px] mb-3 text-center">
                Have a Query ?
              </h3>
              <div className="w-full border-t-[1.5px] border-[#8AFF84] my-4"></div>
              <p className="text-[14px] mb-2 text-center">Contact us :</p>
              <a
                href="tel:+917000515617"
                className="block text-[14px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-center"
              >
                +91-7000515617
              </a>
              <a
                href="mailto:office.cognicode@gmail.com"
                className="block text-[14px] hover:text-[#8AFF84] transition-colors duration-200 text-center"
              >
                office.cognicode@gmail.com
              </a>
            </div>
          </>
        )}

        {/* For MD and LG: Meet us and Have a Query at the top */}
        {(isMD || isLG) && (
          <div className="flex flex-row justify-between items-start w-full gap-6">
            {/* Meet Us */}
            <div className="flex flex-col">
              <h3
                className={`font-semibold ${isMD ? 'text-[18px] mb-3' : 'text-[20px] mb-4'} text-left`}
              >
                Meet us :
              </h3>
              {MeetUs.map((item, index) => (
                <p
                  key={index}
                  className={`${isMD || isLG ? 'text-[16px] mb-1.5' : ''} text-left`}
                >
                  {item}
                </p>
              ))}
              <h3
                className={`${isMD || isLG ? 'text-[16px] mt-4 mb-2' : ''} text-left`}
              >
                Follow us :
              </h3>
              <div className={`flex justify-start ${isMD || isLG ? 'gap-3' : ''}`}>
                <a href="#" className="hover:scale-105 transition-transform duration-200">
                  <img
                    className={`${isMD || isLG ? 'w-[40px]' : ''}`}
                    src={InstaLogo}
                    alt="Instagram"
                  />
                </a>
                <a href="#" className="hover:scale-105 transition-transform duration-200">
                  <img
                    className={`${isMD || isLG ? 'w-[41px]' : ''}`}
                    src={LinkedinLogo}
                    alt="LinkedIn"
                  />
                </a>
                <a href="#" className="hover:scale-105 transition-transform duration-200">
                  <img
                    className={`${isMD || isLG ? 'w-[40px]' : ''}`}
                    src={FbLogo}
                    alt="Facebook"
                  />
                </a>
              </div>
            </div>

            {/* Have a Query */}
            <div className="flex flex-col">
              <h3
                className={`font-semibold ${isMD ? 'text-[18px] mb-3' : 'text-[20px] mb-4'} text-right`}
              >
                Have a Query ?
              </h3>
              <div
                className={`w-full border-t-[1.5px] border-[#8AFF84] ${isMD || isLG ? 'my-5' : ''}`}
              ></div>
              <p
                className={`${isMD || isLG ? 'text-[16px] mb-3' : ''} text-right`}
              >
                Contact us :
              </p>
              <a
                href="tel:+917000515617"
                className={`block ${isMD || isLG ? 'text-[16px] mb-1.5' : ''} hover:text-[#8AFF84] transition-colors duration-200 text-right`}
              >
                +91-7000515617
              </a>
              <a
                href="mailto:office.cognicode@gmail.com"
                className={`block ${isMD || isLG ? 'text-[16px]' : ''} hover:text-[#8AFF84] transition-colors duration-200 text-right`}
              >
                office.cognicode@gmail.com
              </a>
            </div>
          </div>
        )}

        {/* For Other Breakpoints (XXS, XS, XL): Default Layout */}
        {!(isSM || isMD || isLG) && (
          <>
            {/* Quick Links */}
            <div className="flex flex-col">
              <h3
                className={`font-semibold ${isXXS || isXS ? 'text-[14px] mb-2' : 'text-[24px] mb-4' }`}
              >
                Quick Links
              </h3>
              {QuickLinks.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`block ${isXXS || isXS ? 'text-[12px] mb-1' :'text-[20px] leading-tight mb-2'} hover:text-[#8AFF84] transition-colors duration-200`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Meet Us */}
            <div className="flex flex-col">
              <h3
                className={`font-semibold ${isXXS || isXS ? 'text-[14px] mb-2' : 'text-[24px] mb-4'}`}
              >
                Meet us :
              </h3>
              {MeetUs.map((item, index) => (
                <p
                  key={index}
                  className={`${isXXS || isXS ? 'text-[12px] mb-1' : 'text-[24px] mb-2'}`}
                >
                  {item}
                </p>
              ))}
              <h3
                className={`${isXXS || isXS ? 'text-[12px] mt-3 mb-2' : 'text-[20px] mt-4 mb-2'}`}
              >
                Follow us :
              </h3>
              <div
                className={`flex justify-center ${isXXS || isXS ? 'gap-2' : 'gap-3'}`}
              >
                <a href="#" className="hover:scale-105 transition-transform duration-200">
                  <img
                    className={`${isXXS || isXS ? 'w-[30px]' : isXL ? 'w-[53px]' : 'w-[53px]'}`}
                    src={InstaLogo}
                    alt="Instagram"
                  />
                </a>
                <a href="#" className="hover:scale-105 transition-transform duration-200">
                  <img
                    className={`${isXXS || isXS ? 'w-[31px]' : isXL ? 'w-[54px]' : 'w-[53px]'}`}
                    src={LinkedinLogo}
                    alt="LinkedIn"
                  />
                </a>
                <a href="#" className="hover:scale-105 transition-transform duration-200">
                  <img
                    className={`${isXXS || isXS ? 'w-[30px]' : isXL ? 'w-[53px]' : 'w-[53px]'}`}
                    src={FbLogo}
                    alt="Facebook"
                  />
                </a>
              </div>
            </div>

            {/* Have a Query */}
            <div className="flex flex-col">
              <h3
                className={`font-semibold ${isXXS || isXS ? 'text-[14px] mb-2' : 'text-[24px] mb-4'}`}
              >
                Have a Query ?
              </h3>
              <div
                className={`w-full border-t-[1.5px] border-[#8AFF84] ${isXXS || isXS ? 'my-3' : 'my-6'}`}
              ></div>
              <p
                className={`${isXXS || isXS ? 'text-[12px] mb-2' : 'text-[20px] mb-4'}`}
              >
                Contact us :
              </p>
              <a
                href="tel:+917000515617"
                className={`block ${isXXS || isXS ? 'text-[12px] mb-1' : isXL ? 'text-[20px] mb-2' : ''} hover:text-[#8AFF84] transition-colors duration-200`}
              >
                +91-7000515617
              </a>
              <a
                href="mailto:office.cognicode@gmail.com"
                className={`block ${isXXS || isXS ? 'text-[12px]' : isXL ? 'text-[20px]':""} hover:text-[#8AFF84] transition-colors duration-200`}
              >
                office.cognicode@gmail.com
              </a>
            </div>
          </>
        )}

        {/* Quick Links: Centered Below for MD and LG */}
        {(isMD || isLG) && (
          <div className="flex flex-col mt-6">
            <h3
              className={`font-semibold ${isMD ? 'text-[18px] mb-3' : 'text-[20px] mb-4'} text-center`}
            >
              Quick Links
            </h3>
            <div className="flex flex-row justify-center gap-4 flex-wrap whitespace-nowrap">
              {QuickLinks.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`block ${isMD || isLG ? 'text-[16px] mx-2' : ''} hover:text-[#8AFF84] transition-colors duration-200`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div
        className={`text-white inria-sans-bold-italic text-center ${isXXS || isXS ? 'text-[12px] pt-4' : isSM ? 'text-[14px] pt-5' : isMD || isLG ? 'text-[18px] pt-6' : 'text-[24px] pt-8'}`}
      >
        Copyright © 2025 CogniCode | Powered By CogniCode
      </div>
    </div>
  );
}

export default Footer;