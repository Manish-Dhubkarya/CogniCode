import NavigationComponent from './NavigationComponent';
import HomeBack from "../assets/HomeBack.gif";
import ITSolutionsBack from "../assets/ITSolutionsBack.png"
import ThesisWritingBack from "../assets/ITSolutionsBack.png"
import AIServices from "../assets/AIServicesBack.png"
import NewEvents from "../assets/NewEventsBack.gif"
import ScrollingFooter from './ScrollingFooter';
import Footer from './Footer';
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif"
import { LuPlus } from 'react-icons/lu';
// import { HomeStyles as styles } from '../UIComponentCSS/HomeCss';
// import { containerStyle } from '../UIComponentCSS/HomeCss';
// import { marqueeStyleBase } from '../UIComponentCSS/HomeCss';
import MarqueeStyles, { HomeStyles as style } from '../UIComponentCSS/HomeCss';
function Home() {
  const { home: styles, container: containerStyle, marquee: marqueeStyleBase } = style;
  interface TypesCardData {
    title: string,
    heading: string
    back: string

  }
  const CardsData: TypesCardData[] = [{ title: "IT SOLUTIONS", heading: "One stop solution", back: ITSolutionsBack },
  { title: "Thesis Writing", heading: "Thoughts to paper", back: ThesisWritingBack },
  { title: "AI SERVICES", heading: "Mindset & Chipset", back: AIServices },
  { title: "NEW EVENTS", heading: "A Fresh Start 2025", back: NewEvents },
  ]
  interface Comment {
    id: number;
    name: string;
    message: string;
    timeAgo: string;
    likes: number;
    dislikes: number;
  }

  const comments: Comment[] = [
    {
      id: 1,
      name: "Akanksha Soni",
      message: "Just awesome. The best coder I have found...",
      timeAgo: "2 years ago",
      likes: 6,
      dislikes: 2,
    },
    {
      id: 2,
      name: "Ayush Gour",
      message: "If you're seeking for quality work, this is the place...",
      timeAgo: "1 year ago",
      likes: 4,
      dislikes: 1,
    },
    {
      id: 3,
      name: "Manas Dwivedi",
      message: "I really appreciate the work done by the team...",
      timeAgo: "2 years ago",
      likes: 3,
      dislikes: 0,
    },
    {
      id: 4,
      name: "Charlie MN",
      message: "Very good service. Very frank and on-time delivery...",
      timeAgo: "2 years ago",
      likes: 5,
      dislikes: 1,
    },
    {
      id: 5,
      name: "Bharat Verma",
      message: "Fully satisfied with the services. Would highly recommend...",
      timeAgo: "1 year ago",
      likes: 7,
      dislikes: 0,
    },
    {
      id: 7,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    },
    {
      id: 8,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    }, {
      id: 9,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    }, {
      id: 10,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    }, {
      id: 11,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    }, {
      id: 12,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    }, {
      id: 13,
      name: "Ankur Yadav",
      message: "Simply amazing, the best coder I’ve ever encountered...",
      timeAgo: "2 years ago",
      likes: 8,
      dislikes: 1,
    },
  ];

  // comment
  const CommentReadSection: React.FC = () => {
    return (
      <div className={styles.container}>
        <div className={styles.comment}>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={styles.commentMain}
            >
              <div className={styles.commentName}>{comment.name}</div>
              <div className={styles.commentTime}>{comment.timeAgo}</div>
              <p className={styles.commentMessage}>{comment.message}</p>
              <div className={styles.commentLikeDislike}>
                <span>👍 {comment.likes}</span>
                <span>👎 {comment.dislikes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };




  // Left to right animation
  const marqueeStyleLeftToRight = {
    ...marqueeStyleBase,
    animation: "marqueeLeftToRight 30s linear infinite",
  };

  // Right to left animation
  const marqueeStyleRightToLeft = {
    ...marqueeStyleBase,
    animation: "marqueeRightToLeft 30s linear infinite",
  };

  // Text content for scrolling
  const ScrollingText = ["IT Solutions", "Thesis Writing", "AI Services", "UI Designing", "Careers"];
  // Increase repetitions to ensure continuous scrolling
  const repeatedText = [...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText];

  const ConnectByList = [
    "How do you help in thesis writing",
    "How does the pricing work for teams",
    "What other services you provide",
    "How does your refund policy work",
  ];
  return (
    <div className={styles.mainContainer}>
      <NavigationComponent />
      <div
        className={styles.homeBanner}
        style={{
          backgroundImage: `url(${HomeBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.homeBannerTextMain}>
          <div className={styles.homeTurningText}>turning</div>
          <div
            className={styles.homeBannerVisionText}
            style={{
              backgroundImage: 'linear-gradient(180deg, #8AFF84 0%, #97BBCB 55.5%, #004EB9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Visions
          </div>
          <div className={styles.homeBannerToText}>to</div>
          <div
            className={styles.homeBannerRealityText}
            style={{
              backgroundImage: 'linear-gradient(180deg, #8AFF84 0%, #97BBCB 55.5%, #004EB9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            reality
          </div>
        </div>
        <div className={styles.homeBannerContentMain}>
          <div className={styles.homeBannerContent}>
            We are present in the industry since 2021 and have delivered our clients with top notch quality work and services. Connect with us for further discussions
          </div>
          <div className={styles.homeBannerConnectText}>
            Connect
          </div>
        </div>
      </div>

      {/* What we provide */}
      <div className={styles.marqueeTextMain}>
        {/* Add CSS for animations */}
        <MarqueeStyles/>

        {/* Scroll left to right */}
        <div style={{ ...style.container, position: 'relative' }}>
          <div style={marqueeStyleLeftToRight}>
            {repeatedText.map((text, index) => (
              <span
                key={`top-${index}`}
                className={styles.marqueeText}
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll right to left */}
        <div style={containerStyle as React.CSSProperties}>
          <div style={marqueeStyleRightToLeft}>
            {repeatedText.map((text, index) => (
              <span
                key={`bottom-${index}`}
                className={styles.marqueeText2}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cardDataMain}>
        {CardsData.map((item) => (
          <div style={{
            backgroundImage: `url(${item.back})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "2px 0px 4px #1B7BFF, 0px 2px 4px #8AFF84",
          }} className={styles.cardData}>
            <div className={styles.cardTitle}> {item.title}</div>
            <div className={styles.cardHeading}>{item.heading}</div>
          </div>

        ))}
      </div>
      <div className={styles.whyOnlyText}>Why only us ???</div>
      {/* bottom */}
      <div className={styles.scrollFooter}>
        <ScrollingFooter />
      </div>
      <div className={styles.comments}>
        <CommentReadSection />
      </div>
      <div className={styles.teamBannerMain}>
        <div
          style={{ backgroundImage: `url(${TeamBanner})` }}
          className={styles.teamBannerMain2}
        >
          <div className={styles.teamBannerCareers}>
            Careers
          </div>
          <div className={styles.teamBannerGrowCareer}>
            Grow your career at the heart of change.It's your time to shine.
          </div>
          <div className={styles.teamBannerBringYourIngunity}>
            Bring your Ingenuity, Curiosity and Big ideas.
          </div>
          <div className={styles.teambannerJoinUsText}>
            Join Us
          </div>
        </div>
        <div className={styles.connectMain}>
          <div className={styles.thoughtMain}>
            <div className={styles.thought}>Create what the world needs not what you are capable of</div>
            <div>- Dheer Verma</div>
          </div>
          <div className={styles.connectListMain}>Frequently asked questions</div>
          {ConnectByList.map((item, index) => (
            <div key={index} className={styles.connectItemsMain}>
              <div className={styles.connectItems}>
                <div>{item}</div>
                <LuPlus size={20} />
              </div>
              <div className={styles.connectListBorder}></div>
            </div>
          ))}
          </div>
          <div className={styles.footerMain}>
      <div className={styles.footer}>
      <Footer />
      </div>
      </div>
      </div>
    </div>
  );
}

export default Home;