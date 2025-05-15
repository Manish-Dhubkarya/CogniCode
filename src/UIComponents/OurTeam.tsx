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
import { OurTeamStyles as styles } from "../UIComponentCSS/OurTeamCss";
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
        <div className={styles.container}>
            <NavigationComponent />
            {/* Header */}
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.header2}>
                        <div className={styles.companyHeadBack}> </div>
                        <div>
                            <div className={styles.mainText}>
                                <span className={styles.turningText}>turning</span>
                                <span className={styles.visionsText}>visions</span>
                                <span className={styles.infoText}>INTO</span>
                                <span className={styles.realityText}>REALITY</span>
                            </div>
                            <div className={styles.aboutPara}>
                                We are present in the industry since 2021 and have<br />
                                delivered our clients with top notch quality work and<br />
                                services.
                            </div>

                        </div>

                    </div>
                    <div className={styles.headMain}>
                        <div className={styles.headName}>Himanshu Verma</div>
                        <div className={styles.headDesignation}>Chief Executive Officer</div>
                    </div>
                </div>


            </div>
            {/* Team Members */}
            <div className={styles.teamMemberContainer}>
                {TeamData.map((team, index) => (
                    <div key={index} className={styles.teamMemberMain}>
                        {!team.pic ? (
                            <div className={styles.notTeamPic} />
                        ) : (
                            <img
                                className={styles.teamPic}
                                src={team.pic}
                                alt={team.name}
                            />
                        )}
                        <div className={styles.teamMemberDetails}>
                            <div className={styles.teamMemberName}>{team.name}</div>
                            <div className={styles.teamMemberDesignation}>{team.designation}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Bottom Banner */}
            <div className={styles.bottomBannerContainer}>
                <div
                    style={{ backgroundImage: `url(${TeamBanner})` }}
                    className={styles.bannerBackMain}
                >
                    <div className={styles.beAPartText}>
                        Be a part of the team !
                    </div>
                    <div className={styles.exploreNewPossibilities}>
                        Explore new possibilities with us everyday. Create your mark on future with us.
                    </div>
                    <div className={styles.joinUsText}>
                        Join Us
                    </div>
                </div>
                {/* Footer */}
                <div className={styles.border}>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>

        </div>
    );
};

export default OurTeam;