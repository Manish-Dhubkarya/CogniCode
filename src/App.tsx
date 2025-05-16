import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ContactUs from './UIComponents/ContactUs'
import WritingComponent from './UIComponents/WritingComponent';
import OurTeam from './UIComponents/OurTeam';
import Publications from './UIComponents/Publications';
import Conferences from './UIComponents/Conferences';
import AboutUs from './UIComponents/AboutUs';
import OurServices from './UIComponents/OurServices';
import Home from './UIComponents/Home';
function App() {
  const ThesisWritingServices = [
    "Data Mining Thesis Writing Service",
    "Data Science Thesis Writing Service",
    "M. Tech Thesis Writing Service",
    "Plagiarism Removal Thesis Writing Service",
    "Cloud Computing Thesis Writing Service",
    "IOT Thesis Writing Service",
    "Wireless Sensor Network Thesis Writing Service",
    "WSN Academic Thesis Writing Service",
    "Academic NS2 Simulator Thesis Writing Service",
    "NLP Thesis Writing Service",
    "Machine Learning Thesis Writing Service",
    "Image Processing Thesis Writing Service",
    "Deep Learning Thesis Writing Service",
    "Computer Science Thesis Writing Service",
    "Blockchain Thesis Writing Service",
  ];
  const PaperWritingServices = [
    "Scopus Paper Writing Service",
    "Research Paper Writing Service",
    "IEEE Paper Writing Service",
    "SCI Article Writing Service"
  ]
  return (
    <Router basename="/CogniCode_Website">
      <div className="min-h-screen overflow-hidden select-none relative w-screen overflow-x-hidden bg-custom-gradient">
        <div className='z-5 absolute translate-x-1/2 overflow-x-hidden saira-stencil-one-regular  text-[#9fafc0] right-0 uppercase md:text-[200px] opacity-20 text-[60px] tracking-[2.5rem]  md:tracking-[4.5rem] md:top-270 top-180 overflow-hidden rotate-270'>
          cognicode
        </div>
        <div className='px-6 py-1 bg-[#131313] cursor-pointer roboto-regular2 font-normal md:text-[20px] text-[15px] rounded-t-[10px] fixed right-4 md:top-100 top-50 translate-x-1/2 z-50 rotate-270'>Contact Us</div>
        <Routes>
          <Route path="/landing" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/thesiswriting" element={<WritingComponent mainHeading='Thesis Writing' services={ThesisWritingServices} />} />
          <Route path="/dissertationswriting" element={<WritingComponent mainHeading='Dissertations Writing' services={ThesisWritingServices} />} />
          <Route path="/paperwriting" element={<WritingComponent mainHeading='Paper Writing' services={PaperWritingServices} />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
