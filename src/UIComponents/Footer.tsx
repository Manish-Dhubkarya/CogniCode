import InstaLogo from "../assets/InstaLogo.png"
import LinkedinLogo from "../assets/LinkedInLogo.png"
import FbLogo from "../assets/FbLogo.png"
import { FooterStyles as styles } from "../UIComponentCSS/FooterCss"
function Footer() {
  const QuickLinkContent=["Thesis Writing","IT solutions","Ai solutions","Article Writing","Graphic Designing","Plagiarism Check"]
  const MeetUs=["B/2, Mahesh Nagar,","Tulsi Vihar Colony","Gwalior, M.P 474002"]
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.quickLinksWrapper}>
          <h3 className={styles.quickLinksTitle}>Quick Links</h3>
          {QuickLinkContent.map((item, index) => (
            <a key={index} href="#" className={styles.quickLink}>
              {item}
            </a>
          ))}
        </div>

        <div className={styles.meetUsWrapper}>
          <div className={styles.meetUsTitle}>Meet us :</div>
          {MeetUs.map((item, index) => (
            <p key={index} className={styles.addressText}>
              {item}
            </p>
          ))}
          <h3 className={styles.followUsTitle}>Follow us :</h3>
          <div className={styles.socialIconsWrapper}>
            <img className={styles.socialIcon} src={InstaLogo} />
            <img className={styles.linkedInIcon} src={LinkedinLogo} />
            <img className={styles.socialIcon} src={FbLogo} />
          </div>
        </div>

        <div className={styles.queryWrapper}>
          <h3 className={styles.queryTitle}>Have a Query ?</h3>
          <div className={styles.separator}></div>
          <p className={styles.contactTitle}>Contact us :</p>
          <a href="tel:+917000515617" className={styles.contactLink}>
            +91-7000515617
          </a>
          <a href="mailto:office.cognicode@gmail.com" className={styles.contactLink}>
            office.cognicode@gmail.com
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2025 CogniCode | Powered By CogniCode
      </div>
    </div>
  )
}

export default Footer