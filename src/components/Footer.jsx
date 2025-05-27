import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`flex flex-col md:flex-row justify-between gap-10 items-center ${styles.paddingY} border-t-[1px] border-t-[#3F3E45]`}
  >
    <div className="flex flex-col justify-center items-center">
      {/* <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        /> */}
      <h1 className="flex flex-1 font-poppins font-semibold ss:text-[30px] text-[30px] text-white ss:leading-[100.8px] leading-[35px] text-gradient">
        DextiTech
      </h1>
      <p className={`${styles.paragraph} mt-4 md:mt-0 max-w-[312px]`}>
        Get in touch, let's build something beautiful together.
      </p>
    </div>

    <div className="flex flex-col justify-center gap-5 items-center">
      <h2 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[30px] text-white ss:leading-[100.8px] leading-[35px] text-gradient">
        Useful Links
      </h2>
      <ul className="flex flex-row gap-4 text-dimWhite">
        {footerLinks.map((item, index) => (
          <li key={index}>
            <a href={item.link} rel="noopener noreferrer">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="border-t-[1px] border-t-[#3F3E45]"></div>
  </section>
);

export default Footer;
