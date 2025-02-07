import styles from "../style";

const Portfolio = () => (
  <section
    id="portfolio"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div>
      <h1 className={`${styles.heading2} text-gradient`}>My Works</h1>
    </div>
  </section>
);

export default Portfolio;
