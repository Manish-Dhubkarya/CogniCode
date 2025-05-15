function ScrollingFooter() {
    const marqueeStyle = {
      whiteSpace: "nowrap",
      display: "inline-block",
      animation: "marquee 25s linear infinite",
      fontSize: "96px",
      fontFamily: "Saira Stencil One, sans-serif",
    };
  
    const containerStyle = {
      overflow: "hidden",
      width: "100%",
      position: "relative" as const,
    };
  
    const ScrollingText = ["360 Vision", "100% Accuracy", "1200+ Projects"];
    const repeatedText = [...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText, ...ScrollingText];

    return (
      <div style={containerStyle}>
        <div style={marqueeStyle}>
          {repeatedText.map((text, index) => (
            <div
            key={index}
            className="inline-block mr-35 md:text-[96px] sm:text-[80px] text-[70px] font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(180deg, #8AFF84 0%, #C0F9BD 50.5%, #1B7BFF 100%)",
              WebkitBackgroundClip: "text", // important!
              WebkitTextFillColor: "transparent", // important!
            }}
          >
            {text}
          </div>
          
          
          ))}
        </div>
      </div>
    );
  }
  
  export default ScrollingFooter;
  