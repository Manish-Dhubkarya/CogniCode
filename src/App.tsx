import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ContactUs from './UIComponents/ContactUs';
import WritingComponent from './UIComponents/WritingComponent';
import OurTeam from './UIComponents/OurTeam';
import Publications from './UIComponents/Publications';
import Conferences from './UIComponents/Conferences';
import AboutUs from './UIComponents/AboutUs';
import OurServices from './UIComponents/OurServices';
import Home from './UIComponents/Home';
import { useEffect, useState } from 'react';
import Ex from './UIComponents/Ex';
import MapComponent from './MapLocation/MapComponent';
// Interface for route-specific top values
interface TopValues {
  isLG: string;
  isXL: string;
  is2XL: string;
  is3XL: string;
}

// Interface for routeTopValues object
interface RouteTopValues {
  [key: string]: TopValues;
}

function MainContent() {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate=useNavigate()

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  const ThesisWritingServices = [
    'Data Mining Thesis Writing Service',
    'Data Science Thesis Writing Service',
    'M. Tech Thesis Writing Service',
    'Plagiarism Removal Thesis Writing Service',
    'Cloud Computing Thesis Writing Service',
    'IOT Thesis Writing Service',
    'Wireless Sensor Network Thesis Writing Service',
    'WSN Academic Thesis Writing Service',
    'Academic NS2 Simulator Thesis Writing Service',
    'NLP Thesis Writing Service',
    'Machine Learning Thesis Writing Service',
    'Image Processing Thesis Writing Service',
    'Deep Learning Thesis Writing Service',
    'Computer Science Thesis Writing Service',
    'Blockchain Thesis Writing Service',
  ];
  const PaperWritingServices = [
    'Scopus Paper Writing Service',
    'Research Paper Writing Service',
    'IEEE Paper Writing Service',
    'SCI Article Writing Service',
  ];

  // Get top value based on route and breakpoint
  const getTopValue = () => {
    const routeConfig = routeTopValues[location.pathname] || routeTopValues['default'];
    if (isLG) return routeConfig.isLG;
    if (isXL) return routeConfig.isXL;
    if (is2XL) return routeConfig.is2XL;
    return routeConfig.is3XL;
  };
  const routeTopValues: RouteTopValues = {
  '/contactus': { isLG: 'top-[900px] tracking-[110px]', isXL: 'top-[1050px] tracking-[110px]', is2XL: 'top-[1200px] tracking-[70px]', is3XL: 'top-[1120px] tracking-[70px]' },
    '/ourteam': { isLG: 'top-[900px] tracking-[130px]', isXL: 'top-[1100px] tracking-[140px]', is2XL: 'top-[1150px] tracking-[120px]', is3XL: 'top-[1350px] tracking-[90px]' },
  '/publications': { isLG: 'top-[500px] tracking-[50px]', isXL: 'top-[600px] tracking-[70px]', is2XL: 'top-[650px] tracking-[50px]', is3XL: 'top-[650px] tracking-[30px]' },
  '/conferences': { isLG: 'top-[520px] tracking-[70px]', isXL: 'top-[600px] tracking-[60px]', is2XL: 'top-[600px] tracking-[50px]', is3XL: 'top-[700px] tracking-[40px]' },
  '/aboutus': { isLG: 'top-[800px] tracking-[90px]', isXL: 'top-[900px] tracking-[90px]', is2XL: 'top-[1100px] tracking-[100px]', is3XL: 'top-[1100px] tracking-[130px]' },
  '/services': { isLG: 'top-[650px] tracking-[70px]', isXL: 'top-[750px] tracking-[60px]', is2XL: 'top-[1100px] tracking-[120px]', is3XL: 'top-[1300px] tracking-[160px]' },
};

  return (
<div className="min-h-screen relative w-screen overflow-x-hidden select-none">
  <div className="fixed inset-0 z-[-1] bg-custom-gradient"></div>      
  {(isLG || isXL || is2XL || is3XL) && location.pathname!=="/maplocation" &&  location.pathname !== '/' && location.pathname!=="/thesiswriting" && location.pathname!=="/dissertationswriting" && location.pathname!=="/paperwriting" && (
        <div
          className={`
            z-5 absolute overflow-x-hidden saira-stencil-one-regular text-[#7f7f7f] right-0 uppercase
            opacity-20 overflow-hidden rotate-270
            ${
              isLG
                ? 'text-[80px] '
                : isXL
                ? 'text-[120px] '
                : is2XL
                ? 'text-[170px] '
                : 'text-[200px]'
            }
            translate-x-1/2 ${getTopValue()}
          `}
        >
          cognicode
        </div>
      )}

      <div
        onClick={()=>navigate("/contactus")}
        className={`${isXXS || isXS || isSM?"mt-[280px]":isMD?"mt-[320px]":isLG?"mt-[430px]":isXL?"mt-[500px]":"mt-[520px]"} px-6 py-1 bg-[#131313] cursor-pointer roboto-regular2 font-normal md:text-[20px] text-[12px] rounded-t-[10px] fixed md:right-4 right-3 translate-x-1/2 z-50 rotate-270 transition-transform duration-500 ease-out hover:scale-125 text-gray-200 hover:text-white  hover:text-shadow-blowout`}
      >
        Contact Us
      </div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/thesiswriting"
          element={<WritingComponent mainHeading="Thesis Writing" services={ThesisWritingServices} />}
        />
        <Route
          path="/dissertationswriting"
          element={<WritingComponent mainHeading="Dissertations Writing" services={ThesisWritingServices} />}
        />
        <Route
          path="/paperwriting"
          element={<WritingComponent mainHeading="Paper Writing" services={PaperWritingServices} />}
        />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/maplocation" element={<MapComponent />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    // basename
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;