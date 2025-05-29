import { works } from "../constants";
import styles, { layout } from "../style";

const Portfolio = () => (
  <section
    id="portfolio"
    className={`${styles.paddingY} ${styles.flexCenter} ${layout.containerWidth} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div>
      <h1 className={`${styles.heading2} text-gradient`}>My Works</h1>
      <div
        className="flex flex-col md:grid
       md:grid-cols-3 gap-3 items-center pt-4"
      >
        {works.map((work) => (
          <div key={work.img} className={`${styles.boxItem} pb-0`}>
            <img src={work.img} alt="" className="w-[100%] items-center" />
            <p className={`${styles.paragraph2} pt-4`}>{work.text}</p>
            <a href={work.link} target="_blank">
              <button className="border-white p-2">Visit site</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
