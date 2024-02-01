import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
// TODO count years of experience
export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Daniel<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a{" "}
            <span>Full Stack Developer || Manufacturing Engineer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;ve spent the last 2 years (from 2021 September) learning, and
            developing web projects. Finished several courses for Frontend, and
            Backend development. So Full Stack development isn&apos;t problem
            for me. <br />I am working also as Manufacturer Engineer at Hyundai
            Motor Manufacturing s.r.o. Where i am responsible for Equipment
            preparation for new vehicle model production, solving Manufacturing
            problems, and implementing those Models in to production.
            <br />I have experience with Project Management of several projects,
            to improve workability, and save money in long term production.
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
