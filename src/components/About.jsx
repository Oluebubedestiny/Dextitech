import styles, { layout } from "../style";
import "./progress.css";
import { profile } from "../assets";
import { motion } from "framer-motion";
import Button from "./Button";

const About = () => (
  <section
    id="about"
    className={` ${layout.containerWidth} flex md:flex-row flex-col gap-[2rem] md:gap-[10rem] items-center`}
  >
    <div className="py-[2rem]">
      <img src={profile} alt="My picture" className="w-[100%]" />
    </div>
    <div className={layout.sectionInfo}>
      <h1 className={`${styles.heading2} text-gradient`}>About Me</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I'm a creative and analytical front-end developer with a passion for
        building beautiful, responsive and user-friendly digital experiences. I
        am eager to continue learning and growing myself as a developer, I am
        also a great team player and I'm excited to bring my skills and
        experience to a new team.
      </p>
      <h1 className={styles.heading3}>SKILLS</h1>
      <div className="progress_con">
        <div className="front_pro_con">
          <div className="html_progress">
            <h3 className={styles.heading4}>HTML</h3>
            <div className="progress_bar">
              <div className="html">
                <span>94%</span>
              </div>
            </div>
          </div>
          <div className="css_progress">
            <h3 className={styles.heading4}>CSS</h3>
            <div className="progress_bar">
              <div className="css">
                <span>86%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="back_pro_con">
          <div className="js_progress">
            <h3 className={styles.heading4}>JAVASCRIPT</h3>
            <div className="progress_bar">
              <div className="js">
                <span>80%</span>
              </div>
            </div>
          </div>
          <div className="react_progress">
            <h3 className={styles.heading4}>React</h3>
            <div className="progress_bar">
              <div className="react">
                <span>75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
