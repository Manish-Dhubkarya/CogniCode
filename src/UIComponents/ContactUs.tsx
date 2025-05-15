import ContactUsBannerBack from "../assets/ContactUsBannerBack.gif";
import { LuPlus } from "react-icons/lu";
import Footer from "./Footer";
import ScrollingFooter from "./ScrollingFooter";
import NavigationComponent from "./NavigationComponent";
import { contactUsStyles as styles } from "../UIComponentCSS/ContactUsCss";
export default function ContactUs() {
  const ConnectByList = [
    "Enquire about price as per services",
    "Looking for a career change",
    "Looking for new competitions",
    "New business collaboration",
    "Our Vision & Mission",
    "New business collaboration",
  ];
  const UserDetails = [
    "First name*",
    "Last name*",
    "Email address*",
    "Phone Number*",
    "How can we help you?*",
  ];

  return (
    <div className={styles.container}>
  <NavigationComponent />

  {/* Banner */}
  <div
    style={{ backgroundImage: `url(${ContactUsBannerBack})` }}
    className={styles.banner(ContactUsBannerBack)}
  >
    <div className={styles.bannerButton}>Send Message</div>
    <div className={styles.bannerText}>
      Thanks for your interest in Cognicode.
      <div>Choose from the options below and we’ll connect you</div>
      <div>with the right person.</div>
    </div>
  </div>

  {/* Connect By */}
  <div className={styles.connectWrapper}>
    <div className={styles.connectInner}>
      <div className={styles.connectHeading}>
        Connect with us to explore incredible future possibilities
      </div>
      {ConnectByList.map((item, index) => (
        <div key={index} className={styles.connectItemWrapper}>
          <div className={styles.connectItem}>
            <div>{item}</div>
            <LuPlus size={20} />
          </div>
          <div className={styles.connectDivider}></div>
        </div>
      ))}
    </div>
  </div>

  {/* Inquiry Details */}
  <div className={styles.inquiryWrapper}>
    <div className={styles.inquiryInner}>
      <div className={styles.inquiryText}>
        Please provide the following information and we’ll put you in touch with the right person.
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.aboutTitle}>Inquiry Type*</div>
        <div className={styles.aboutLine}></div>
        <div className={styles.aboutSubtitle}>About You</div>
      </div>
      {UserDetails.map((item, index) => (
        <div key={index} className={styles.inputWrapper}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id={`input-${index}`}
              placeholder=" "
              className={styles.inputField}
            />
            <label htmlFor={`input-${index}`} className={styles.inputLabel}>
              {item}
            </label>
            <div className={styles.inputUnderline} />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Footer */}
  <div className={styles.scrollingFooterWrapper}>
    <ScrollingFooter />
  </div>
  <div className={styles.footerWrapper}>
    <div className={styles.footerInner}>
      <Footer />
    </div>
  </div>
</div>

  );
}