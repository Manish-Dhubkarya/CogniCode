import Footer from "./Footer";
import NavigationComponent from "./NavigationComponent"
import ScrollingFooter from "./ScrollingFooter";
interface WritingComponentProps {
    services: string[];
    mainHeading: string;
}

const WritingComponent:React.FC<WritingComponentProps>=({services, mainHeading})=> {
   
  return (
    <div className="flex flex-col roboto-regular mb-10 items-center justify-center ">
      <NavigationComponent/>
      <div className="text-[48px]  text-[#C9C9C9] font-bold mt-20 roboto-regular">
      {mainHeading}
      </div>
      {/* Services List */}
      <div className="flex justify-center mt-10 w-full">
  <ul className={`${mainHeading==="Paper Writing"?" flex flex-col items-start mx-9 w-full":"columns-1 sm:columns-2 md:columns-3 xl:columns-3 gap-8"} text-center`}>
    {services.map((service, index) => (
      <li key={index} className="break-inside-avoid px-10 mb-8 text-start flex items-start">
        <span className="text-[16px]">{index+1}.{" "}{service}</span>
      </li>
    ))}
  </ul>
</div>
<div className="flex flex-col items-center mt-17 w-[80%]">
    <div className="flex w-[40%] text-[20px] text-[#AFACAC] font-semibold justify-between items-center flex-row">
        <div>Writing Services</div>
        <div>IT Solutions</div>
        <div>AI Services</div>
    </div>
    <div className="w-full border-t-1 mt-4 border-[#8AFF84]"></div>

</div>
<div className="mt-15">
        <ScrollingFooter />
      </div>
      <div className="w-full flex border-t-3 border-[#8AFF84] mt-0 flex-col items-center md:items-center">
      <div className=" w-[83%] flex flex-col">
      <Footer />
      </div>
      </div>
    </div>
  )
}

export default WritingComponent
