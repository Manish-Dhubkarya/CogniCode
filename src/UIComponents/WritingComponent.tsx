import Footer from "./Footer";
import NavigationComponent from "./NavigationComponent"
import ScrollingFooter from "./ScrollingFooter";
import { WritingComponentStyles as styles } from "../UIComponentCSS/WritingComponentCss";
interface WritingComponentProps {
    services: string[];
    mainHeading: string;
}

const WritingComponent:React.FC<WritingComponentProps>=({services, mainHeading})=> {
   
  return (
    <div className={styles.container}>
      <NavigationComponent/>
      <div className={styles.mainHeading}>
      {mainHeading}
      </div>
      {/* Services List */}
      <div className={styles.servicesListContainer}>
  <ul className={`${mainHeading==="Paper Writing"? styles.ifHeadingPaperWriting :styles.elseHeadingPaperWriting} ${styles.servicesMain}`}>
    {services.map((service, index) => (
      <li key={index} className={styles.servicesList}>
        <span className={styles.servicesSpan}>{index+1}.{" "}{service}</span>
      </li>
    ))}
  </ul>
</div>
<div className={styles.ourServices}>
    <div className={styles.ourServicesMain}>
        <div>Writing Services</div>
        <div>IT Solutions</div>
        <div>AI Services</div>
    </div>
    <div className={styles.border}></div>

</div>
<div className={styles.scrollingFooter}>
        <ScrollingFooter />
      </div>
      <div className={styles.footerContainer}>
      <div className={styles.footerMain}>
      <Footer />
      </div>
      </div>
    </div>
  )
}

export default WritingComponent;