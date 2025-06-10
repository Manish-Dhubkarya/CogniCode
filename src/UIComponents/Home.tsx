import NavigationComponent from './NavigationComponent';
import HomeBack from "../assets/HomeBack.gif";
import ITSolutionsBack from "../assets/ITSolutionsBack.png";
import ThesisWritingBack from "../assets/ITSolutionsBack.png";
import AIServices from "../assets/AIServicesBack.png";
import NewEvents from "../assets/NewEventsBack.gif";
import ScrollingFooter from './ScrollingFooter';
import Footer from './Footer';
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import { LuPlus } from 'react-icons/lu';
import MarqueeStyles, { HomeStyles as style } from '../UIComponentCSS/HomeCss';
import { useEffect, useState } from 'react';

function Home() {
  const { home: styles, container: containerStyle, marquee: marqueeStyleBase } = style;
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
  interface Comment {
    id: number;
    name: string;
    message: string;
    timeAgo: string;
    likes: number;
    dislikes: number;
  }

  const comments: Comment[] = [
    {
      id: 1,
      name: "Akanksha Soni",
      message: "Just awesome. The best coder I have found...",
      timeAgo: "2 years ago",
      likes: 6,
      dislikes: 2,
    },
    {
      id: 2,
      name: "Ayush Gour",
      message: "If you're seeking for quality work, this is the place...",
      timeAgo: "1 year ago",
      likes: 4,
      dislikes: 1,
    },
    {
      id: 3,
      name: "Manas Dwivedi",
      message: "I really appreciate the work done by the team...",
      timeAgo: "2 years ago",
      likes: 3,
      dislikes: 0,
    },
    {
      id: 4,
      name: "Charlie MN",
      message: "Very good service. Very frank and on-time delivery...",
      timeAgo: "2 years ago",
      likes: 5,
      dislikes: 1,
    },
    {
      id: 5,
      name: "Bharat Verma",
      message: "Fully satisfied with the services. Would highly recommend...",
      timeAgo: "1 year ago",
      likes: 7,
      dislikes: 0,
    },
    {
      id: 7,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    },
    {
      id: 8,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    },
    {
      id: 9,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    },
    {
      id: 10,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    },
    {
      id: 11,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    },
    {
      id: 12,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    },
    {
      id: 13,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    },
  ];

  // Comment Section
  const CommentReadSection: React.FC = () => {
    return (
      <div
        // className={styles.container}
        className={`mt-12  ${isXXS || isXS || isSM || isMD ? 'pt-0' : isLG ? 'max-h-[400px] pt-0' : 'max-h-[500px] pt-30'} overflow-y-auto scrollbar-none mr-6 pl-6`}
      >
        <div
          // className={styles.comment}
          className={` ${isXXS || isXS || isSM || isMD? "flex":"grid"} gap-2 ${isXXS || isXS || isSM ? 'grid-cols-1' : isMD || isLG ? 'grid-cols-2' : 'grid-cols-3'}`}
        >
          {comments.map((comment) => (
            <div
              key={comment.id}
              // className={styles.commentMain}
              className='bg-white rounded-xl shadow-md p-4 text-gray-800 min-w-[200px]'
            >
              <div
                // className={styles.commentName}
                className='font-semibold mb-1'
              >
                {comment.name}
              </div>
              <div
                // className={styles.commentTime}
                className='text-sm text-gray-500 mb-2'
              >
                {comment.timeAgo}
              </div>
              <p
                // className={styles.commentMessage}
                className='text-sm mb-4'
              >
                {comment.message}
              </p>
              <div
                // className={styles.commentLikeDislike}
                className='flex gap-4 text-sm text-gray-600'
              >
                <span>👍 {comment.likes}</span>
                <span>👎 {comment.dislikes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

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
      // className={styles.mainContainer}
      className={`w-full ${ isSM?"mt-10":isMD?"mt-14": "mt-17"} mb-10 flex roboto-regular flex-col items-center justify-center`}
    >
      <NavigationComponent />
      <div
        // className={styles.homeBanner}
        className={`w-full ${isXXS || isXS || isSM ? 'h-[180px]' : isMD ? 'h-[220px]' : isLG ? 'h-[280px]' : 'h-[366px]'} flex ${isXXS || isXS || isSM ? 'flex-col' : 'flex-row'} items-center justify-center pb-6`}
        style={{
          backgroundImage: `url(${HomeBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          // className={styles.homeBannerTextMain}
          className={` ${isXXS || isXS || isSM ? 'w-full text-center flex flex-row items-center justify-center gap-1 ' : 'w-[50%] leading-0 flex flex-col items-center'} ${isXXS || isXS || isSM ? 'mt-2' : 'mt-0'}`}
        >
          {isXXS || isXS || isSM ? (
            <div
              className={`uppercase ${isXXS ? 'text-[18px] mt-2' : isXS ? 'text-[18px] mt-2' : 'text-[18px] mt-2'} font-bold tracking-tight`}
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
                // className={styles.homeTurningText}
                className={`uppercase ${isMD ? 'text-[20px] ml-2 tracking-[15px]' : isLG ? 'text-[24px] ml-6 tracking-[20px]' : isXL?"text-[26px] ml-7 tracking-[17px]"  : 'text-[32px] ml-9.5 tracking-[27px]'} font-thin`}
              >
                turning
              </div>
              <div
                // className={styles.homeBannerVisionText}
                className={`uppercase ${isMD ? 'text-[64px] leading-16' : isLG ? 'text-[80px] leading-20' : isXL?"text-[90px] leading-25": 'text-[128px] leading-28'} tracking-tight`}
                style={{
                  backgroundImage: 'linear-gradient(180deg, #8AFF84 0%, #97BBCB 55.5%, #004EB9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Visions
              </div>
              <div
                // className={styles.homeBannerToText}
                className={`uppercase ${isMD ? 'text-[20px] mr-1 tracking-[15px]' : isLG ? 'text-[24px] mr-2 tracking-[20px]' : isXL?"text-[26px] ml-7 tracking-[17px]"  : 'text-[32px] mr-4 tracking-[27px]'} font-thin mt-2`}
              >
                to
              </div>
              <div
                // className={styles.homeBannerRealityText}
                className={`uppercase ${isMD ? 'text-[64px] leading-16' : isLG ? 'text-[80px] leading-20' : isXL?"text-[90px] leading-25" : 'text-[128px] leading-28'} tracking-tight`}
                style={{
                  backgroundImage: 'linear-gradient(180deg, #8AFF84 0%, #97BBCB 55.5%, #004EB9 100%)',
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
          // className={styles.homeBannerContentMain}
className={`
  ${isXXS || isXS || isSM ? 'w-fit mt-2 gap-y-4' : isMD?"gap-y-6 w-[50%]": isLG?"gap-y-7 w-[50%]": 'w-[50%] mt-9 gap-y-14'}
  flex justify-center text-center font-medium flex-col items-center
`}        >
          <div
            // className={styles.homeBannerContent}
            className={`${isXXS || isXS ? 'w-[95%] text-[10px]' : isSM ? 'w-[90%] text-[12px]' : isMD ? 'w-[80%] text-[14px]' : isLG ? 'w-[70%] text-[16px]' : isXL ? 'w-[85%] text-[16px]' : 'w-[510px] text-[18px]'} inter-custom leading-tight`}
          >
            We are present in the industry since 2021 and have delivered our clients with top notch quality work and services. Connect with us for further discussions
          </div>
          <div
            // className={styles.homeBannerConnectText}
            className={` bg-gradient-to-r text-black roboto-regular ${isXXS || isXS ? 'px-4 py-0.5 text-[10px]' : isSM ? 'px-6 py-1 text-[12px]' : isMD ? 'px-8 py-1 text-[14px]' : isLG ? 'px-10 py-1.5 text-[16px]' : 'px-14 py-2 text-lg sm:text-[20px]'} rounded-xl cursor-pointer shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
          >
            Connect
          </div>
        </div>
      </div>

      {/* What we provide */}
      <div
        // className={styles.marqueeTextMain}
        className={`text-white p-4 ${isXXS || isXS || isSM?"leading-5":isMD?"leading-7":isLG || isXL?"leading-10":"leading-12"}`}
      >
        <MarqueeStyles />
        <div style={{ ...style.container, position: 'relative' }}>
          <div style={marqueeStyleLeftToRight}>
            {repeatedText.map((text, index) => (
              <span
                key={`top-${index}`}
                // className={styles.marqueeText}
                className={`inline-block ${isXXS || isXS ? 'mx-2 text-[10px]' : isSM ? 'mx-3 text-[12px]' : isMD ? 'mx-4 text-[14px]' : isLG ? 'mx-6 text-[16px]' : 'mx-12 text-[18px]'} font-light`}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
        <div style={containerStyle as React.CSSProperties}>
          <div style={marqueeStyleRightToLeft}>
            {repeatedText.map((text, index) => (
              <span
                key={`bottom-${index}`}
                // className={styles.marqueeText2}
                className={`inline-block ${isXXS || isXS ? 'mx-2 text-[10px]' : isSM ? 'mx-3 text-[12px]' : isMD ? 'mx-4 text-[14px]' : isLG ? 'mx-6 text-[16px]' : 'mx-12 text-[18px]'} font-light`}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        // className={styles.cardDataMain}
        className={`w-[85%] flex flex-row ${isXXS || isXS || isSM ? "mt-0 gap-4" : isMD ? "mt-4 gap-6" : "mt-13 gap-10"} px-2 py-2 overflow-x-auto overflow-y-hidden scrollbar-none whitespace-nowrap`}
      >
        {CardsData.map((item) => (
          <div
            key={item.title}
            style={{
              backgroundImage: `url(${item.back})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "2px 0px 4px #1B7BFF, 0px 2px 4px #8AFF84",
            }}
            // className={styles.cardData}
            className={`flex-col flex ${isXXS || isXS ? 'w-[140px] h-[210px]' : isSM ? 'w-[160px] h-[240px]' : isMD ? 'w-[180px] h-[270px]' : isLG ? 'w-[220px] h-[330px]' : 'w-[264px] h-[399px]'} items-start p-3 justify-start rounded-[10px] flex-shrink-0`}
          >
            <div
              // className={styles.cardTitle}
              className={`uppercase ${isXXS || isXS ? 'text-[9px]' : isSM ? 'text-[10px]' : isMD ? 'text-[12px]' : isLG ? 'text-[14px]' : 'text-[16px]'} font-medium`}
            >
              {item.title}
            </div>
            <div
              // className={styles.cardHeading}
              className={`${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[14px]' : isMD ? 'text-[16px]' : isLG ? 'text-[20px]' : 'text-[24px]'} font-semibold`}
            >
              {item.heading}
            </div>
          </div>
        ))}
      </div>
      <div
        // className={styles.whyOnlyText}
        className={`font-bold ${isXXS || isXS ? 'text-[18px] mt-4' : isSM ? 'text-[22px] mt-6' : isMD ? 'text-[28px] mt-8' : isLG ? 'text-[34px] mt-12' : 'text-[48px] mt-15'} text-center`}
      >
        Why only us ???
      </div>
      <div
        // className={styles.scrollFooter}
        className={`${isXXS || isXS? "mt-4": isSM || isMD? "mt-3": "mt-8"}`}
      >
        <ScrollingFooter />
      </div>
      <div
        // className={styles.comments}
        className={`${isXXS || isXS || isSM ? 'w-full h-auto' : isMD ? 'w-[90%]' : isLG ? 'w-[80%] h-[350px]' :isXL?"w-[80%] h-[450px]" : 'w-[941px] h-[497px]'} mx-auto`}
      >
        <CommentReadSection />
      </div>
      <div
        // className={styles.teamBannerMain}
        className={`${isXXS || isXS || isSM ? "mt-10":isMD?"mt-12":"mt-40"} w-full`}
      >
        <div
style={{
  backgroundImage: `url(${TeamBanner}), linear-gradient(180deg, #8AFF84 0%, #97BBCB 45.5%, #004EB9 100%)`,
  backgroundSize: "cover, cover", // Specify for both image and gradient
  backgroundPosition: "center, center", // Specify for both
  backgroundRepeat: "no-repeat, no-repeat", // Specify for both
}}
          // className={styles.teamBannerMain2}
          className={`roboto-regular flex-col w-full flex sm:gap-y-0.5 md:gap-y-3 lg:gap-y-5 items-center justify-center ${isXXS || isXS ? 'h-[28vh] min-h-[160px] max-h-[220px]' : isSM ? 'h-[30vh] min-h-[180px] max-h-[260px]' : isMD ? 'h-[35vh] min-h-[220px] max-h-[320px]' : isLG ? 'h-[45vh] min-h-[280px] max-h-[380px]' : 'h-[60vh] min-h-[360px] max-h-[456px]'} pb-4 bg-cover bg-center`}
        >
          <div
            // className={styles.teamBannerCareers}
            className={`text-white mb-3 text-center px-4 ${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[14px]' : isMD ? 'text-[16px]' : isLG ? 'text-[22px]' : isXL?"text-[30px]": 'text-xl sm:text-2xl md:text-[36px]'} font-semibold leading-tight dm-sans-regular`}
          >
            Careers
          </div>
          <div
            // className={styles.teamBannerGrowCareer}
            className={`text-white mb-3 text-center px-4 ${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[14px]' : isMD ? 'text-[16px]' : isLG ? 'text-[22px]' : isXL?"text-[30px]" :  'text-xl sm:text-2xl md:text-[36px]'} font-semibold leading-tight dm-sans-regular`}
          >
            Grow your career at the heart of change. It's your time to shine.
          </div>
          <div
            // className={styles.teamBannerBringYourIngunity}
            className={`text-white mb-3 text-center px-4 ${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[14px]' : isMD ? 'text-[16px]' : isLG ? 'text-[22px]' : isXL?"text-[30px]" : 'text-xl sm:text-2xl md:text-[36px]'} font-semibold leading-tight dm-sans-regular`}
          >
            Bring your Ingenuity, Curiosity and Big ideas.
          </div>
          <div
            // className={styles.teambannerJoinUsText}
            className={`bg-gradient-to-r text-black ${isXXS || isXS ? 'px-4 py-0.5 text-[10px]' : isSM ? 'px-6 py-1 text-[12px]' : isMD ? 'px-8 py-1 text-[14px]' : isLG ? 'px-10 py-1.5 text-[16px]' : 'px-14 py-2 text-lg sm:text-[20px]'} rounded-xl cursor-pointer mt-3 shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
          >
            Join Us
          </div>
        </div>
        <div
          // className={styles.connectMain}
          className={`flex ${isXXS || isXS ? 'mt-6 gap-y-3' : isSM ? 'mt-8 gap-y-4' : isMD ? 'mt-10 gap-y-5' : isLG ? 'mt-12 gap-y-6' : 'mt-15 gap-y-10'} flex-col items-center justify-between`}
        >
          <div
            // className={styles.thoughtMain}
            className={`${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[12px]' : isMD ? 'text-[18px]' : isLG ? 'text-[24px]': isXL?"text-[30px]" : 'text-[40px]'} leading-tight font-semibold libre-franklin text-center`}
          >
            <div
              // className={styles.thought}
              className='text-[#8AFF84]'
            >
              Create what the world needs not what you are capable of
            </div>
            <div>- Dheer Verma</div>
          </div>
          <div
            // className={styles.connectListMain}
            className={`${isXXS || isXS ? 'text-[12px]' : isSM ? 'text-[12px]' : isMD ? 'text-[18px]' : isLG ? 'text-[24px]': isXL?"text-[30px]" : 'text-[40px]'} leading-tight font-semibold libre-franklin text-center`}
          >
            Frequently asked questions
          </div>
          {ConnectByList.map((item, index) => (
            <div
              key={index}
              // className={styles.connectItemsMain}
              className={`flex flex-col ${isXXS || isXS ? 'w-[95%] gap-y-2' : isSM ? 'w-[90%] gap-y-3' : isMD ? 'w-[80%] gap-y-4' : isLG ? 'w-[60%] gap-y-5' : 'w-[45%] gap-y-7'} dm-sans-regular`}
            >
              <div
                // className={styles.connectItems}
                className={`flex justify-between items-center ${isXXS || isXS ? 'text-[10px]' : isSM ? 'text-[12px]' : isMD ? 'text-[14px]' : isLG ? 'text-[16px]' : 'text-[18px]'} font-semibold`}
              >
                <div>{item}</div>
                <LuPlus size={isXXS || isXS ? 12 : isSM ? 14 : isMD ? 16 : isLG ? 18 : 20} />
              </div>
              <div
                // className={styles.connectListBorder}
                className='w-full border-t-1 border-[#8AFF84]'
              ></div>
            </div>
          ))}
        </div>
        <div
          // className={styles.footerMain}
          className={`w-full ${isXXS || isXS ? 'mt-6' : isSM ? 'mt-8' : isMD ? 'mt-10' : isLG ? 'mt-12' : 'mt-30'} flex border-t-3 border-[#8AFF84] flex-col items-center md:items-center`}
        >
          <div
            // className={styles.footer}
            className={`${isXXS || isXS || isSM ? 'w-[95%]' : isMD || isLG ? 'w-[90%]': isXL?"w-[95%]" : 'w-[83%]'} flex flex-col`}
          >
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;