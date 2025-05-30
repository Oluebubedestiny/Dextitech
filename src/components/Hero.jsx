import styles, { layout } from "../style";
import { robot, heroBg } from "../assets";
import "../App.css";

const Hero = () => {
  return (
    <section
      id="home"
      className={` ${layout.containerWidth} ${layout.sectionReverse} md:${layout.section}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[25px] text-white ss:leading-[100.8px] leading-[35px]">
            Frontend
            <span className="text-gradient"> Developer</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Hi, I'm <span className="text-gradient">Destiny Ozuzu</span> from
          Nigeria
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A creative developer with a passion for building beautiful, responsive
          and user-friendly web applications{" "}
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={heroBg}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] heroImg"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
