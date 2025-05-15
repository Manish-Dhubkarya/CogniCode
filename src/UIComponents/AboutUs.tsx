import NavigationComponent from './NavigationComponent';
import Footer from './Footer';
import AboutBack from "../assets/AboutBack.gif";
import AboutBack2 from "../assets/AboutBack2.gif";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import { aboutUsStyles as s } from "../../src/UIComponentCSS/AboutUsCss";
const content = {
  aboutUs: {
    title: "ABOUT US",
    description: "Our genesis began with an audacious goal: to leverage technology in crafting solutions that resonate across global businesses and communities. Our expedition is characterized by a spirit of innovation, tenacity, and a fervent pursuit of excellence. From our foundational days to assuming a pivotal role in digital evolution, we firmly believe that each stride we take brings us nearer to a world brimming with opportunities.",
    buttonText: "KNOW MORE",
    imageAlt: "About Us Illustration"
  },
  achievements: {
    title: "ACHIEVEMENTS",
    imageAlt: "Achievements Illustration",
    items: [
      { description: "" },
      { description: "" },
      { description: "" }
    ]
  },
  futureAims: {
    title: "FUTURE AIMS",
    description: "At Cognicode, we see a future where technology empowers every individual. Our commitment is to eliminate barriers in innovation, fostering growth for both enterprises and people to fully engage with the digital age.",
    imageAlt: "Future Aims Illustration",
    commitment: {
      title: "Our Commitment",
      description: "Our dedication lies in fostering an environment where every idea is nurtured, and we continually push the limits of technology to deliver outstanding results for our partners."
    },
    belief: {
      title: "What We Believe",
      description: "We believe in the power of collaboration and creativity, driving our mission to channel innovative solutions that not only fulfill our clients' needs but reshape the technological landscape."
    }
  },
  bottom: {
    bannerTitle: "Want to create FUTURE ?",
    bannerDescription: "Explore new possibilities with us everyday. Create your mark on future with us.",
    buttonText: "Join Us"
  }
};

const AboutUs = () => {
  return (
   <div className={s.container}>
  <NavigationComponent />

  {/* About Us Section */}
  <div className={s.section}>
    <section className={s.textSection}>
      <div className={s.title}>{content.aboutUs.title}</div>
      <div className={s.description}>{content.aboutUs.description}</div>
      <div className={s.button}>{content.aboutUs.buttonText}</div>
    </section>
    <div className='mt-5 md:mt-0'>
      <img className={s.image} src={AboutBack} alt={content.aboutUs.imageAlt} />
    </div>
  </div>

  {/* Achievements Section */}
  <div className={s.achievementsSection}>
    <div className='mt-15 md:mb-0'>
      <img src={AboutBack2} className='w-full max-w-[275px] h-[363px]' alt={content.achievements.imageAlt} />
    </div>
    <section className="px-4 flex flex-col items-center md:items-end md:px-12 text-center md:text-end">
      <div className={s.achievementsTitle}>{content.achievements.title}</div>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        {content.achievements.items.map((item, index) => (
          <div key={index} className={s.achievementCard}>
            <div className="p-4 text-center">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  </div>

  {/* Future Aims Section */}
  <div className={s.futureAimsSection}>
    <section className={s.futureText}>
      <div className={s.futureTitle}>{content.futureAims.title}</div>
      <div className={s.futureDescription}>{content.futureAims.description}</div>
      <div className={s.subBlocks}>
        <div className="md:w-[380px]">
          <div className={s.subTitle}>{content.futureAims.commitment.title}</div>
          <div className={s.subText}>{content.futureAims.commitment.description}</div>
        </div>
        <div className="md:w-[382px]">
          <div className={s.subTitle}>{content.futureAims.belief.title}</div>
          <div className={s.subText}>{content.futureAims.belief.description}</div>
        </div>
      </div>
    </section>
    <div className='mt-8 md:mt-0 pr-0 md:pr-[115px]'>
      <img src={AboutBack2} className='w-full max-w-[275px] h-auto' alt={content.futureAims.imageAlt} />
    </div>
  </div>

  {/* Bottom */}
  <div className="w-full flex flex-col items-center">
    <div
      style={{ backgroundImage: `url(${TeamBanner})` }}
      className={s.bottomBanner}
    >
      <div className={s.bottomTitle}>{content.bottom.bannerTitle}</div>
      <div className={s.bottomDescription}>{content.bottom.bannerDescription}</div>
      <div className={s.button}>{content.bottom.buttonText}</div>
    </div>
    <div className={s.footerWrapper}></div>
    <div className={s.footerInner}>
      <Footer />
    </div>
  </div>
</div>
  );
};

export default AboutUs;