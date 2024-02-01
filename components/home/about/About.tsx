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
              Hey! I&apos;m Daniel, if you didnt got that yet, i am specializing
              in Full Stack web development. So both Frontend, and Backend
              isn&apos;t stranger for me. Focusing in development in React for
              Frontend, and node.js with express as Backend. But learning new
              frameworks, and tools isn&apos;t problem for me. Same as speaking
              fluently in English language beside my native Czech language.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work for Hyundai Motor Manufacturing Czech s.r.o.,
              where web development isn&apos;t my job description. Web
              development is more like my hobby for me.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I still love to paint. Any given Sunday
              you&apos;ll find me scribbling some happy clouds with my son ☁️ I
              even teach courses online if you&apos;re looking to learn!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my
              love for code with my love for the canvas. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
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
