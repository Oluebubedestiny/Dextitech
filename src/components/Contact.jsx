import React from "react";
import {
  facebook,
  instagram,
  linkedin,
  twitter,
  email,
  phone,
  whatsapp,
  cv,
} from "../assets";
import styles, { layout } from "../style";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className={`${layout.containerWidth} flex md:flex-row flex-col gap-[2rem] mb-[10px]  md:gap-[18rem]  `}
    >
      <div className="md:mb-[3rem]">
        <h1 className={`${styles.heading2} text-gradient`}>Contact Me</h1>
        <div className={`${styles.iconFlex}`}>
          <img src={email} alt="" className="w-[25px]" />
          <a href="mailto:oluebubedestiny.o@gmail.com" target="_blank">
            <p className={`${styles.paragraph}`}>oluebubedestiny.o@gmail.com</p>
          </a>
        </div>
        <div className={`${styles.iconFlex}`}>
          <img src={phone} alt="" className="w-[25px]" />
          <a href="tel:+2349063652206" target="_blank">
            <p className={`${styles.paragraph}`}>09063652206</p>
          </a>
        </div>
        <div className={`${styles.iconFlex} `}>
          <a href="https://wa.me/09063652206" target="_blank">
            <img src={whatsapp} alt="" className="w-[26px]" />
          </a>
          <a href="https://instagram.com/destinyozuzu" target="_blank">
            <img src={instagram} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/destiny-ozuzu-59b454289/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>

          <a href="https://twitter.com/destiny61841323" target="_blank">
            <img src={twitter} alt="" />
          </a>
        </div>
        <a href={cv} download target="_blank">
          <button className="border-white p-2">Download CV</button>
        </a>
      </div>
      <ContactForm />
    </section>
  );
}

export default Contact;
