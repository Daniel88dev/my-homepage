import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">PostgresSQL</span>
            <span className="chip">Sequelize</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
            <span className="chip">Jira</span>
            <span className="chip">Office</span>
            <span className="chip">VBA Excel</span>
            <span className="chip">MS SQL</span>
            <span className="chip">Tailwind</span>
            <span className="chip">SCSS</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Next.js</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Hobbies</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Hiking</span>
            <span className="chip">Shisha</span>
            <span className="chip">Board Games</span>
            <span className="chip">Gym</span>
            <span className="chip">Car</span>
            <span className="chip">Electrical Cars</span>
            <span className="chip">New Technology</span>
            <span className="chip">Web Development</span>
            <span className="chip">Learning</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
