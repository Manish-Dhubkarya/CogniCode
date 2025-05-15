export const HomeStyles = {
    home: {
        container: "mt-12 max-h-[500px] pt-30 overflow-y-auto px-4",
        comment: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2",
        commentMain: "bg-white rounded-xl shadow-md p-4 text-gray-800",
        commentName: "font-semibold mb-1",
        commentTime: "text-sm text-gray-500 mb-2",
        commentMessage: "text-sm mb-4",
        commentLikeDislike: "flex gap-4 text-sm text-gray-600",
        mainContainer: 'w-full mt-17 mb-10 flex roboto-regular flex-col items-center justify-center',
        homeBanner: 'w-full h-[366px] mb-7 flex items-center justify-center pb-10',
        homeBannerTextMain: 'w-[50%] leading-0',
        homeTurningText: 'uppercase text-[32px] ml-9.5 tracking-[27px] font-thin',
        homeBannerVisionText: "uppercase text-[128px] leading-28 tracking-tight",
        homeBannerToText: "uppercase text-[32px] mr-4 tracking-[27px] font-thin mt-2",
        homeBannerRealityText: "uppercase text-[128px] leading-28 tracking-tight",
        homeBannerContentMain: "w-[50%] flex gap-y-10 mt-9 justify-end text-center font-medium flex-col items-center",
        homeBannerContent: "w-[510px] inter-custom text-[18px]",
        homeBannerConnectText: "bg-gradient-to-r text-black roboto-regular px-14 py-2 rounded-xl cursor-pointer text-lg sm:text-[20px] shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold",
        marqueeTextMain: "text-white p-4",
        marqueeText: "inline-block mx-12 text-[18px] font-light",
        marqueeText2: "inline-block mx-12 text-[18px] font-light",
        cardDataMain: 'w-[80%]  flex gap-10 mt-13',
        cardData: 'flex-col flex w-[264px] h-[399px] items-start p-4 justify-start rounded-[10px]',
        cardTitle: 'text-[16px] uppercase font-medium',
        cardHeading: 'text-[24px] font-semibold',
        whyOnlyText: 'text-[48px] font-bold mt-15',
        scrollFooter: "mt-8",
        comments: 'w-[941px] h-[497px]',
        teamBannerMain: 'mt-40 w-full',
        teamBannerMain2: "bg-cover roboto-regular flex-col bg-center w-full flex gap-y-0 items-center justify-center h-[60vh] min-h-[360px] pb-5 max-h-[456px]",
        teamBannerCareers: "text-white mb-7 text-center px-4 text-xl sm:text-2xl md:text-[36px] font-semibold leading-tight dm-sans-regular",
        teamBannerGrowCareer: "text-white mb-7 text-center px-4 text-xl sm:text-2xl md:text-[36px] font-semibold leading-tight dm-sans-regular",
        teamBannerBringYourIngunity: "text-white mb-7 text-center px-4 text-xl sm:text-2xl md:text-[36px] font-semibold leading-tight dm-sans-regular",
        teambannerJoinUsText: "bg-gradient-to-r text-black px-14 py-2 rounded-xl cursor-pointer mt-7 text-lg sm:text-[20px] shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold",
        connectMain: "flex mt-15 flex-col items-center justify-between gap-y-10",
        thoughtMain: "text-[40px] leading-tight font-semibold libre-franklin",
        thought: 'text-[#8AFF84]',
        connectListMain: "text-[40px] roboto-regular font-semibold mb-5",
        connectItemsMain: "flex flex-col w-[45%] gap-y-7 dm-sans-regular",
        connectItems: "flex justify-between items-center text-[18px] font-semibold text-base sm:text-lg",
        connectListBorder: "w-full border-t-1 border-[#8AFF84]",
        footerMain: "w-full mt-30 flex border-t-3 border-[#8AFF84] flex-col items-center md:items-center",
        footer: " w-[83%] flex flex-col",
        


    },
    container: {
        overflow: "hidden",
        width: "100%",
        position: "relative",
    },
    marquee: {
        whiteSpace: "nowrap",
        display: "inline-block",
        fontSize: "24px",
        fontFamily: "Roboto, sans-serif",
    },
};
// MarqueeStyles.tsx
const MarqueeStyles = () => (
    <style>
        {`
      @keyframes marqueeLeftToRight {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marqueeRightToLeft {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
    `}
    </style>
);

export default MarqueeStyles;
