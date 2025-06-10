import NavigationComponent from './NavigationComponent';
import Footer from './Footer';
import AboutBack from "../assets/AboutBack.gif";
import AboutBack2 from "../assets/AboutBack2.gif";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import { aboutUsStyles as s } from "../../src/UIComponentCSS/AboutUsCss";
import { useEffect, useState } from 'react';
const content = {
  aboutUs: {
    title: "ABOUT US",
    description: "Our genesis began with an audacious goal: to leverage technology in crafting solutions that resonate across global businesses and communities. Our expedition is characterized by a spirit of innovation, tenacity, and a fervent pursuit of excellence. From our foundational days to assuming a pivotal role in digital evolution, we firmly believe that each stride we take brings us nearer to a world brimming with opportunities.",
    buttonText: "KNOW MORE",
    imageAlt: "About Us Illustration"
  },
  achievements: {
    title: "ACHIEVEMENTS",
    imageAlt: "Achievements Illustration",
    items: [
      { description: "" },
      { description: "" },
      { description: "" }
    ]
  },
  futureAims: {
    title: "FUTURE AIMS",
    description: "At Cognicode, we see a future where technology empowers every individual. Our commitment is to eliminate barriers in innovation, fostering growth for both enterprises and people to fully engage with the digital age.",
    imageAlt: "Future Aims Illustration",
    commitment: {
      title: "Our Commitment",
      description: "Our dedication lies in fostering an environment where every idea is nurtured, and we continually push the limits of technology to deliver outstanding results for our partners."
    },
    belief: {
      title: "What We Believe",
      description: "We believe in the power of collaboration and creativity, driving our mission to channel innovative solutions that not only fulfill our clients' needs but reshape the technological landscape."
    }
  },
  bottom: {
    bannerTitle: "Want to create FUTURE ?",
    bannerDescription: "Explore new possibilities with us everyday. Create your mark on future with us.",
    buttonText: "Join Us"
  }
};

const AboutUs = () => {
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
   <div className="min-h-screen pb-15 roboto-regular flex flex-col">
  <NavigationComponent />

  {/* About Us Section */}
 {isXXS || isXS || isSM ?
  <div  style={{ backgroundImage: `url(${AboutBack})`}} className='flex bg-center bg-cover space-y-5 items-center justify-center mt-12 my-7'>
    <div className="flex flex-col md:flex-row  pt-10 px-4 py-10 md:px-8 lg:px-[97px] items-center md:items-start justify-between">
    <section className="flex flex-col items-center md:items-start text-center md:text-start">
      <div className="text-[20px] font-bold mb-3">{content.aboutUs.title}</div>
      <div className="text-[12px] leading-tight max-w-[626px] mb-6">{content.aboutUs.description}</div>
      <div className={`bg-gradient-to-r text-black roboto-regular px-14 py-2 rounded-xl cursor-pointer ${isXXS || isXS ? 'px-4 py-0.5 text-[10px]' : isSM && 'px-6 py-1 text-[12px]'} shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}>{content.aboutUs.buttonText}</div>
    </section>
  </div>
  </div>:
 isMD?
 <div className='text-red-300 text-[20px] mt-20'>isMD about us</div>:
 isLG?
 <div className='text-red-300 text-[20px] mt-20'> isLG about us</div>:
  isXL?
  <div className='text-red-300 text-[20px] mt-20'>isXL of about us</div>:
<div className="flex flex-col md:flex-row mt-30 pt-10 px-4 py-10 md:px-8 lg:px-[97px] items-center md:items-start justify-between">
    <section className="flex flex-col items-center md:items-start text-center md:text-start">
      <div className="text-4xl md:text-[64px] font-bold mb-8">{content.aboutUs.title}</div>
      <div className="text-lg md:text-[20px] leading-tight max-w-[626px] mb-8">{content.aboutUs.description}</div>
      <div className="bg-gradient-to-r text-black roboto-regular px-14 py-2 rounded-xl cursor-pointer text-lg sm:text-[20px] shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold">{content.aboutUs.buttonText}</div>
    </section>
    <div className='mt-5 md:mt-0'>
      <img className="w-full max-w-[520px] h-auto" src={AboutBack} alt={content.aboutUs.imageAlt} />
    </div>
  </div>
  }

  {/* Achievements Section */}
  {isXXS || isXS || isSM ?
  <div className='flex flex-col items-center justify-center'>
      <div className="text-[20px] font-bold mb-5">{content.achievements.title}</div>
<div className="flex justify-center gap-5">
        {content.achievements.items.map((item, index) => (
          <div key={index} className={`bg-gray-300 ${isXXS || isXS?"h-[170px] w-[90px]": isSM?"h-[190px] w-[80px]":""} rounded-lg`}>
            <div className="p-4 text-center">{item.description}</div>
          </div>
        ))}
      </div>
  </div>
  :
  isMD?
  <div>

  </div>:
   isLG?
   <div></div>:
    isXL?
   <div></div>:
   <div className="flex flex-col md:flex-row py-12 px-4 md:px-8 lg:px-[97px] items-center md:items-start justify-between">
    <div className='mt-15 md:mb-0'>
      <img src={AboutBack2} className='w-full max-w-[275px] h-[363px]' alt={content.achievements.imageAlt} />
    </div>
    <section className="px-4 flex flex-col items-center md:items-end md:px-12 text-center md:text-end">
      <div className="text-4xl md:text-[64px] font-bold mb-15">{content.achievements.title}</div>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        {content.achievements.items.map((item, index) => (
          <div key={index} className="bg-gray-300 h-[364px] w-[247px] md:w-64 rounded-lg">
            <div className="p-4 text-center">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
}

  {/* Future Aims Section */}
  <div className="flex flex-col md:flex-row py-20 px-8 items-center md:items-start justify-between">
    <section className="flex flex-col items-center md:items-start lg:px-16 text-center md:text-start">
      <div className="text-4xl md:text-[64px] font-bold mb-10">{content.futureAims.title}</div>
      <div className="text-lg md:text-[20px] leading-tight tracking-[1%] max-w-[696px] mb-8">{content.futureAims.description}</div>
      <div className="flex flex-col md:flex-row mt-15 justify-start gap-15">
        <div className="md:w-[380px]">
          <div className="text-xl md:text-[32px] font-semibold mb-4">{content.futureAims.commitment.title}</div>
          <div className={s.subText}>{content.futureAims.commitment.description}</div>
        </div>
        <div className="md:w-[382px]">
          <div className="text-[20px] leading-snug">{content.futureAims.belief.title}</div>
          <div className="text-[20px] leading-snug">{content.futureAims.belief.description}</div>
        </div>
      </div>
    </section>
    <div className='mt-8 md:mt-0 pr-0 md:pr-[115px]'>
      <img src={AboutBack2} className='w-full max-w-[275px] h-auto' alt={content.futureAims.imageAlt} />
    </div>
  </div>

  {/* Bottom */}
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
              className={`bg-gradient-to-r text-black ${
                isXXS || isXS
                  ? "px-4 py-0.5 text-[10px]"
                  : isSM
                  ? "px-6 py-1 text-[14px]"
                  : isMD
                  ? "px-8 py-1 text-[14px]"
                  : isLG
                  ? "px-10 py-1.5 text-[16px]"
                  : "px-14 py-2 text-lg sm:text-[20px]"
              } rounded-xl cursor-pointer mt-3 shadow-[0px_4px_16px_rgba(138,255,132,0.2),0px_4px_16px_rgba(44,107,193,0.2)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
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

export default AboutUs;