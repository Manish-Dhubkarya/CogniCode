import NavigationComponent from "./NavigationComponent";
import Avinash_Mitahnia from "../assets/TeamMemberPics/Avinash_Mitahnia.png";
import Dheer_Verma from "../assets/TeamMemberPics/Dheer_Verma.png";
import Twinkle_Varma from "../assets/TeamMemberPics/Twinkle_Verma.png";
import Neha_Verma from "../assets/TeamMemberPics/Neha_Verma.png";
import Ajay_Singh from "../assets/TeamMemberPics/Ajay_Karan_Singh_Rajpoot.png";
import Vishal_Verma from "../assets/TeamMemberPics/Vishal_Verma.png"
import Manish_Dhubkarya from "../assets/TeamMemberPics/Manish_Dhubkarya.jpg"
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif"
import Footer from "./Footer";
interface TeamMember {
    name: string;
    designation: string;
    pic?: string;
}
const OurTeam = () => {
    const TeamData: TeamMember[] = [
        { pic: Avinash_Mitahnia, name: "Avinash Metahnia", designation: "Data Scientist" },
        { pic: Twinkle_Varma, name: "Twinkle Verma", designation: "Sr. Data Analyst" },
        { pic: Vishal_Verma, name: "Vishal Verma", designation: "Sr. Data Analyst" },
        { pic: Neha_Verma, name: "Neha Verma", designation: "Human Resource Manager" },
        { pic: Ajay_Singh, name: "Ajay Karan Singh Rajpoot", designation: "Content Writer" },
        { name: "Rinky Kushwah", designation: "Content Writer" },
        { pic: Dheer_Verma, name: "Dheer Verma", designation: "UI Design Head" },
        { pic: Manish_Dhubkarya, name: "Manish Dhubkarya", designation: "Full Stack Developer" },

    ]
    return (
        <div className="flex flex-col mb-10 items-center gap-y-20 inter-custom justify-center">
            <NavigationComponent />
            {/* Header */}
            <div className="w-full mt-35 flex justify-evenly p-6">
                <div className="flex w-full flex-col items-start">
                    <div className="w-full justify-evenly items-center flex">
                        <div className="w-[342px] h-[342px] bg-white rounded-full mb-7"> </div>
                        <div className="">
                            <div className="text-[40px] space-x-3 font-bold flex">
                                <span className="capitalize">turning</span>
                                <span className="text-[#8AFF84] uppercase">visions</span>
                                <span className="lowercase">INTO</span>
                                <span className="text-[#1B7BFF]">REALITY</span>
                            </div>
                            <div className="mt-10 text-[18px] font-medium leading-snug">
                                We are present in the industry since 2021 and have<br />
                                delivered our clients with top notch quality work and<br />
                                services.
                            </div>

                        </div>

                    </div>
                    <div className="text-[32px] leading-snug ml-40 roboto-regular">
                        <div className="font-normal">Himanshu Verma</div>
                        <div className="font-medium capitalize">Chief Executive Officer</div>
                    </div>
                </div>


            </div>
            {/* Team Members */}
            <div className="grid w-[77%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 justify-items-center">
                {TeamData.map((team, index) => (
                    <div key={index} className="w-auto flex flex-col items-center">
                        {!team.pic ? (
                            <div className="w-[216px] h-[265px] bg-white rounded-[5px]" />
                        ) : (
                            <img
                                className="w-[216px] h-[265px] rounded-[5px] object-cover"
                                src={team.pic}
                                alt={team.name}
                            />
                        )}
                        <div className="text-center leading-tight mt-6 text-[20px]">
                            <div className="font-normal">{team.name}</div>
                            <div className="font-medium w-full">{team.designation}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Bottom Banner */}
            <div className="w-full justify-center flex flex-col items-center">
                <div
                    style={{ backgroundImage: `url(${TeamBanner})` }}
                    className="bg-cover roboto-regular flex-col bg-center w-full flex gap-y-0 items-center justify-center h-[60vh] min-h-[350px] max-h-[456px] "
                >
                    <div className="text-white mb-7 text-center px-4 text-2xl sm:text-3xl md:text-[64px] font-extrabold leading-tight dm-sans-regular">
                        Be a part of the team !
                    </div>
                    <div className="text-[20px] mb-7">
                        Explore new possibilities with us everyday. Create your mark on future with us.
                    </div>
                    <div className="bg-gradient-to-r text-black px-14 py-2 rounded-xl cursor-pointer text-lg sm:text-[20px] shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold">
                        Join Us
                    </div>
                </div>
                {/* Footer */}
                <div className="w-full flex border-t-3 border-[#8AFF84] mt-0 flex-col items-center md:items-center">
                </div>
                <div className=" w-[83%] flex flex-col">
                    <Footer />
                </div>
            </div>

        </div>
    );
};

export default OurTeam;