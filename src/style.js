const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  boxItem:
    "p-4 rounded-xl items-start justify-center border-2 border-zinc-800 ",
  heading3:
    "font-poppins font-semibold xs:text-[28px] text-[20px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  heading4:
    "font-poppins font-semibold xs:text-[18px] text-[10px] text-white xs:leading-[36.8px] leading-[26.8px] w-full",
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  paragraph2:
    "font-poppins font-normal text-dimWhite  text-[12px] md:text-[15px] leading-[20.8px] md:leading-[25px]",

  flexCenter: "flex justify-center items-center",
  iconFlex: "flex gap-4 flex-row py-2",
  flexStart: "flex justify-center items-start",
  inputFlex: "flex flex-col gap-2",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col justify-between ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  containerWidth: "items-center w-[90%] my-0 mx-auto",
  input:
    "w-[20rem] md:w-[35rem] p-[10px] rounded-[10px] bg-transparent border-2 border-white",
};

export default styles;
