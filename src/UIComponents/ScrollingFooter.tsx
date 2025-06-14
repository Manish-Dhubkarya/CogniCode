function ScrollingFooter() {
  const containerStyle: React.CSSProperties = {
    overflow: "hidden",
    width: "100%",
    position: "relative",
  };

  const innerMarqueeStyle: React.CSSProperties = {
    display: "inline-flex",
    whiteSpace: "nowrap",
    fontFamily: "Saira Stencil One, sans-serif",
    animation: "scroll 8s ease-in-out infinite", // total duration
  };

  const ScrollingText = ["360 Vision", "100% Accuracy", "1200+ Projects"];

  return (
    <div style={containerStyle}>
      <style>
{`
  @keyframes scroll {
    0% {
      transform: translateX(50vw); /* Start from center to right */
    }
    50% {
      transform: translateX(calc(-100% + 50vw)); /* End with last part centered */
    }
    100% {
      transform: translateX(50vw); /* Loop back to start */
    }
  }
`}
</style>

      <div style={innerMarqueeStyle}>
        {ScrollingText.map((text, index) => (
          <span
            key={`text-${index}`}
            className={"inline-block mr-15 md:mr-25 lg:mr-35 xl:mr-35 md:text-[96px] sm:text-[75px] text-[50px] font-bold text-transparent bg-clip-text"}
            style={{
              backgroundImage: "linear-gradient(180deg, #8AFF84 0%, #C0F9BD 50.5%, #1B7BFF 200%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingRight: "35px",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}


export default ScrollingFooter;