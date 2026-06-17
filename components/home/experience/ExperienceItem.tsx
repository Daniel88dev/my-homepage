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
    <div className="mb-[2.4rem] border-b border-background-light px-[1.2rem] pb-[2.4rem]">
      <div className="mb-[1.2rem] flex items-center justify-between">
        <Reveal>
          <span className="text-md font-bold">{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className="mb-[1.2rem] flex items-center justify-between">
        <Reveal>
          <span className="font-bold text-brand">{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className="mb-[1.8rem] font-extralight">{description}</p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap gap-[1.2rem]">
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
