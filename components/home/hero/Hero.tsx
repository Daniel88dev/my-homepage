import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import { ReactTyped } from "react-typed";
import styles from "./hero.module.scss";
// TODO count years of experience
export const Hero = () => {
  const calculateYearSpent = () => {
    const startDate = new Date("2021-09-02");
    const now = new Date();

    const diffInMs = now.getTime() - startDate.getTime();

    const msInYear = 1000 * 60 * 60 * 24 * 362.25;

    const yearsSpent = diffInMs / msInYear;

    return parseFloat(yearsSpent.toFixed(1));
  };

  const yearsSpent = calculateYearSpent();
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
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Full Stack Engineer",
                "Manufacturing Engineer",
                "Project Manager",
              ]}
              typeSpeed={50}
              loop
              backSpeed={20}
              cursorChar="_"
              showCursor={true}
            />
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;ve spent the last {yearsSpent} years (from 2021 September)
            learning, and developing web projects. Finished several courses for
            Frontend, and Backend development. So Full Stack development
            isn&apos;t problem for me. <br />I am working also as Manufacturer
            Engineer at Hyundai Motor Manufacturing s.r.o. Where i am
            responsible for Equipment preparation for new vehicle model
            production, solving Manufacturing problems, and implementing those
            Models in to production.
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
