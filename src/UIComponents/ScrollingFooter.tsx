import { ScrollingFooterStyles as styles } from "../UIComponentCSS/ScrollingFooterCss";

function ScrollingFooter() {
  const marqueeStyle = {
    whiteSpace: "nowrap",
    display: "inline-block",
    animation: "marquee 240s linear infinite", // Faster 12s for smooth, continuous flow
    fontFamily: "Saira Stencil One, sans-serif",
  };

  const containerStyle = {
    overflow: "hidden",
    width: "100%",
    position: "relative" as const,
  };

  const innerMarqueeStyle = {
    display: "inline-flex", // Ensures both marquee copies align seamlessly
    width: "fit-content",
  };

  const ScrollingText = ["360 Vision", "100% Accuracy", "1200+ Projects"];
  // Repeat text 50 times per marquee for ample coverage
  const repeatedText = Array(50).fill(ScrollingText).flat();

  return (
    <div style={containerStyle}>
      <div style={innerMarqueeStyle}>
        {/* First marquee */}
        <div style={marqueeStyle}>
          {repeatedText.map((text, index) => (
            <span
              key={`first-${index}`}
              className={styles.container}
              style={{
                backgroundImage: "linear-gradient(180deg, #8AFF84 0%, #C0F9BD 50.5%, #1B7BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {text}
            </span>
          ))}
        </div>
        {/* Second marquee for seamless looping */}
        <div style={marqueeStyle}>
          {repeatedText.map((text, index) => (
            <span
              key={`second-${index}`}
              className={styles.container}
              style={{
                backgroundImage: "linear-gradient(180deg, #8AFF84 0%, #C0F9BD 50.5%, #1B7BFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                paddingRight: "35px", // Match mr-35 from CSS
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollingFooter;