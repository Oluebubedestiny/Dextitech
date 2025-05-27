import { google } from "../assets";
import styles, { layout } from "../style";
import { services } from "../constants";

const Services = () => (
  <section id="services" className={` ${layout.containerWidth} mt-[5rem]`}>
    <div>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div>
      <h1 className={`${styles.heading2} text-gradient`}>My Services</h1>
      <div
        className="flex flex-col md:grid
       md:grid-cols-3 gap-3 items-center pt-4"
      >
        {services.map((service) => (
          <div key={service.id} className={styles.boxItem}>
            <h2 className={styles.heading4}>{service.title}</h2>
            <p className={styles.paragraph2}>{service.info}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
