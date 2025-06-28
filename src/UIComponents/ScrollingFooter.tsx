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
    animation: "scroll 5s linear infinite",
  };

  const ScrollingText = ["360 Vision", "100% Accuracy", "1200+ Projects"];
  // Duplicate text enough times to ensure no gaps (increased for wide screens)
  const repeatCount = 6; // Adjust based on content length and screen size

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${100 / repeatCount}%); // Adjust translation based on repeat count
            }
          }
        `}
      </style>
      <div style={innerMarqueeStyle}>
        {[...Array(repeatCount)].flatMap((_, i) =>
          ScrollingText.map((text, index) => (
            <span
              key={`text-${i}-${index}`}
             className="inline-block mr-2 sm:mr-6 md:mr-9 lg:mr-15 xl:mr-30 sm:text-[50px] md:text-[56px] lg:text-[70px] text-[30px] font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(180deg, #8AFF84 0%, #C0F9BD 50.5%, #1B7BFF 200%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                paddingRight: "35px",
              }}
            >
              {text}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default ScrollingFooter;