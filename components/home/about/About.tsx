import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              If you haven’t figured it out yet—I specialize in Full Stack Web
              Development. Both frontend and backend development are within my
              expertise. My primary focus is on React with Next.js, but I
              originally started with Node.js and Express for backend
              development. Learning new frameworks and tools comes naturally to
              me, just like speaking fluent English alongside my native Czech.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Currently, I work at Hyundai Motor Manufacturing Czech s.r.o.,
              where web development wasn’t originally my main focus. I started
              coding as a hobby in my free time, but over time, it became a
              passion. Now, I’m increasingly involved in web development, as I
              find it both fascinating and a valuable skill to improve workflows
              and efficiency.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love hiking and occasionally enjoy playing
              board games with friends.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I’m open to new opportunities where I can merge my passion for
              coding with impactful projects. I’m also available for freelance
              web development—so if you have a project in mind, let’s connect!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
