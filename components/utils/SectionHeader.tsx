import { Reveal } from "./Reveal";

interface Props {
  title: string;
  index: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, index, dir = "r" }: Props) => {
  return (
    <div
      className="mb-[4rem] flex items-center gap-[2.4rem]"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="h-px w-full bg-border" />
      <div className="shrink-0">
        <Reveal>
          <h2 className="flex items-baseline gap-[1.2rem] whitespace-nowrap pr-[0.1em] text-xl font-semibold max-md:text-lg">
            <span className="font-mono text-2xs font-normal text-brand">
              {index}
            </span>
            <span>
              {title}
              <span className="text-brand">.</span>
            </span>
          </h2>
        </Reveal>
      </div>
    </div>
  );
};
