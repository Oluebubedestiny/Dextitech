import { workOne, workThree, workTwo } from "../../../src/assets";
import styles from "../style";
import "./portfolio.css";

const Portfolio = () => (
  <section
    id="portfolio"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div>
      <h1 className={`${styles.heading2} text-gradient`}>My Works</h1>
      <div className="works_item_con">
        <div className="works tech_site">
          <img src={workOne} alt="" />
          <div className="layer">
            <h3>Tech Website</h3>
            <p>
              A complete Tech website platform about Dextitech services where
              you can know more about us and our team
            </p>
            {/* <a href="https://bigbossrough.netlify.app/" target="blank">
              <button className="works_btn">Visit Site</button>
            </a> */}
          </div>
        </div>
        <div className="works country_site">
          <img src={workTwo} alt="" />
          <div className="layer">
            <h3>Country Data Site</h3>
            <p>
              This is a javascript web project that fetches different countries
              data from api and display it on the website when you search
              country name
            </p>
            <a href="" target="blank">
              <button className="works_btn">Visit Site</button>
            </a>
          </div>
        </div>
        <div className="works speech_site">
          <img src={workThree} alt="" />
          <div className="layer">
            <h3>Google voice project</h3>
            <p>
              This is a Javascript web project that fetches google voice from
              api unto the website so you can change the text voice
            </p>
            <a href="" target="blank">
              <button className="works_btn">Visit Site</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
