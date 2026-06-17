import { Reveal } from "./Reveal";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className="mb-[2.4rem] flex items-center gap-[2.4rem]"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="h-px w-full bg-text opacity-30" />
      <h3>
        <Reveal>
          <span className="text-end text-xl font-black max-md:text-lg">
            {title}
            <span className="text-brand">.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};
