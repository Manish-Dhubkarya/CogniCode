import NavigationComponent from './NavigationComponent';
import Footer from './Footer';
import AboutBack from "../assets/AboutBack.gif";
// import AboutBack2 from "../assets/AboutBack2.gif";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate=useNavigate()
   const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
      useEffect(() => {
        window.scrollTo(0,0);
    });
    
  
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
   <div className="min-h-screen pb-5 roboto-regular flex flex-col">
  <NavigationComponent />

  {/* About Us Section */}
 {isXXS || isXS || isSM ?
  <div className="relative mt-7 my-7 flex items-center justify-center space-y-5">
  {/* Background layer with opacity */}
  <div
    className="absolute inset-0 bg-center bg-cover opacity-50 pointer-events-none z-0"
    style={{ backgroundImage: `url(${AboutBack})` }}
  ></div>

  {/* Foreground content */}
  <div className="flex flex-col md:flex-row pt-10 px-4 py-10 md:px-8 lg:px-[97px] items-center md:items-start justify-between relative z-10">
    <section className="flex flex-col items-center md:items-start text-center md:text-start">
      <div className="text-[20px] font-bold mb-3">{content.aboutUs.title}</div>
      <div className="text-[12px] leading-tight max-w-[626px] mb-6">{content.aboutUs.description}</div>
      <div
        onClick={() => navigate("/contactus")}
        className={`bg-gradient-to-r text-black roboto-regular rounded-xl cursor-pointer ${
          isXXS || isXS
            ? 'px-4 py-0.5 text-[10px]'
            : isSM && 'px-6 py-1 text-[14px]'
        } shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
      >
        {content.aboutUs.buttonText}
      </div>
    </section>
  </div>
</div>
:
 isMD?
 <div className="relative mt-7 my-7 flex items-center justify-center space-y-5">
  {/* Background layer with opacity */}
  <div
    className="absolute inset-0 bg-center bg-cover opacity-50 pointer-events-none z-0"
    style={{ backgroundImage: `url(${AboutBack})` }}
  ></div>
      <div className="flex flex-col md:flex-row pt-10 py-10 px-10 items-center md:items-start justify-between z-10">
    <section className="flex flex-col items-start text-start">
      <div className="text-[30px] font-bold mb-3">{content.aboutUs.title}</div>
      <div className="text-[15px] leading-tight max-w-[626px] mb-6">{content.aboutUs.description}</div>
     <div className='flex w-full justify-center'>
      <div onClick={()=>navigate("/contactus")} className={`bg-gradient-to-r  text-black roboto-regular rounded-xl cursor-pointer ${ isMD && 'px-6 py-1 text-[15px]'} shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}>{content.aboutUs.buttonText}</div>
    </div>
    </section>
  </div>
  </div>
  
  :
 isLG || isXL?
 <div className="relative mt-12 my-7 flex items-center justify-center space-y-5">
  {/* Background layer with opacity */}
  <div
    className="absolute inset-0 bg-center bg-cover opacity-50 pointer-events-none z-0"
    style={{ backgroundImage: `url(${AboutBack})` }}
  ></div>    <div className="flex flex-col md:flex-row pt-10 py-10 px-10 items-center justify-between z-10">
    <section className="flex flex-col items-center text-start">
      <div className="text-[40px] font-bold mb-7">{content.aboutUs.title}</div>
      <div className="text-[20px] leading-tight mb-10">{content.aboutUs.description}</div>
     <div className='flex w-full justify-center'>
      <div onClick={()=>navigate("/contactus")} className={`bg-gradient-to-r  text-black roboto-regular rounded-xl cursor-pointer px-9 py-2 text-[18px] shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}>{content.aboutUs.buttonText}</div>
    </div>
    </section>
  </div>
  </div>:
  is2XL?

<div className="flex mt-20 w-full py-10 px-25 items-center  justify-between">
    <section className="flex w-[50%] flex-col justify-start items-start  text-start ">
      <div className="text-[64px] font-bold mb-6">{content.aboutUs.title}</div>
      <div className="text-[22px] leading-normal max-w-[626px] mb-8">{content.aboutUs.description}</div>
      <div onClick={()=>navigate("/contactus")} className="bg-gradient-to-r text-black roboto-regular px-12 py-2 rounded-xl cursor-pointer text-lg sm:text-[20px] shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold">{content.aboutUs.buttonText}</div>
    </section>
    {/* opacity change */}
    <div className='mt-5 opacity-50 pointer-events-none w-[42%] '>
      <img className="w-full h-full" src={AboutBack} alt={content.aboutUs.imageAlt} />
    </div>
  </div>
  :
  <div className="flex mt-20 w-full py-10 px-25 items-center  justify-between">
    <section className="flex w-[50%] flex-col justify-start items-start  text-start ">
      <div className="text-[64px] font-bold mb-6">{content.aboutUs.title}</div>
      <div className="text-[24px] leading-normal max-w-[850px] mb-8">{content.aboutUs.description}</div>
      <div onClick={()=>navigate("/contactus")} className="bg-gradient-to-r text-black roboto-regular px-12 py-2 rounded-xl cursor-pointer text-lg sm:text-[20px] shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold">{content.aboutUs.buttonText}</div>
    </section>
    {/* opacity change */}
    <div className='mt-5 opacity-50 pointer-events-none w-[42%] '>
      <img className="w-full h-full" src={AboutBack} alt={content.aboutUs.imageAlt} />
    </div>
  </div>
  }

  {/* Achievements Section */}
  {isXXS || isXS || isSM ?
  <div className='flex flex-col items-center justify-center'>
      <div className="text-[20px] font-bold mb-5">{content.achievements.title}</div>
<div className="flex justify-center gap-5">
        {content.achievements.items.map((item, index) => (
          <div key={index} className={`bg-gray-300 w-[25vw] ${isXXS || isXS?"h-[180px]": isSM?"h-[180px] max-[460px]:h-[160px] max-[400px]:h-[150px] max-[370px]:h-[140px]":""} rounded-lg`}>
            <div className="p-4 text-center">{item.description}</div>
          </div>
        ))}
      </div>
  </div>
  :
  isMD?
   <div className='flex flex-col items-center justify-center'>
      <div className="text-[30px] w-full px-[10vw] text-start font-bold mb-7">{content.achievements.title}</div>
<div className="flex justify-between w-full px-[10vw] gap-7">
        {content.achievements.items.map((item, index) => (
          <div key={index} className={`bg-gray-300 w-[180px] ${isMD?"h-[220px] max-[630px]:h-[200px] max-[550px]:h-[180px]":""} rounded-lg`}>
            <div className="p-4 text-center">{item.description}</div>
          </div>
        ))}
      </div>
  </div>:
   isLG?
   <div className='flex flex-col items-center justify-center'>
      <div className="text-[30px] w-full px-[10vw] text-start font-bold mb-7">{content.achievements.title}</div>
<div className="flex justify-between px-[10vw] w-full gap-7">
        {content.achievements.items.map((item, index) => (
          <div key={index} className={`bg-gray-300 w-[200px] ${isLG?"h-[280px] max-[800px]:h-[250px] max-[800px]:w-[180px]":""} rounded-lg`}>
            <div className="p-4 text-center">{item.description}</div>
          </div>
        ))}
      </div>
  </div>:
    isXL?
   <div className='flex flex-col items-center justify-center'>
      <div className="text-[40px] w-full px-[10vw] text-end font-bold mb-7">{content.achievements.title}</div>
<div className="flex justify-between w-full px-[10vw] gap-10">
        {content.achievements.items.map((item, index) => (
          <div key={index} className={`bg-gray-300 w-[250px] ${isXL?"h-[350px] max-[1000px]:h-[300px] max-[1000px]:w-[220px]":""} rounded-lg`}>
            <div className="p-4 text-center">{item.description}</div>
          </div>
        ))}
      </div>
  </div>:
   <div className="flex flex-col md:flex-row py-12 px-[6vw] items-center md:items-start justify-between">
    <div className='mt-15 pointer-events-none md:mb-0'>
      {/* <img src={AboutBack2} className="h-[350px] w-[250px]
             max-[1400px]:h-[300px] max-[1400px]:w-[220px]
             max-[1024px]:h-[250px] max-[1024px]:w-[180px]" alt={content.achievements.imageAlt} /> */}
    </div>
    <section className="px-4 w-full flex flex-col items-center md:px-12 text-center md:text-end">
      <div className="text-4xl md:text-[64px] font-bold mb-15">{content.achievements.title}</div>
      <div className="flex w-full justify-evenly gap-12">
        {content.achievements.items.map((item, index) => (
         <div
  key={index}
  className="bg-gray-300 h-[25vw] w-[18vw] rounded-lg
             max-[1400px]:h-[300px] max-[1400px]:w-[220px]
             max-[1024px]:h-[250px] max-[1024px]:w-[180px]"
>
  <div className="p-4 text-center">{item.description}</div>
</div>

        ))}
      </div>
    </section>
  </div>
}

  {/* Future Aims Section */}
  {isXXS || isXS || isSM?
  <div className='py-7 flex flex-col justify-center items-start px-4'>
      <div className="text-[20px] font-bold mb-2">{content.futureAims.title}</div>
      <div className="text-[12px] text-start leading-tight tracking-[1%] mb-4">{content.futureAims.description}</div>
<div className='text-end'>
          <div className="text-[15px] font-semibold mb-1">{content.futureAims.commitment.title}</div>
          <div className='w-full flex'>
          <div className="text-[12px] text-end leading-tight tracking-[1%] mb-4">{content.futureAims.commitment.description}</div>
</div>
</div>
<div className='text-start'>
          <div className="text-[15px] font-semibold mb-1">{content.futureAims.belief.title}</div>
          <div className='w-full flex'>
          <div className="text-[12px] text-start leading-tight tracking-[1%] mb-4">{content.futureAims.belief.description}</div>
</div>
</div>
  </div>:
  isMD?<div className='py-7 flex flex-col justify-center items-center px-4'>
      <div className="text-[30px] font-bold mb-5">{content.futureAims.title}</div>
     
      <div className="text-[15px] text-start leading-tight tracking-[1%] mb-7">{content.futureAims.description}</div>
 <div className='grid grid-cols-2 justify-between w-full gap-8'>
<div className='text-start'>
          <div className="text-[20px] font-semibold mb-1">{content.futureAims.commitment.title}</div>
          <div className='w-full flex'>
          <div className="text-[15px] text-start leading-tight tracking-[1%] mb-4">{content.futureAims.commitment.description}</div>
</div>
</div>
<div className='text-end'>
          <div className="text-[20px] font-semibold mb-1">{content.futureAims.belief.title}</div>
          <div className='w-full flex'>
          <div className="text-[15px] text-end leading-tight tracking-[1%] mb-4">{content.futureAims.belief.description}</div>
</div>
</div>
</div>
  </div>:
  isLG?
  <div className='py-10 flex flex-col justify-center items-start px-15'>
      <div className="text-[30px] font-bold mb-5">{content.futureAims.title}</div>
     
      <div className="text-[20px] text-start leading-tight tracking-[1%] mb-10">{content.futureAims.description}</div>
 <div className='grid grid-cols-2 justify-between w-full gap-8'>
<div className='text-start'>
          <div className="text-[25px] font-semibold mb-4">{content.futureAims.commitment.title}</div>
          <div className='w-full flex'>
          <div className="text-[20px] text-start leading-tight tracking-[1%] mb-4">{content.futureAims.commitment.description}</div>
</div>
</div>
<div className='text-start'>
          <div className="text-[25px] font-semibold mb-4">{content.futureAims.belief.title}</div>
          <div className='w-full flex'>
          <div className="text-[20px] text-start leading-tight tracking-[1%] mb-4">{content.futureAims.belief.description}</div>
</div>
</div>
</div>
  </div>:
  isXL?
  <div className='py-15 flex flex-col justify-center items-start px-15'>
      <div className="text-[40px] font-bold mb-5">{content.futureAims.title}</div>
     
      <div className="text-[25px] text-start leading-tight tracking-[1%] mb-15">{content.futureAims.description}</div>
 <div className='grid grid-cols-2 justify-between w-full gap-8'>
<div className='text-start'>
          <div className="text-[30px] font-semibold mb-4">{content.futureAims.commitment.title}</div>
          <div className='w-full flex'>
          <div className="text-[25px] text-start leading-tight tracking-[1%] mb-4">{content.futureAims.commitment.description}</div>
</div>
</div>
<div className='text-start'>
          <div className="text-[30px] font-semibold mb-4">{content.futureAims.belief.title}</div>
          <div className='w-full flex'>
          <div className="text-[25px] text-start leading-tight tracking-[1%] mb-4">{content.futureAims.belief.description}</div>
</div>
</div>
</div>
  </div>:
  is2XL?
  <div className='py-15 flex flex-col justify-center items-start px-15'>
      <div className="text-[40px] font-bold mb-5">{content.futureAims.title}</div>
     
      <div className="text-[25px] w-[93%] text-start leading-normal tracking-[1%] mb-15">{content.futureAims.description}</div>
 <div className='grid grid-cols-2 justify-between w-[90%] gap-8'>
<div className='text-start'>
          <div className="text-[30px] font-semibold mb-4">{content.futureAims.commitment.title}</div>
          <div className='w-full flex'>
          <div className="text-[22px] text-start leading-normal tracking-[1%] mb-4">{content.futureAims.commitment.description}</div>
</div>
</div>
<div className='text-start'>
          <div className="text-[30px] font-semibold mb-4">{content.futureAims.belief.title}</div>
          <div className='w-full flex'>
          <div className="text-[22px] text-start leading-normal tracking-[1%] mb-4">{content.futureAims.belief.description}</div>
</div>
</div>
</div>
  </div>:
  
  <div className="flex flex-col md:flex-row py-20 px-[6vw] items-center md:items-start justify-between">
    <section className="flex flex-col items-center md:items-start text-center md:text-start">
      <div className="text-4xl md:text-[64px] font-bold mb-10">{content.futureAims.title}</div>
      <div className="text-lg md:text-[24px] leading-normal tracking-[1%] max-w-[95%] mb-8">{content.futureAims.description}</div>
      <div className="flex flex-col md:flex-row mt-15 justify-start gap-15">
        <div className="w-[45%]">
          <div className="text-[32px] font-semibold mb-4">{content.futureAims.commitment.title}</div>
          <div className="text-[24px] leading-normal">{content.futureAims.commitment.description}</div>
        </div>
        <div className="w-[45%]">
          <div className="text-[32px] font-semibold mb-4">{content.futureAims.belief.title}</div>
          <div className="text-[24px] leading-normal">{content.futureAims.belief.description}</div>
        </div>
      </div>
    </section>
    <div className='mt-8 mr-13 pointer-events-none'>
      {/* <img src={AboutBack2} className="h-[350px] w-[250px]
             max-[1400px]:h-[300px] max-[1400px]:w-[220px]
             max-[1024px]:h-[250px] max-[1024px]:w-[180px]" alt={content.futureAims.imageAlt} /> */}
    </div>
  </div>}

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
             onClick={()=>navigate("/contactus")}
              className={`bg-gradient-to-r text-black roboto-regular ${
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
    <div className="w-full flex border-t-2 border-[#8AFF84] mt-0 flex-col items-center"></div>
    <div className="w-[83%] md:w-[83%] flex flex-col">
      <Footer />
    </div>
  </div>
</div>
  );
};

export default AboutUs;