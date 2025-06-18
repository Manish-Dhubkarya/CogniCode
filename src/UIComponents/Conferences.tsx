import Footer from "./Footer";
import NavigationComponent from "./NavigationComponent";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import { useEffect, useState } from "react";
import { getData } from "../services/FetchBackendServices";
import { useNavigate } from "react-router-dom";

// Interface matching backend response
interface ConferenceRow {
  conferenceID: string;
  publisher: string;
  conferenceName: string;
  area: string;
  subject: string;
  lastDOfSub: string;
  registrationCharges: string;
  links: string;
}

const Conferences: React.FC = () => {
  const [conferenceList, setConferenceList] = useState<ConferenceRow[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [width, setWidth] = useState(window.innerWidth);
  const navigate=useNavigate()
  // Fetch conference table
  const fetchAllConferences = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getData("conferences/display_all_conferences");
      if (response && response.data) {
        // Map the response data to match the ConferenceRow interface
        const formattedData = response.data.map((item: any) => ({
          conferenceID: String(item.conferenceId),
          publisher: String(item.publisher || ""),
          conferenceName: String(item.conferenceName || ""),
          area: String(item.area || ""),
          subject: String(item.subject || ""),
          lastDOfSub: String(item.lastDOfSub || ""),
          registrationCharges: String(item.registrationCharges || ""),
          links: String(item.links || ""),
        }));
        setConferenceList(formattedData);
      } else {
        console.error("No data received from the backend");
        setConferenceList([]);
        setError("No conference data available.");
      }
    } catch (error) {
      console.error("Error fetching conferences:", error);
      setConferenceList([]);
      setError("Failed to load conferences. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAllConferences();
  }, []);
    useEffect(() => {
      window.scrollTo(0,0);
  });
  

  // Handle window resize
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

  // Table headers
  const tableHeaders = [
    "S no.",
    "Publisher",
    "Conference Name",
    "Area/Subject",
    "Last date of Submission",
    "Registration Charges",
    "Links",
  ];

  return (
    <div
      className={`w-full flex flex-col items-center justify-center mb-5 roboto-regular ${
        isXXS || isXS || isSM ? "mt-16" : isMD || isLG || isXL ? "mt-22" : "mt-30"
      }`}
    >
      <NavigationComponent />

      <div className="w-[87%] md:pb-2 pb-5 scrollbar-none overflow-x-auto">
        <div className="min-w-[1000px] grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_1fr] rounded-[10px] overflow-hidden border border-white">
          {/* Header */}
          <div className="contents">
            {tableHeaders.map((header) => (
              <div
                key={header}
                className={`border border-white px-4 py-3 flex items-center justify-center text-[12px] md:text-[20px] font-normal tracking-[0%] leading-snug roboto-regular text-center ${
                  header === "Conference Name" ? "max-w-[300px] whitespace-normal break-words" : ""
                }`}
              >
                {header}
              </div>
            ))}
          </div>

          {/* Data */}
          {isLoading ? (
            <div className="contents">
              <div className="col-span-7 border border-white px-4 py-3 text-center text-[14px] md:text-[18px]">
                Loading conferences...
              </div>
            </div>
          ) : error ? (
            <div className="contents">
              <div className="col-span-7 border border-white px-4 py-3 text-center text-[14px] md:text-[18px] text-red-500">
                {error}
              </div>
            </div>
          ) : conferenceList.length === 0 ? (
            <div className="contents">
              <div className="col-span-7 border border-white px-4 py-3 text-center text-[14px] md:text-[18px]">
                No conferences found.
              </div>
            </div>
          ) : (
            conferenceList.map((row, index) => (
              <div key={row.conferenceID} className="contents">
                <div className="border flex items-center justify-center border-white px-4 py-3 text-center align-middle text-[10px] md:text-[18px] font-normal tracking-[0%] leading-normal roboto-regular">
                  {index + 1}.
                </div>
                <div className="border flex items-center justify-center border-white px-4 py-3 text-center align-middle text-[10px] md:text-[18px] font-normal tracking-[0%] leading-normal roboto-regular">
                  {row.publisher}
                </div>
                <div className="border flex items-center justify-center border-white px-4 py-3 text-center align-middle text-[10px] md:text-[18px] font-normal tracking-[0%] leading-normal roboto-regular max-w-[200px] whitespace-normal break-words">
                  {row.conferenceName}
                </div>
                <div className="border flex items-center justify-center border-white px-4 py-3 text-center align-middle text-[10px] md:text-[18px] font-normal tracking-[0%] leading-normal roboto-regular">
                  {row.area || row.subject ? `${row.area}${row.area && row.subject ? "/" : ""}${row.subject}` : ""}
                </div>
                <div className="border flex items-center justify-center border-white px-4 py-3 text-center align-middle text-[10px] md:text-[18px] font-normal tracking-[0%] leading-normal roboto-regular">
                  {row.lastDOfSub}
                </div>
                <div className="border flex items-center justify-center border-white px-4 py-3 text-center align-middle text-[10px] md:text-[18px] font-normal tracking-[0%] leading-normal roboto-regular">
                  {row.registrationCharges}
                </div>
                <div className="border flex items-center justify-center border-white px-4 py-3 text-center align-middle text-[10px] md:text-[18px] font-normal tracking-[0%] leading-normal roboto-regular">
                  {row.links ? (
                    <a
                      href={row.links.startsWith("http") ? row.links : `https://${row.links}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {row.links}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Banner Section */}
      <div
        className={`w-full flex ${
          isXXS || isXS || isSM ? "mt-10" : isMD || isLG || isXL ? "mt-17" : "mt-27"
        } flex-col items-center`}
      >
        <div className="w-full flex flex-col items-center">
          <div
            style={{
              backgroundImage: `url(${TeamBanner})`,
            }}
            className={`bg-cover roboto-regular w-full flex flex-col gap-y-0 items-center justify-center ${
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
              Explore new possibilities with us everyday. Create your mark on future with us.
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
          <div className="w-full flex border-t-2 border-[#8AFF84] mt-0 flex-col items-center">
            <div className="w-[83%] md:w-[83%] flex flex-col">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conferences;