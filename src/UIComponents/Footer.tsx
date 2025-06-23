import InstaLogo from "../assets/InstaLogo.png";
import LinkedinLogo from "../assets/LinkedInLogo.png";
import FbLogo from "../assets/FbLogo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterAnimation from "../assets/FooterAnimation.gif"
function Footer() {
  const QuickLinks = ["Plagiarism Check", "Thesis Writing",   "IT solutions", "AI solutions",  "Article Writing",    "Graphic Designing"];
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
  const isXL = width > 900;

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
      onClick={() => navigate("/services")}

                  key={index}
                  className="block text-[12px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  {item}
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
            <img src={FooterAnimation}/>
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
      onClick={() => navigate("/services")}

                  key={index}
                  className="block text-[12px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  {item}
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
             <img className="" src={FooterAnimation}/>
          </div>
        )}

        {/* SM Layout */}
        {isSM && (
          <div className="flex">
          <div className="flex flex-col items-start text-left gap-5 py-4">
            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[16px] mb-3 text-left">Quick Links</h3>
              {QuickLinks.map((item, index) => (
                <a
      onClick={() => navigate("/services")}

                  key={index}
                  className="block text-[14px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Have a Query */}
            <div className="flex flex-col">
              <h3 onClick={() => navigate("/contactus", { state: { selectedService: "General query" } })} className="font-semibold text-[16px] mb-3 text-left">Have a Query?</h3>
              <div className="w-[70%] border-t-[1.5px] border-[#8AFF84] mb-4"></div>
              <p className="text-[14px] mb-2 text-left">Contact us:</p>
              <a
                href="tel:+917000515617"
                className="block text-[14px] mb-1 hover:text-[#8AFF84] transition-colors duration-200 text-left"
              >
                +91-7000515617
              </a>
              <a
                href="mailto:office.cognicode@gmail.com"
                className="block text-[14px] hover:text-[#8AFF84] transition-colors duration-200 text-left"
              >
                office.cognicode@gmail.com
              </a>
            </div>

            {/* Meet Us */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[16px] mb-3 text-left">Meet us:</h3>
              {MeetUs.map((item, index) => (
                <p key={index} className="text-[14px] mb-1 text-left">{item}</p>
              ))}
              <h3 className="text-[14px] mt-3 mb-2 text-left">Follow us:</h3>
              <div className="flex select-none justify-start">
                <a onContextMenu={(e) => e.preventDefault()} href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank"
                      rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[30px]" src={InstaLogo} alt="Instagram" />
                </a>
                <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[30px]" src={LinkedinLogo} alt="LinkedIn" />
                </a>
                <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-105 transition-transform duration-200">
                  <img className="w-[30px]" src={FbLogo} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
             <img className="" src={FooterAnimation}/>
          </div>
        )}

        {/* MD Layout */}
        {isMD && (
          <div className="flex flex-col items-center gap-6 py-6 px-4">
            <div className="flex flex-row justify-between items-start w-full gap-6">
              {/* Meet Us */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-[18px] mb-3 text-left">Meet us:</h3>
                {MeetUs.map((item, index) => (
                  <p key={index} className="text-[16px] mb-1.5 text-left">{item}</p>
                ))}
                <h3 className="text-[16px] mt-4 mb-2 text-left">Follow us:</h3>
                <div className="flex select-none justify-start gap-3">
                  <a onContextMenu={(e) => e.preventDefault()}  href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank"
                      rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[40px]" src={InstaLogo} alt="Instagram" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[41px]" src={LinkedinLogo} alt="LinkedIn" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[40px]" src={FbLogo} alt="Facebook" />
                  </a>
                </div>
              </div>

              {/* Have a Query */}
              <div className="flex flex-col">
                <h3 onClick={() => navigate("/contactus", { state: { selectedService: "General query" } })} className="font-semibold  cursor-pointer hover:scale-110 transition-transform text-[18px]  text-right">Have a Query?</h3>
               <div className="flex justify-end">
                <div className="w-[70%] border-t-[1.5px]   border-[#8AFF84] my-3"></div>
                </div>
                <p className="text-[16px] mb-3 text-right">Contact us:</p>
                <a
                  href="tel:+917000515617"
                  className="block text-[16px] mb-1.5 hover:text-[#8AFF84] transition-colors duration-200 text-right"
                >
                  +91-7000515617
                </a>
                <a
                  href="mailto:office.cognicode@gmail.com"
                  className="block text-[16px] hover:text-[#8AFF84] transition-colors duration-200 text-right"
                >
                  office.cognicode@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col mt-6">
              <h3 className="font-semibold text-[18px] mb-3 text-center">Quick Links</h3>
              <div className="flex flex-row justify-center gap-x-3 gap-y-2 flex-wrap whitespace-nowrap">
                {QuickLinks.map((item, index) => (
                  
                  <a
      onClick={() => navigate("/services")}

                    key={index}
                    className="block text-[16px] mx-2 hover:text-[#8AFF84] transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LG Layout */}
        {isLG && (
          <div className="flex flex-col items-center gap-6 py-6 px-4">
            <div className="flex flex-row justify-between items-start w-full gap-6">
              {/* Meet Us */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-[20px] mb-4 text-left">Meet us:</h3>
                {MeetUs.map((item, index) => (
                  <p key={index} className="text-[16px] mb-1.5 text-left">{item}</p>
                ))}
                <h3 className="text-[16px] mt-4 mb-2 text-left">Follow us:</h3>
                <div className="flex select-none justify-start gap-3">
                  <a onContextMenu={(e) => e.preventDefault()} href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank"
                      rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[40px]" src={InstaLogo} alt="Instagram" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[41px]" src={LinkedinLogo} alt="LinkedIn" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[40px]" src={FbLogo} alt="Facebook" />
                  </a>
                </div>
              </div>

              {/* Have a Query */}
              <div className="flex flex-col">
                <h3 onClick={() => navigate("/contactus", { state: { selectedService: "General query" } })} className="font-semibold cursor-pointer hover:scale-110 transition-transform text-[20px]  text-right">Have a Query?</h3>
                <div className="flex justify-end">
                <div className="w-[70%] border-t-[1.5px]   border-[#8AFF84] my-3"></div>
                </div>
                <p className="text-[16px] mb-3 text-right">Contact us:</p>
                <a
                  href="tel:+917000515617"
                  className="block text-[16px] mb-1.5 hover:text-[#8AFF84] transition-colors duration-200 text-right"
                >
                  +91-7000515617
                </a>
                <a
                  href="mailto:office.cognicode@gmail.com"
                  className="block text-[16px] hover:text-[#8AFF84] transition-colors duration-200 text-right"
                >
                  office.cognicode@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col mt-6">
              <h3 className="font-semibold text-[20px] mb-4 text-center">Quick Links</h3>
              <div className="flex flex-row justify-center gap-4 flex-wrap whitespace-nowrap">
                {QuickLinks.map((item, index) => (
                  <a
      onClick={() => navigate("/services")}

                    key={index}
                    className="block text-[16px] mx-2 hover:text-[#8AFF84] transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* XL Layout */}
        {isXL && (
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

          // New XL Flow//
          <div className="flex flex-col items-center gap-6 py-6 ">
            <div className="flex flex-row justify-between items-start w-full gap-6">
              {/* Meet Us */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-[24px] mb-4 text-left">Meet us:</h3>
                {MeetUs.map((item, index) => (
                  <p key={index} className="text-[20px] mb-1.5 text-left">{item}</p>
                ))}
                <h3 className="text-[20px] mt-4 mb-2 text-left">Follow us:</h3>
                <div className="flex justify-start select-none gap-3">
                  <a onContextMenu={(e) => e.preventDefault()} href={InstaLogo.startsWith("http") ? InstaLogo : `https://www.instagram.com/cognicodethesiswriting/?igsh=Y2M4anR2NWxtdXZi`}
                      target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[40px]" src={InstaLogo} alt="Instagram" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href={LinkedinLogo.startsWith("http") ? LinkedinLogo : `https://www.linkedin.com/company/cognicodindia/`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[41px]" src={LinkedinLogo} alt="LinkedIn" />
                  </a>
                  <a onContextMenu={(e) => e.preventDefault()} href="#" className="hover:scale-105 transition-transform duration-200">
                    <img className="w-[40px]" src={FbLogo} alt="Facebook" />
                  </a>
                </div>
              </div>

              {/* Have a Query */}
              <div className="flex flex-col">
                <h3 onClick={() => navigate("/contactus", { state: { selectedService: "General query" } })} className="font-semibold cursor-pointer hover:scale-110 transition-transform text-[24px] text-right">Have a Query?</h3>
               <div className="flex justify-end">
                <div className="w-[80%] border-t-[1.5px]   border-[#8AFF84] my-3"></div>
                </div>
                <p className="text-[20px] mb-3 text-right">Contact us:</p>
                <a
                  href="tel:+917000515617"
                  className="block text-[18px] mb-1.5 hover:text-[#8AFF84] transition-colors duration-200 text-right"
                >
                  +91-7000515617
                </a>
                <a
                  href="mailto:office.cognicode@gmail.com"
                  className="block text-[18px] hover:text-[#8AFF84] transition-colors duration-200 text-right"
                >
                  office.cognicode@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col mt-0">
              <h3 className="font-semibold text-[24px] mb-4 text-center">Quick Links</h3>
              <div className="flex flex-row justify-center gap-4 flex-wrap whitespace-nowrap">
                {QuickLinks.map((item, index) => (
                  <a
      onClick={() => navigate("/services")}
                    key={index}
                    className="block text-[20px] mx-2 hover:text-[#8AFF84] transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`text-white inria-sans-bold-italic text-center ${
          isXXS || isXS ? 'text-[12px] pt-4' :
          isSM ? 'text-[14px] pt-5' :
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