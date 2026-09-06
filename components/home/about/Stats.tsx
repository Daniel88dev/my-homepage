import { Reveal } from "@/components/utils/Reveal";
import { PiBrowsers, PiHardDrives, PiCode, PiSmiley } from "react-icons/pi";
import type { IconType } from "react-icons";

interface Group {
  title: string;
  Icon: IconType;
  items: string[];
}

const groups: Group[] = [
  {
    title: "Frontend",
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
    title: "Backend",
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
    title: "Tooling",
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
      "English",
    ],
  },
  {
    title: "Off the clock",
    Icon: PiSmiley,
    items: [
      "Hiking",
      "Board games",
      "Gym",
      "Electric cars",
      "New technology",
      "Shisha",
      "Learning",
    ],
  },
];

export const Stats = () => {
  return (
    <aside className="relative">
      {groups.map(({ title, Icon, items }) => (
        <Reveal key={title} width="100%">
          <div className="mb-[4rem]">
            <h3 className="mb-[1.6rem] flex items-center gap-[1rem] text-xs font-semibold">
              <Icon size="2rem" className="text-brand" aria-hidden />
              <span>{title}</span>
            </h3>
            <ul className="flex flex-wrap gap-[0.8rem]">
              {items.map((item) => (
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
