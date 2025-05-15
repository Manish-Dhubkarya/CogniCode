import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { NavigationStyles as styles } from "../UIComponentCSS/NavigationCss";
export default function NavigationComponent() {
  const Headings = ["About Us", "Services", "Conferences", "Publications", "Careers"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    // Cleanup on component unmount
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={styles.nevbar}>
        <div className={styles.mobileContainer}>
          <div className={styles.navIcon}>
            <IoMdMenu
              className={styles.navIconMain}
              size={25}
              onClick={toggleMenu}
            />
          </div>
          <div className={styles.headingMain}>
            <ul className={styles.headingMap}>
              {Headings.map((heading, index) => (
                <li key={index} className={styles.headingLi}>
                  <a
                    href="#"
                    className={styles.headingAnchor}
                  >
                    {heading}
                  </a>
                  <MdArrowDropDown size={20} color="#ffff" />
                </li>
              ))}
            </ul>
            <IoMdMenu
              className={styles.navIconMobile}
              size={25}
              onClick={toggleMenu}
            />
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenuMain} ${isMenuOpen ? styles.isOpenMobileMenu : styles.isNotOpenMobileMenu}`}
        >
          <ul className={styles.mobileHeadingMain}>
            {Headings.map((heading, index) => (
              <>
                <li key={index} className={styles.mobileHeadingLi}>
                  <a
                    href="#"
                    className={styles.mobileHeadingAnchor}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {heading}
                  </a>
                </li>
                <div className={styles.border}></div>
              </>
            ))}
          </ul>
        </div>
      </nav>
      {/* Background Overlay for Blur */}
      {isMenuOpen && (
        <div
          className={styles.backgroundOverlay}
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}