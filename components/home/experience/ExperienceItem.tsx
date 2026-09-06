import { Reveal } from "@/components/utils/Reveal";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
}

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
}: Props) => {
  return (
    <li className="grid grid-cols-[220px_minmax(0,1fr)] gap-[3.2rem] max-md:grid-cols-[minmax(0,1fr)] max-md:gap-[1.2rem]">
      <div className="pt-[0.4rem] font-mono text-2xs text-text-muted">
        <Reveal>
          <p className="text-text">{time}</p>
        </Reveal>
        <Reveal>
          <p className="mt-[0.4rem]">{location}</p>
        </Reveal>
      </div>

      <div className="relative border-l border-border pb-[4.8rem] pl-[3.2rem] before:absolute before:-left-[5px] before:top-[0.9rem] before:h-[9px] before:w-[9px] before:rounded-full before:bg-brand before:shadow-[0_0_0_4px_var(--background)] before:content-[''] max-md:pl-[2.4rem]">
        <Reveal>
          <h3 className="text-md font-semibold">{title}</h3>
        </Reveal>
        <Reveal>
          <p className="mt-[0.2rem] text-xs font-medium text-brand">
            {position}
          </p>
        </Reveal>
        <Reveal>
          <p className="my-[1.6rem] max-w-[62ch] text-sm text-text-muted">
            {description}
          </p>
        </Reveal>
        <Reveal>
          <ul className="flex flex-wrap gap-[0.8rem]">
            {tech.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </li>
  );
};
