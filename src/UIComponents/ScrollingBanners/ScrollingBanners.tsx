import React, { useEffect, useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

interface ScrollingBannersProps {
images: string[];
}

const ScrollingBanners: React.FC<ScrollingBannersProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const total = images.length;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Breakpoints
  const isXXS = width <= 200;
  const isXS = width > 200 && width <= 300;
  const isSM = width > 300 && width <= 500;
  const isMD = width > 500 && width <= 700;
  const isLG = width > 700 && width <= 900;
  const isXL = width > 900 && width <= 1200;

  const showArrows = !(isXXS || isXS || isSM || isMD || isLG);

  const getImageSize = () => {
    if (isXXS || isXS) return { w: 160, h: 110 };
    if (isSM) return { w: 200, h: 140 };
    if (isMD) return { w: 270, h: 170 };
    if (isLG) return { w: 340, h: 220 };
    if (isXL) return { w: 400, h: 260 };
    return { w: 450, h: 300 };
  };

  const { w, h } = getImageSize();

  const throttle = (callback: () => void) => {
    if (isLocked) return;
    setIsLocked(true);
    callback();
    setTimeout(() => setIsLocked(false), 500);
  };

  const next = () =>
    throttle(() => {
      setCurrent((prev) => (prev + 1) % total);
    });

  const prev = () =>
    throttle(() => {
      setCurrent((prev) => (prev - 1 + total) % total);
    });

  const getRelativeIndex = (i: number) => (i - current + total) % total;

  // Touch / Mouse events
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    touchStartX.current = clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    touchEndX.current = clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      Math.abs(touchStartX.current - touchEndX.current) > 50
    ) {
      if (touchStartX.current > touchEndX.current) {
        next();
      } else {
        prev();
      }
    }
    isDragging.current = false;
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={(e) => {
        if (isDragging.current) handleTouchMove(e);
      }}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
        {/* change */}
<div className={`relative cursor-grab active:cursor-grabbing w-full max-w-7xl flex items-center justify-center  ${isXXS || isXS?"h-[180px] perspective-[200px]" : isSM?"h-[180px] perspective-[600px]": isMD?"h-[210px] perspective-[1000px]": isLG?"h-[270px] perspective-[1600px]":isXL?"h-[320px] perspective-[1800px]":"h-[370px] perspective-[2000px]"} `}>
        {images.map((src, i) => {
          const index = getRelativeIndex(i);
          let transform = "";
          let zIndex = 0;
          let opacity = 1;

          const spacing1 = w * 0.6;
          const spacing2 = w * 1.1;
          const scale1 = 0.85;
          const scale2 = 0.65;
          const mainScale = 1.1;

          if (index === 0) {
            transform = `translateX(0px) scale(${mainScale}) translateZ(0px)`;
            zIndex = 50;
            opacity = 1;
          } else if (index === 1 || index === total - 1) {
            const dir = index === 1 ? 1 : -1;
            transform = `translateX(${dir * spacing1}px) scale(${scale1}) translateZ(-100px) rotateY(${dir * -15}deg)`;
            zIndex = 40;
            opacity = 0.8;
          } else if (index === 2 || index === total - 2) {
            const dir = index === 2 ? 1 : -1;
            transform = `translateX(${dir * spacing2}px) scale(${scale2}) translateZ(-200px) rotateY(${dir * -30}deg)`;
            zIndex = 30;
            opacity = 0.5;
          } else {
            transform = "scale(0)";
            opacity = 0;
          }

          return (
            <img
              key={i}
              src={src}
              alt={`Slide ${i}`}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              className="absolute transition-all duration-500 ease-in-out rounded-xl select-none pointer-events-none"
              style={{
                transform,
                opacity,
                zIndex,
                width: `${w}px`,
                height: `${h}px`,
                userSelect: "none",
              }}
            />
          );
        })}
      </div>

      {showArrows && (
        <>
          <IoIosArrowDropleftCircle
            size={40}
            onClick={prev}
            className="cursor-pointer hover:scale-110 transition-transform duration-300 absolute md:left-[6vw] lg:left-[8vw] xl:left-[12vw]  top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center rounded-full z-20"
            color="#cddefc"
          />
          <IoIosArrowDroprightCircle
            size={40}
            onClick={next}
            className="cursor-pointer hover:scale-110 transition-transform duration-300 absolute md:right-[6vw] lg:right-[8vw] xl:right-[12vw]  top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center rounded-full z-20"
            color="#cddefc"
          />
        </>
      )}
    </div>
  );
};

export default ScrollingBanners;
