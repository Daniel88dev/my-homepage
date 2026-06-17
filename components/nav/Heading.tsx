import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className="sticky top-0 z-20 flex h-[calc(45px_+_3.6rem)] items-center justify-between bg-bg-opaque px-[3.6rem] text-md font-bold backdrop-blur-md max-md:px-[2.4rem]">
      <MyLinks />
      <OutlineButton onClick={() => window.open("/Resume_DanielHrynusiw.pdf")}>
        My resume
      </OutlineButton>
    </header>
  );
};
