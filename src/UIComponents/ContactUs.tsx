import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContactUsBannerBack from "../assets/ContactUsBannerBack.gif";
import { LuPlus } from "react-icons/lu";
import Footer from "./Footer";
import ScrollingFooter from "./ScrollingFooter";
import NavigationComponent from "./NavigationComponent";
import { postData } from "../services/FetchBackendServices";
import { FaCircleCheck } from "react-icons/fa6";

export default function ContactUs() {
  const { state } = useLocation();
  const { selectedService = "No service selected" } = state || {};
  const navigate = useNavigate();
  const ConnectByList = [
    "Enquire about price as per services",
    "Looking for a career change",
    "Looking for new competitions",
    "New business collaboration",
    "Our Vision & Mission",
    "New business collaboration",
  ];
  const UserDetails = [
    "Inquiry Type*",
    "First name*",
    "Last name",
    "Email address*",
    "Phone Number*",
    "How can we help you?*",
  ];

  const [width, setWidth] = useState(window.innerWidth);
  const [inputValues, setInputValues] = useState([
    selectedService !== "No service selected" ? selectedService : "",
    ...Array(UserDetails.length - 1).fill(""),
  ]);
  const [fieldErrors, setFieldErrors] = useState<string[]>(Array(UserDetails.length).fill(""));
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
const [isSubmitting, setIsSubmitting] = useState(false);
  // Ref for Inquiry Type input
  const inquiryTypeRef = useRef<HTMLInputElement>(null);

  // Sync inputValues[0] with selectedService and scroll to Inquiry Type
  useEffect(() => {
    if (selectedService !== "No service selected") {
      setInputValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[0] = selectedService;
        return newValues;
      });
      if (inquiryTypeRef.current) {
        inquiryTypeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [selectedService]);

  // Debug logs
  useEffect(() => {
    console.log("Selected Service:", selectedService);
    console.log("Input Values:", inputValues);
    console.log("Field Errors:", fieldErrors);
  }, [selectedService, inputValues, fieldErrors]);

  // Auto-dismiss success message
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {setSuccessMessage(""), setErrorMessage("")}, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  // Resize handler
  useEffect(() => {
    if(selectedService == "No service selected"){
    scrollTo(0, 0)}
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

  // Handle input changes
  const handleInputChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
    const newErrors = [...fieldErrors];
    newErrors[index] = "";
    setFieldErrors(newErrors);
  };

  // Validation functions
  const isValidName = (value: string) => /^[a-zA-Z\s]+$/.test(value.trim());
  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  const isValidPhone = (value: string) => /^\d{10}$/.test(value.trim());

  // Handle form submission
  const handleInquirySubmit = async () => {
    setIsSubmitting(true)
    const newErrors = Array(UserDetails.length).fill("");
    let hasError = false;

    // Check mandatory fields (exclude Last name, index 2)
    const mandatoryIndices = [0, 1, 3, 4, 5];
    mandatoryIndices.forEach((index) => {
      if (!inputValues[index].trim()) {
        newErrors[index] = `Please fill in the "${UserDetails[index]}" field.`;
        hasError = true;
      }
    });

    // Validate First name format
    if (inputValues[1].trim() && !isValidName(inputValues[1])) {
      newErrors[1] = "Please enter a valid first name (only letters and spaces allowed).";
      hasError = true;
    }

    // Validate Email format
    if (inputValues[3].trim() && !isValidEmail(inputValues[3])) {
      newErrors[3] = "Please enter a valid email address.";
      hasError = true;
    }

    // Validate Phone format
    if (inputValues[4].trim() && !isValidPhone(inputValues[4])) {
      newErrors[4] = "Please enter a valid 10-digit phone number.";
      hasError = true;
    }

    if (hasError) {
      setIsSubmitting(false)
      setFieldErrors(newErrors);
      return;
    }

    // Populate body with input values
    const body = {
      inquiryType: inputValues[0],
      firstName: inputValues[1],
      lastName: inputValues[2],
      email: inputValues[3],
      phone: inputValues[4],
      howToHelp: inputValues[5],
    };

    try {
      const response = await postData("clientInquiry/submit_client_inquiry", body);
      if (response && response.message) {
        setSuccessMessage(response.message);
        setInputValues(Array(UserDetails.length).fill(""));
        setFieldErrors(Array(UserDetails.length).fill(""));
      } else {
        setErrorMessage(response.message);
      }
    } catch (error:any) {
      console.error("Submission error:", error);
      setErrorMessage("Error submitting inquiry. Please try again later.");
    } finally{
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col mb-5 select-none">
      <NavigationComponent />

      {/* Success Popover */}
      {successMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Glassy Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out_forwards]"></div>

          {/* Message Box with glass effect and animation */}
          <div className="relative bg-white/20 backdrop-blur-lg px-6 py-4 rounded-xl shadow-2xl border border-white/30 animate-[slideUpFade_0.5s_ease-out_forwards] max-w-sm text-center">
            <h2 className="text-xl font-bold mb-1 tracking-wide text-[#16ff03] flex items-center gap-3 drop-shadow">
              <FaCircleCheck color="#16ff03" /> Success
            </h2>
            <p className="text-sm font-medium tracking-tight drop-shadow">{successMessage}</p>
          </div>
        </div>
      )}
      {/* Error Message */}
      {errorMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Glassy Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out_forwards]"></div>

          {/* Message Box with glass effect and animation */}
          <div className="relative bg-white/20 backdrop-blur-lg px-6 py-4 rounded-xl shadow-2xl border border-white/30 animate-[slideUpFade_0.5s_ease-out_forwards] max-w-sm text-center">
            <h2 className="text-xl font-bold mb-1 tracking-wide text-[#f14730] flex items-center gap-3 drop-shadow">
              <FaCircleCheck color="#f14730" /> Error
            </h2>
            <p className="text-sm font-medium tracking-tight drop-shadow">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Banner */}
      <div
        style={{ backgroundImage: `url(${ContactUsBannerBack})` }}
        className={`bg-cover flex-col-reverse bg-center w-full flex ${
          isXXS || isXS ? "gap-y-3" : isSM ? "gap-y-5" : isMD || isLG ? "gap-y-8" : isXL ? "gap-y-10" : "gap-y-12"
        } items-center justify-center ${
          isXXS || isXS || isSM
            ? "h-[20vh] min-h-[220px] max-h-[256px]"
            : isMD
            ? "h-[25vh] min-h-[250px] max-h-[300px]"
            : isLG
            ? "h-[30vh] min-h-[300px] max-h-[310px]"
            : isXL
            ? "h-[40vh] min-h-[400px] max-h-[406px]"
            : "h-[50vh] min-h-[450px] max-h-[456px]"
        } pt-[64px]`}
      >
        <div
  className={`bg-gradient-to-r text-black ${
    isXXS || isXS
      ? "px-4 py-0.5 text-[10px]"
      : isSM
      ? "px-6 py-1 text-[12px]"
      : isMD
      ? "px-8 py-1 text-[14px]"
      : isLG
      ? "px-10 py-1.5 text-[16px]"
      : "px-14 py-2 text-lg sm:text-[20px]"
  } rounded-xl cursor-pointer mt-0 shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
  onClick={() => {
    if (inquiryTypeRef.current) {
      inquiryTypeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }}
>
  Send Message
</div>
        <div
          className={`text-white text-center px-4 ${
            isXXS || isXS ? "text-[12px]" : isSM ? "text-[13px]" : isMD ? "text-[18px]" : isLG ? "text-[25px]" : isXL ? "text-[30px]" : "text-[36px]"
          } font-extrabold leading-tight dm-sans-regular`}
        >
          Thanks for your interest in Cognicode.
          <div>Choose from the options below and we’ll connect you</div>
          <div>with the right person.</div>
        </div>
      </div>

      {/* Connect By */}
      <div className="flex dm-sans-regular items-center justify-center w-full md:mt-20 mt-10 px-4">
        <div
          className={`w-full md:max-w-[70%] max-w-[90%] flex flex-col ${
            isXXS || isXS || isSM ? "gap-y-2" : isMD ? "gap-y-2" : isLG ? "gap-y-6" : isXL ? "gap-y-8" : "gap-y-10"
          } items-center`}
        >
          <div
            className={`font-extrabold ${
              isXXS || isXS ? "mb-4" : isSM ? "mb-6" : isMD ? "mb-7" : isLG ? "mb-8" : "mb-10"
            } text-center ${
              isXXS || isXS ? "text-[12px]" : isSM ? "text-[13px]" : isMD ? "text-[17px]" : isLG ? "text-[20px]" : isXL ? "text-[27px]" : "text-[32px]"
            } tracking-tight`}
          >
            Connect with us to explore incredible future possibilities
          </div>
          {ConnectByList.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${isXXS || isXS ? 'gap-y-2' : isSM ? 'gap-y-3' : isMD ? 'gap-y-4' : isLG ? 'gap-y-5' : 'gap-y-7'} w-full dm-sans-regular`}
            >
              <div
                className={`flex justify-between items-center ${isXXS || isXS ? 'text-[10px]' : isSM ? 'text-[12px]' : isMD ? 'text-[14px]' : isLG ? 'text-[16px]' : 'text-[18px]'} font-semibold cursor-pointer`}
                onClick={() => navigate("/contactus", { state: { selectedService: item } })}
              >
                <div>{item}</div>
                <LuPlus size={isXXS || isXS ? 12 : isSM ? 14 : isMD ? 16 : isLG ? 18 : 20} />
              </div>
              <div className='w-full mb-1 border-t-1 border-[#8AFF84]'></div>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Details */}
      <div
        className={`flex items-start libre-franklin justify-center w-full ${
          isXXS || isXS || isSM ? "mt-8" : isMD ? "mt-12" : isLG ? "mt-14" : "mt-16"
        } px-4`}
      >
        <div className="w-full md:max-w-[80%] max-w-[95%] flex flex-col gap-y-8 items-start">
          <div
            className={`${
              isXXS || isXS
                ? "text-[11px]"
                : isSM
                ? "text-[15px]"
                : isMD
                ? "text-[16px]"
                : isLG
                ? "text-[17px]"
                : isXL
                ? "text-[22px]"
                : "text-[28px]"
            } font-normal text-left tracking-tight`}
          >
            Please provide the following information and we’ll put you in touch with the right person.
          </div>
          <div className="w-[90%] items-start flex flex-col gap-5">
            <div
              className={`${
                isXXS || isXS
                  ? "text-[11px] font-semibold"
                  : isSM
                  ? "text-[15px] font-semibold"
                  : isMD
                  ? "text-[16px] font-semibold"
                  : isLG
                  ? "text-[19px] font-semibold"
                  : isXL
                  ? "text-[24px] font-semibold"
                  : "text-[28px] font-semibold"
              }`}
            >
              About You
            </div>
          </div>
          {UserDetails.map((item, index) => (
            <div key={index} className={`flex items-start flex-col gap-y-0 ${isSM?"w-full":"w-[90%]"} max-w-full`}>
              <div
                className={`relative flex flex-col items-start w-full ${
                  isXXS || isXS || isSM ? "h-8" : isMD ? "h-9" : isLG ? "h-10" : isXL? "h-12":"h-14"
                }`}
              >
                <input
                  type={index === 3 ? "email" : index === 4 ? "tel" : "text"}
                  id={`input-${index}`}
                  placeholder=" "
                  value={inputValues[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className={`peer absolute bottom-0 w-full bg-transparent text-white text-base border-none focus:outline-none h-10 peer ${
                    fieldErrors[index] ? "border-red-500" : ""
                  }`}
                  ref={index === 0 ? inquiryTypeRef : null}
                />
                <label
                  htmlFor={`input-${index}`}
                  className={`absolute left-0 text-white transition-all duration-200 font-normal tracking-tight ${
                    inputValues[index]
                      ? "bottom-8 text-sm lg:bottom-10 lg:text-[20px]"
                      : `bottom-2 text-base ${isXXS || isXS || isSM?"text-[16px]":isMD?"text-[18px]": isLG?"text-[20px]": isXL?"text-[21px]":"text-[22px]"} peer-focus:bottom-8 peer-focus:text-sm peer-focus:lg:bottom-10 peer-focus:lg:text-[20px]`
                  }`}
                >
                  {item}
                </label>
                <div className="absolute bottom-0 w-full h-[1px] bg-white" />
              </div>
              {fieldErrors[index] && (
                // error
                <div className="text-red-500 text-xs md:text-sm">{fieldErrors[index]}</div>
              )}
            </div>
          ))}
          <div
            onClick={handleInquirySubmit}
            className={`bg-gradient-to-r mt-4 text-white ${
              isXXS || isXS
                ? "px-3.5 py-0.5 text-[9px]"
                : isSM
                ? "px-5 py-1 text-[10px]"
                : isMD
                ? "px-7 py-1 text-[12px]"
                : isLG
                ? "px-8 py-1.5 text-[14px]"
                : "px-10 py-2 text-lg sm:text-[17px]"
            } rounded-xl cursor-pointer shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-semibold`}
          >
            {isSubmitting ? <div className={`loader ${isXXS || isXS?"w-[12px]":isSM?"w-[15px]":isMD?"w-[17px]":isLG?"w-[20px]":"w-[25px]"}`}></div> : "Submit"}
            {/*  */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="my-15">
        <ScrollingFooter />
      </div>
      <div className="w-full flex border-t-2 border-[#8AFF84] mt-0 flex-col items-center md:items-center">
        <div className="w-[83%] flex flex-col">
          <Footer />
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}