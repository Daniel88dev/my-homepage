import { Reveal } from "@/components/utils/Reveal";
import { PiBrowsers, PiHardDrives, PiCode, PiSmiley } from "react-icons/pi";
import type { IconType } from "react-icons";
import type { Dictionary } from "@/content/dictionary";

/**
 * The invariant half of each chip group: which icon it carries and which
 * technologies it lists. The headings, the languages spoken and the whole of
 * the Off the clock group are prose and come from the Dictionary, so a new
 * technology is one edit here rather than one per Language.
 */
interface Group {
  key: keyof Dictionary["stats"];
  Icon: IconType;
  /** The technologies, which are the same in every Language. */
  items: string[];
  /** A Dictionary list appended after them, for chips that are prose. */
  extra?: "spokenLanguages" | "hobbies";
}

const groups: Group[] = [
  {
    key: "frontend",
    Icon: PiBrowsers,
    items: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Tailwind",
      "SCSS",
      "Next.js",
      "shadcn/ui",
      "Clerk",
    ],
  },
  {
    key: "backend",
    Icon: PiHardDrives,
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "MongoDB",
      "MS SQL",
      "Python",
      "Deno",
      "Drizzle ORM",
      "GraphQL",
      "gRPC",
      "OpenAPI",
      "Swagger",
      "AWS",
    ],
  },
  {
    key: "tooling",
    extra: "spokenLanguages",
    Icon: PiCode,
    items: [
      "GitHub",
      "Docker",
      "Kubernetes",
      "Sentry",
      "OWASP",
      "Jira",
      "Office 365",
      "MS Excel + VBA",
    ],
  },
  {
    key: "offTheClock",
    extra: "hobbies",
    Icon: PiSmiley,
    items: [],
  },
];

/** The chips of one group: its technologies, then the ones that are prose. */
const chipsFor = (group: Group, dict: Dictionary["stats"]): string[] => [
  ...group.items,
  ...(group.extra ? dict[group.extra] : []),
];

export const Stats = ({ dict }: { dict: Dictionary["stats"] }) => {
  return (
    <aside className="relative">
      {groups.map((group) => (
        <Reveal key={group.key} width="100%">
          <div className="mb-[4rem]">
            <h3 className="mb-[1.6rem] flex items-center gap-[1rem] text-xs font-semibold">
              <group.Icon size="2rem" className="text-brand" aria-hidden />
              <span>{dict[group.key]}</span>
            </h3>
            <ul className="flex flex-wrap gap-[0.8rem]">
              {chipsFor(group, dict).map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </aside>
  );
};
