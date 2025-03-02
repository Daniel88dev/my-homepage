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
            <span className="chip">English</span>
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
            <span className="chip">Python</span>
            <span className="chip">Deno</span>
            <span className="chip">Docker</span>
            <span className="chip">Kubernetes</span>
            <span className="chip">OWASP</span>
            <span className="chip">Github</span>
            <span className="chip">Drizzle ORM</span>
            <span className="chip">Shadcn/ui</span>
            <span className="chip">Sentry</span>
            <span className="chip">Clerk</span>
            <span className="chip">Python</span>
            <span className="chip">Office 365</span>
            <span className="chip">MS Excel + VBA</span>
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
