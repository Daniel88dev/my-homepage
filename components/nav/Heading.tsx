import { MyLinks } from "./components/MyLinks";
import { HeaderShell } from "./HeaderShell";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <HeaderShell
      left={<MyLinks />}
      right={
        <OutlineButton
          href="/Resume_DanielHrynusiw.pdf"
          target="_blank"
          rel="noopener"
        >
          Resume
        </OutlineButton>
      }
    />
  );
};
