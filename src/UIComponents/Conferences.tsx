import Footer from "./Footer";
import NavigationComponent from "./NavigationComponent";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import { ConferencesStyles as styles } from "../UIComponentCSS/ConferencesCss"; // import styles from separate file or same file

interface ConferenceRow {
  "S no": number;
  Publisher: string;
  "Conference Name": string;
  "Area/Subject": string;
  "Last date of Submission": string;
  "Registration Charges": string;
  "Links": string;
}

const Conferences: React.FC = () => {
  const tableData: ConferenceRow[] = [
    { "S no": 1, Publisher: "Springer", "Conference Name": "fouuytgr0r98y7tyghjrdfkoi9fy76tgfdhjkopd098yt6dftghfdjf87gutrgfhjkdfo987dfutfgdhjidfiuytgfdvbnm", "Area/Subject": "", "Last date of Submission": "", "Registration Charges": "", "Links": "" },
    { "S no": 2, Publisher: "IEEE", "Conference Name": "", "Area/Subject": "", "Last date of Submission": "", "Registration Charges": "", "Links": "" },
    { "S no": 3, Publisher: "Springer", "Conference Name": "", "Area/Subject": "", "Last date of Submission": "", "Registration Charges": "", "Links": "" },
    { "S no": 4, Publisher: "IEEE", "Conference Name": "", "Area/Subject": "", "Last date of Submission": "", "Registration Charges": "", "Links": "" },
    { "S no": 5, Publisher: "IEEE", "Conference Name": "", "Area/Subject": "", "Last date of Submission": "", "Registration Charges": "", "Links": "" },
    { "S no": 6, Publisher: "Springer", "Conference Name": "", "Area/Subject": "", "Last date of Submission": "", "Registration Charges": "", "Links": "" },
  ];

  return (
    <div className={styles.container}>
      <NavigationComponent />

      <div className={styles.tableWrapper}>
        <div className={styles.tableGrid}>
          {/* Header */}
          <div className="contents">
            {Object.keys(tableData[0]).map((key) => (
              <div
                key={key}
                className={`${styles.headerCell} ${key === "Conference Name" ? styles.conferenceNameHeader : ""}`}
              >
                {key === "S no" ? "S no." : key}
              </div>
            ))}
          </div>

          {/* Data */}
          {tableData.map((row) => (
            <div key={row["S no"]} className="contents">
              {Object.values(row).map((value, index) => (
                <div
                  key={`${row["S no"]}-${index}`}
                  className={`${styles.dataRowCell} ${index === 2 ? styles.conferenceNameCell : ""}`}
                >
                  {index === 0 ? `${value}.` : value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className={styles.bottomSection}>
        <div
          style={{ backgroundImage: `url(${TeamBanner})` }}
          className={styles.bannerWrapper}
        >
          <div className={styles.bannerHeading}>Want to create FUTURE ?</div>
          <div className={styles.bannerSubText}>
            Explore new possibilities with us everyday. Create your mark on future with us.
          </div>
          <div className={styles.bannerButton}>Join Us</div>
        </div>

        {/* Footer */}
        <div className={styles.footerDivider} />
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Conferences;
