// contactUsStyles.ts
export const contactUsStyles = {
  container: "w-full min-h-screen flex flex-col mb-10 select-none",
  banner: (_: string) =>
    `bg-cover flex-col-reverse bg-center w-full flex gap-y-12 items-center justify-center h-[50vh] min-h-[350px] max-h-[456px] pt-[64px]`,
  bannerButton:
    "bg-gradient-to-r text-black roboto-regular px-14 py-2 rounded-xl cursor-pointer text-lg sm:text-[20px] shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold",
  bannerText:
    "text-white text-center px-4 text-2xl sm:text-3xl md:text-[36px] font-extrabold leading-tight dm-sans-regular",

  connectWrapper: "flex dm-sans-regular items-center justify-center w-full md:mt-20 mt-10 px-4",
  connectInner: "w-full md:max-w-[70%] max-w-[90%] flex flex-col gap-y-10 items-center",
  connectHeading: "font-extrabold text-2xl mb-10 sm:text-3xl md:text-[32px] text-center tracking-tight",
  connectItemWrapper: "flex flex-col gap-y-7 w-full",
  connectItem: "flex justify-between items-center font-semibold text-base sm:text-lg",
  connectDivider: "w-full border-t-1 border-[#8AFF84]",

  inquiryWrapper: "flex items-start libre-franklin justify-center w-full mt-16 px-4",
  inquiryInner: "w-full md:max-w-[80%] max-w-[95%] flex flex-col gap-y-8 items-start",
  inquiryText: "text-2xl sm:text-3xl md:text-[32px] font-normal text-left tracking-tight",
  aboutSection: "w-[90%] items-start flex flex-col gap-5",
  aboutTitle: "text-2xl sm:text-3xl font-normal tracking-tight",
  aboutLine: "w-full h-[1px] bg-[#ffffff]",
  aboutSubtitle: "text-2xl sm:text-3xl my-6 font-semibold",

  inputWrapper: "flex items-start flex-col gap-y-6 w-[90%] max-w-full",
  inputField:
    "peer absolute bottom-0 w-full bg-transparent text-white text-base border-none focus:outline-none h-10",
  inputContainer:
    "relative flex flex-col items-start w-full h-16",
  inputLabel:
    "absolute left-0 bottom-2 text-white text-base sm:text-lg md:text-xl lg:text-[32px] " +
    "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg md:peer-placeholder-shown:text-xl lg:peer-placeholder-shown:text-[32px] " +
    "peer-focus:-translate-y-8 peer-focus:text-sm lg:peer-focus:-translate-y-10 lg:peer-focus:text-[20px] " +
    "peer:not(:placeholder-shown):-translate-y-8 peer:not(:placeholder-shown):text-sm " +
    "lg:peer:not(:placeholder-shown):-translate-y-10 lg:peer:not(:placeholder-shown):text-sm transition-all duration-200 font-normal tracking-tight",
  inputUnderline: "absolute bottom-0 w-full h-[1px] bg-white",

  scrollingFooterWrapper: "mt-20",
  footerWrapper: "w-full flex border-t-3 border-[#8AFF84] mt-0 flex-col items-center md:items-center",
  footerInner: "w-[83%] flex flex-col",
};
