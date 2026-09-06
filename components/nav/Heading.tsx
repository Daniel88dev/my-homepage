import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className="sticky top-0 z-20 flex h-[calc(45px_+_3.6rem)] items-center justify-between border-b border-border bg-bg-opaque px-[3.6rem] backdrop-blur-md max-md:px-[2.4rem]">
      <MyLinks />
      <OutlineButton
        href="/Resume_DanielHrynusiw.pdf"
        target="_blank"
        rel="noopener"
      >
        Resume
      </OutlineButton>
    </header>
  );
};
