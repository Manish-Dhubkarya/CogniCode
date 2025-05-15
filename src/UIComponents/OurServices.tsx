import React, { useEffect, useState } from "react";
import NavigationComponent from "./NavigationComponent";
import ThesisBack from "../assets/ServicesCSS/ThesisBack.png";
import DissertationBack from "../assets/ServicesCSS/DissertationBack.png";
import PaperBack from "../assets/ServicesCSS/PaperBack.png";
import DSBack from "../assets/ServicesCSS/DSBack.png";
import PythonBack from "../assets/ServicesCSS/PythonBack.png";
import PredictiveAnalytics from "../assets/ServicesCSS/Predictive_analytics.png";
import IntelligentAutomation from "../assets/ServicesCSS/Intelligent_automation.png";
import NLP_Solutions from "../assets/ServicesCSS/NLP_Solutions.png";
import ScalableAIServices from "../assets/ServicesCSS/Scalable_AI_services.png";
import MLModel from "../assets/ServicesCSS/Machine_learning_models.png";
import ScrollingFooter from "./ScrollingFooter";
import Footer from "./Footer";
import { ServicesStyles as styles } from "../UIComponentCSS/OurServicesCss";
const OurServices: React.FC = () => {
  // Responsive breakpoints
  const [screenSize, setScreenSize] = useState("XL");

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width <= 480) setScreenSize("XS");
      else if (width <= 768) setScreenSize("SM");
      else if (width <= 1024) setScreenSize("MD");
      else if (width <= 1440) setScreenSize("LG");
      else setScreenSize("XL");
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const getCardDimensions = () => {
    switch (screenSize) {
      case "XS": return { width: 140, height: 230, font: 12 };
      case "SM": return { width: 180, height: 260, font: 16 };
      case "MD": return { width: 220, height: 320, font: 18 };
      case "LG": return { width: 254, height: 399, font: 24 };
      default: return { width: 254, height: 399, font: 24 };
    }
  };

  const cardSize = getCardDimensions();

  const WritingServices = [
    { title: "Thesis Writing", back: ThesisBack },
    { title: "Dissertation Writing", back: DissertationBack },
    { title: "Paper Writing", back: PaperBack },
    { title: "Plagarism Removal", back: PaperBack },
  ];

  const ITServices = [
    { title: "Data Science Services", back: DSBack },
    { title: "Python Programming Services", back: PythonBack },
  ];

  const AIservices = [
    { title: "Predictive Analytics", back: PredictiveAnalytics },
    { title: "Intelligent Automation", back: IntelligentAutomation },
    { title: "NLP Solutions", back: NLP_Solutions },
    { title: "Scalable AI Services", back: ScalableAIServices },
    { title: "Machine learning models", back: MLModel },
  ];

  const renderSection = (
    title: string,
    services: { title: string; back: string }[]
  ) => (
    <div className={styles.renderSectionMain}>
      <div className={styles.renderSectionTitle}>
        {title}
      </div>



      <div
        className={`${screenSize === "LG" || screenSize === "XL"
            ? styles.screenSizeLG_XL
            : styles.screenSizeNotLG_XL
          }`}
      >

        {services.map((item, index) => (
          <div
            key={index}
            className={styles.servicesMapMain}
            style={{
              minWidth: cardSize.width,
              flexShrink: 0,
            }}
          >
            {/* Card Image */}
            <div className={styles.CardMain}>
              <div
                className={styles.Card}
                style={{
                  width: cardSize.width,
                  height: cardSize.height,
                  backgroundImage: `url(${item.back})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "2px 0px 4px #1B7BFF, 0px 2px 4px #8AFF84",
                }}
              ></div>

              {/* Title - full text in one line, no wrap, no truncate */}
              <div
                className={styles.cardTitle}
                style={{
                  fontSize: cardSize.font,
                }}
              >
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.servicesMain}>
      <NavigationComponent />

      <div className={styles.renderSection}>

        {renderSection("Writing Services", WritingServices)}

        <div className={styles.contentsMain}>
          <div className={styles.contentMain2}>
            <div className={styles.contentMain3}>
              <div>Writing Services</div>
              <div>IT Solutions</div>
              <div>AI Services</div>
            </div>
            <div className={styles.contentBorder}></div>
          </div>
        </div>

        {renderSection("IT Solutions", ITServices)}
        {renderSection("AI Services", AIservices)}
      </div>

      <div className={styles.scrollFooter}>
        <ScrollingFooter />
      </div>
      <div className={styles.footerMain}>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
