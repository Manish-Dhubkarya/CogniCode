function MarqueeDual() {


  const baseMarqueeStyle: React.CSSProperties = {
    display: "inline-flex",
    whiteSpace: "nowrap",
    fontFamily: "Saira Stencil One, sans-serif",
  };

  const ScrollingText = ["IT Solutions", "Thesis Writing", "AI Services", "UI Designing", "Careers"];
  const repeatCount = 6;

  return (
    <div>
      <style>
        {`
          @keyframes scrollRTL {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${100 / repeatCount}%);
            }
          }

          @keyframes scrollLTR {
            0% {
              transform: translateX(-${100 / repeatCount}%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
<div className=" space-y-0 sm:space-y-2 md:space-y-4 lg:space-y-5 mt-2 sm:mt-5 md:mt-7 lg:mt-8 ">
      {/* Line 1 - Scroll Right to Left */}
      <div className="overflow-hidden w-full relative">
        <div
          style={{
            ...baseMarqueeStyle,
            animation: "scrollRTL 7s linear infinite",
          }}
        >
          {[...Array(repeatCount)].flatMap((_, i) =>
            ScrollingText.map((text, index) => (
              <span
                key={`rtl-${i}-${index}`}
                className="mr-10 sm:mr-10 md:mr-15 lg:mr-17 xl:mr-20 sm:text-[15px] md:text-[18px] lg:text-[18px] text-[12px] font-normal libre-franklin"
              >
                {text}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Line 2 - Scroll Left to Right */}
      <div className="overflow-hidden w-full relative">
        <div
          style={{
            ...baseMarqueeStyle,
            animation: "scrollLTR 7s linear infinite",
          }}
        >
          {[...Array(repeatCount)].flatMap((_, i) =>
            ScrollingText.map((text, index) => (
              <span
                key={`ltr-${i}-${index}`}
                className="mr-10 sm:mr-10 md:mr-15 lg:mr-17 xl:mr-20 sm:text-[15px] md:text-[18px] lg:text-[18px] text-[12px] font-normal libre-franklin"
              >
                {text}
              </span>
            ))
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default MarqueeDual;
