import NavigationComponent from './NavigationComponent';
import HomeBack from "../assets/HomeBack.gif";
import ITSolutionsBack from "../assets/ITSolutionsBack.png";
import ThesisWritingBack from "../assets/ThesisWritingBack.png";
import AIServices from "../assets/AIServicesBack.png";
import NewEvents from "../assets/NewEventsBack.gif";
import ScrollingFooter from './ScrollingFooter';
import Footer from './Footer';
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import { LuPlus } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollingBanners from './ScrollingBanners/ScrollingBanners';

function Home() {
  const marqueeStyleBase = {
    whiteSpace: "nowrap",
    display: "inline-block",
    fontSize: "24px",
    fontFamily: "Roboto, sans-serif",
};
  const MarqueeStyles = () => (
    <style>
        {`
      @keyframes marqueeLeftToRight {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marqueeRightToLeft {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
    `}
    </style>
);
const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  // Breakpoints
  const isXXS = width <= 200;
  const isXS = width > 200 && width <= 300;
  const isSM = width > 300 && width <= 500;
  const isMD = width > 500 && width <= 700;
  const isLG = width > 700 && width <= 900;
  const isXL = width > 900 && width <= 1200;
  // const is2XL = width > 1200 && width <= 1600;
  // const is3XL = width > 1600;

  interface TypesCardData {
    title: string;
    heading: string;
    back: string;
  }
  const CardsData: TypesCardData[] = [
    { title: "IT SOLUTIONS", heading: "One stop solution", back: ITSolutionsBack },
    { title: "Thesis Writing", heading: "Thoughts to paper", back: ThesisWritingBack },
    { title: "AI SERVICES", heading: "Mindset & Chipset", back: AIServices },
    { title: "NEW EVENTS", heading: "A Fresh Start 2025", back: NewEvents },
  ];
const imageMap = import.meta.glob("../assets/CommentsPics/*.png", { eager: true });
const imageArray = Object.values(imageMap).map((module: any) => module.default as string);

  // Comment Section
//  const CommentReadSection: React.FC = () => {
//   return (
//     <div
//       className={`mt-12 ${
//         isXXS || isXS || isSM || isMD ? 'pt-0 max-h-[250px]' : isLG ? 'max-h-[400px] pt-0' : 'max-h-[497px] pt-30'
//       } overflow-y-auto scrollbar-none mr-6 pl-6`}
//     >
//       {/*  className={${isXXS || isXS || isSM || isMD ? "flex" : "grid"} 
//       gap-2 ${isXXS || isXS || isSM ? 'grid-cols-1' : isMD || isLG ? 'grid-cols-2' : 'grid-cols-3'}} */}
//       <div className={`${isXXS || isXS || isSM?"columns-2":isMD || isLG?"columns-2":"columns-3"} gap-3`}>
//         {imageArray.map((src, index) => (
//           <div
//             key={index}
//             className="mb-4 break-inside-avoid bg-white rounded-xl shadow-md p-4"
//           >
//             <img
//               src={src}
//               alt={`Image ${index + 1}`}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

  // Left to right animation
  const marqueeStyleLeftToRight = {
    ...marqueeStyleBase,
    animation: `marqueeLeftToRight ${isXXS || isXS || isSM ? '15s' : isMD || isLG ? '20s' : '30s'} linear infinite`,
  };

  // Right to left animation
  const marqueeStyleRightToLeft = {
    ...marqueeStyleBase,
    animation: `marqueeRightToLeft ${isXXS || isXS || isSM ? '15s' : isMD || isLG ? '20s' : '30s'} linear infinite`,
  };

  // Text content for scrolling
  const ScrollingText = ["IT Solutions", "Thesis Writing", "AI Services", "UI Designing", "Careers"];
  const repeatedText = [...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText];

  const ConnectByList = [
    "How do you help in thesis writing",
    "How does the pricing work for teams",
    "What other services you provide",
    "How does your refund policy work",
  ];

  return (
    <div
      className={`w-full ${isSM ? "mt-10" : isMD ? "mt-14" : "mt-17"} mb-5 flex roboto-regular flex-col items-center justify-center`}
    >
      <NavigationComponent />
      <div
        className={`w-full ${isXXS || isXS || isSM ? 'h-[180px]' : isMD ? 'h-[220px]' : isLG ? 'h-[280px]' : 'h-[366px]'} flex ${isXXS || isXS || isSM ? 'flex-col' : 'flex-row'} items-center justify-center pb-6`}
        style={{
          backgroundImage: `url(${HomeBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`${isXXS || isXS || isSM ? 'w-full text-center flex flex-row items-center justify-center gap-1' : 'w-[50%] leading-0 flex flex-col items-center'} ${isXXS || isXS || isSM ? 'mt-2' : 'mt-0'}`}
        >
          {isXXS || isXS || isSM ? (
            <div
              className={`uppercase ${isXXS ? 'text-[18px] mt-4' : isXS ? 'text-[18px] mt-4' : 'text-[18px] mt-6'} font-bold tracking-tight`}
              style={{
                backgroundImage: 'linear-gradient(180deg, #8AFF84 0%, #97BBCB 45.5%, #004EB9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              turning Visions to reality
            </div>
          ) : (
            <>
              <div
                className={`uppercase ${isMD ? 'text-[20px] ml-2 tracking-[15px]' : isLG ? 'text-[24px] ml-6 tracking-[20px]' : isXL ? "text-[26px] ml-7 tracking-[17px]" : 'text-[32px] ml-9.5 tracking-[27px]'} font-thin`}
              >
                turning
              </div>
              <div
                className={`uppercase ${isMD ? 'text-[64px] leading-16' : isLG ? 'text-[80px] leading-20' : isXL ? "text-[90px] leading-25" : 'text-[128px] leading-28'} font-bold tracking-tight`}
                style={{
                  backgroundImage: 'linear-gradient(180deg, #8AFF84 0%, #97BBCB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Visions
              </div>
              <div
                className={`uppercase ${isMD ? 'text-[20px] mr-1 tracking-[15px]' : isLG ? 'text-[24px] mr-2 tracking-[20px]' : isXL ? "text-[26px] ml-7 tracking-[17px]" : 'text-[32px] mr-4 tracking-[27px]'} font-thin mt-2`}
              >
                to
              </div>
              <div
                className={`font-bold uppercase ${isMD ? 'text-[64px] leading-16' : isLG ? 'text-[80px] leading-20' : isXL ? "text-[90px] leading-25" : 'text-[128px] font-bold leading-28'} tracking-tight`}
                style={{
                  backgroundImage: 'linear-gradient(180deg, #97BBCB 0%, #004EB9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                reality
              </div>
            </>
          )}
        </div>
        <div
          className={` ${isXXS || isXS || isSM ? 'w-fit mt-2 gap-y-4' : isMD ? "gap-y-6 w-[50%]" : isLG ? "gap-y-5 w-[50%]" : isXL?"gap-y-15 w-[50%]": 'w-[50%] mt-8.5 gap-y-16.5'} flex justify-center text-center font-medium flex-col items-center`}
        >
          <div
            className={`${isXXS || isXS ? 'w-[95%] text-[10px]' : isSM ? 'w-[90%] text-[12px]' : isMD ? 'w-[80%] text-[13px]' : isLG ? 'w-[70%] text-[16px]' : isXL ? 'w-[85%] text-[16px]' : 'w-[510px] text-[18px]'} inter-custom leading-tight`}
          >
            We are present in the industry since 2021 and have delivered our clients with top notch quality work and services. Connect with us for further discussions
          </div>
          <div
          onClick={()=>navigate("/contactus")}
            className={`bg-gradient-to-r text-black roboto-regular ${isXXS || isXS ? 'px-4 py-0.5 text-[10px]' : isSM ? 'px-6 py-1 text-[12px]' : isMD ? 'px-8 py-1 text-[14px]' : isLG ? 'px-10 py-1.5 text-[16px]' : 'px-14 py-2 text-lg sm:text-[20px]'} rounded-xl cursor-pointer shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
          >
            Connect
          </div>
        </div>
      </div>

      {/* What we provide */}
      <div
        className={`text-white p-4 ${isXXS || isXS || isSM ? "leading-5" : isMD ? "leading-7" : isLG || isXL ? "leading-10" : "leading-12"}`}
      >
        <MarqueeStyles />
        <div style={{  overflow: "hidden",
        width: "100%",
        position: "relative",}}>
          <div style={marqueeStyleLeftToRight}>
            {repeatedText.map((text, index) => (
              <span
                key={`top-${index}`}
                className={`inline-block ${isXXS || isXS ? 'mx-2 text-[10px]' : isSM ? 'mx-3 text-[12px]' : isMD ? 'mx-4 text-[14px]' : isLG ? 'mx-6 text-[16px]' : 'mx-12 text-[18px]'} font-light`}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
        <div style={{ overflow: "hidden", width: "100%", position: "relative"}}>
          <div style={marqueeStyleRightToLeft}>
            {repeatedText.map((text, index) => (
              <span
                key={`bottom-${index}`}
                className={`inline-block ${isXXS || isXS ? 'mx-2 text-[10px]' : isSM ? 'mx-3 text-[12px]' : isMD ? 'mx-4 text-[14px]' : isLG ? 'mx-6 text-[16px]' : 'mx-12 text-[18px]'} font-light`}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`w-[85%] flex flex-row ${isXXS || isXS || isSM ? "mt-0 gap-4" : isMD ? "mt-4 gap-6" : "mt-13 gap-10"} px-2 py-2 overflow-x-auto overflow-y-hidden scrollbar-none whitespace-nowrap`}
      >
        
{CardsData.map((item) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full items-center justify-center flex'>
    <div
      onClick={() => navigate("/services", { state: { selectedService: item.title } })}
      key={item.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: `url(${item.back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "2px 0px 4px #1B7BFF, 0px 2px 4px #8AFF84",
        position: "relative",
        cursor:"pointer"
      }}
      className={`flex-col flex ${isXXS || isXS ? 'w-[140px] h-[210px]' : isSM ? 'w-[160px] h-[240px]' : isMD ? 'w-[180px] h-[270px]' : isLG ? 'w-[220px] h-[330px]' : 'w-[264px] h-[399px]'} items-start p-3 justify-start rounded-[10px] flex-shrink-0 transition-all duration-300`}
    >
      {/* Title */}
      <div
        className={`text-gray-300 uppercase ${isXXS || isXS ? 'text-[9px]' : isSM ? 'text-[10px]' : isMD ? 'text-[12px]' : isLG ? 'text-[14px]' : 'text-[16px]'} font-medium transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      >
        {item.title}
      </div>

      {/* Heading */}
      <div
        className={` ${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[14px]' : isMD ? 'text-[16px]' : isLG ? 'text-[20px]' : 'text-[24px]'} font-semibold transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      >
        {item.heading}
      </div>

      {/* Fogg-style overlay */}
      <div
        className={`absolute space-y-3 inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#E8F2FF]/80 to-[#C2DFFF]/90 rounded-[10px] transition-all duration-[1500ms] ease-in-out backdrop-blur-md ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Animated Text */}
        <div
          className={`text-black text-center font-normal transform duration-[1200ms] ${isHovered ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-0 translate-x-0'} ${isXXS || isXS ? 'text-[11px]' : isSM ? 'text-[13px]' : isMD ? 'text-[15px]' : isLG ? 'text-[17px]' : 'text-[20px]'} px-3`}
        >
          Get info about <br />
          our upcoming <br />
          events. <br />
          AND new <br />
          opportunities.
        </div>

        {/* Animated Button */}
        <div
          className={`mt-4 cursor-pointer font-bold rounded-xl  shadow-md shadow-gray-600 ${isXXS || isXS ? 'px-2 py-1 text-[10px]' : isSM ? 'px-3 py-1 text-[12px]' : isMD ? 'px-3 py-1.5 text-[14px]' : isLG ? 'px-4 py-2 text-[16px]' : 'px-6 py-2 text-[18px]'} bg-gradient-to-r from-[#8AFF84] to-[#2C6BC1] text-black`}
        >
          Know More
        </div>
      </div>
    </div>
    </div>
  );
})}


      </div>
      <div
        className={`font-bold ${isXXS || isXS ? 'text-[18px] mt-4' : isSM ? 'text-[22px] mt-6' : isMD ? 'text-[28px] mt-8' : isLG ? 'text-[34px] mt-12' : 'text-[48px] mt-15'} text-center`}
      >
        Why only us ???
      </div>
      <div
        className={`${isXXS || isXS ? "mt-4" : isSM || isMD ? "mt-3" : "mt-8"}`}
      >
        <ScrollingFooter />
      </div>
      {/* comment section: */}
      {/* <div
        className={`${isXXS || isXS || isSM ? 'w-full h-auto' : isMD ? 'w-[90%]' : isLG ? 'w-[80%] h-[350px]' : isXL ? "w-[80%] h-[450px]" : 'w-[941px] h-[497px]'} mx-auto`}
      >
        <CommentReadSection />
      </div> */}
      <div className={`w-full ${isXXS || isXS ? "space-y-4" : isSM || isMD ? "space-y-3" : "space-y-8"}`}>
        <div
        className={`font-bold ${isXXS || isXS ? 'text-[18px] mt-4' : isSM ? 'text-[22px] mt-6' : isMD ? 'text-[28px] mt-8' : isLG ? 'text-[34px] mt-12' : 'text-[48px] mt-15'} text-center`}
      >
        What our clients say !!!
      </div>
      <ScrollingBanners images={imageArray}/>
      </div>
      <div
        className={`${isXXS || isXS || isSM ? "mt-10" : isMD ? "mt-10" : isLG?"mt-14":isXL?"mt-18": "mt-20"} w-full`}
      >
        <div
          style={{
            backgroundImage: `url(${TeamBanner}), linear-gradient(180deg, #8AFF84 0%, #97BBCB 45.5%, #004EB9 100%)`,
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
          className={`roboto-regular flex-col w-full flex sm:gap-y-0.5 md:gap-y-3 lg:gap-y-5 items-center justify-center ${isXXS || isXS ? 'h-[28vh] min-h-[160px] max-h-[220px]' : isSM ? 'h-[30vh] min-h-[180px] max-h-[260px]' : isMD ? 'h-[35vh] min-h-[220px] max-h-[320px]' : isLG ? 'h-[45vh] min-h-[280px] max-h-[380px]' : 'h-[60vh] min-h-[360px] max-h-[456px]'} pb-4 bg-cover bg-center`}
        >
          <div
            className={`text-white mb-3 text-center px-4 ${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[14px]' : isMD ? 'text-[16px]' : isLG ? 'text-[22px]' : isXL ? "text-[30px]" : 'text-xl sm:text-2xl md:text-[36px]'} font-semibold leading-tight dm-sans-regular`}
          >
            Careers
          </div>
          <div
            className={`text-white mb-3 text-center px-4 ${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[14px]' : isMD ? 'text-[16px]' : isLG ? 'text-[22px]' : isXL ? "text-[30px]" : 'text-xl sm:text-2xl md:text-[36px]'} font-semibold leading-tight dm-sans-regular`}
          >
            Grow your career at the heart of change. It's your time to shine.
          </div>
          <div
            className={`text-white mb-3 text-center px-4 ${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[14px]' : isMD ? 'text-[16px]' : isLG ? 'text-[22px]' : isXL ? "text-[30px]" : 'text-xl sm:text-2xl md:text-[36px]'} font-semibold leading-tight dm-sans-regular`}
          >
            Bring your Ingenuity, Curiosity and Big ideas.
          </div>
          <div
          onClick={()=>navigate("/contactus")}
            className={`bg-gradient-to-r text-black ${isXXS || isXS ? 'px-4 py-0.5 text-[10px]' : isSM ? 'px-5 py-1 text-[12px]' : isMD ? 'px-7 py-1 text-[14px]' : isLG ? 'px-8 py-1.5 text-[16px]' : 'px-10 py-1.5 text-lg sm:text-[20px]'} rounded-2xl cursor-pointer mt-3 shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
          >
            Join Us
          </div>
        </div>
        <div
          className={`flex ${isXXS || isXS ? 'mt-6 gap-y-3' : isSM ? 'mt-8 gap-y-4' : isMD ? 'mt-10 gap-y-5' : isLG ? 'mt-12 gap-y-6' : 'mt-15 gap-y-10'} flex-col items-center justify-between`}
        >
          <div
            className={`${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[12px]' : isMD ? 'text-[18px]' : isLG ? 'text-[24px]' : isXL ? "text-[30px]" : 'text-[40px]'} leading-tight font-semibold libre-franklin text-center`}
          >
            <div className='text-[#8AFF84]'>
              Create what the world needs not what you are capable of
            </div>
            <div className={`${isXXS || isXS ? 'text-[10px]' : isSM ? 'text-[10px]' : isMD ? 'text-[14px]' : isLG ? 'text-[16px]' : isXL ? "text-[22px]" : 'text-[32px]'}`}>
              - Dheer Verma</div>
          </div>
          <div
            className={`${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[12px]' : isMD ? 'text-[18px]' : isLG ? 'text-[24px]' : isXL ? "text-[30px]" : 'text-[40px] mt-2'} leading-tight font-semibold libre-franklin text-center`}
          >
            Frequently asked questions
          </div>
          {ConnectByList.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${isXXS || isXS ? 'w-[95%] gap-y-2' : isSM ? 'w-[90%] gap-y-3' : isMD ? 'w-[80%] gap-y-4' : isLG ? 'w-[60%] gap-y-5' : 'w-[45%] gap-y-7'} dm-sans-regular`}
            >
              <div
                className={`flex justify-between items-center ${isXXS || isXS ? 'text-[10px]' : isSM ? 'text-[12px]' : isMD ? 'text-[14px]' : isLG ? 'text-[16px]' : 'text-[18px]'} font-semibold cursor-pointer`}
                onClick={() => navigate("/contactus", { state: { selectedService: item } })}
              >
                <div>{item}</div>
                <LuPlus size={isXXS || isXS ? 12 : isSM ? 14 : isMD ? 16 : isLG ? 18 : 20} />
              </div>
              <div className='w-full border-t-1 border-[#8AFF84]'></div>
            </div>
          ))}
        </div>
        <div
          className={`w-full ${isXXS || isXS ? 'mt-6' : isSM ? 'mt-8' : isMD ? 'mt-10' : isLG ? 'mt-12' : 'mt-30'} flex border-t-2 border-[#8AFF84] flex-col items-center md:items-center`}
        >
          <div
            className={`${isXXS || isXS || isSM ? 'w-[83%]' : isMD || isLG ? 'w-[90%]' : isXL ? "w-[95%]" : 'w-[83%]'} flex flex-col`}
          >
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;