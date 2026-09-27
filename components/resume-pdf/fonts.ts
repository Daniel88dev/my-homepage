import path from "node:path";
import { Font } from "@react-pdf/renderer";

const fontDir = (family: string) =>
  path.join(process.cwd(), "node_modules", "geist", "dist", "fonts", family);

let registered = false;

export const registerResumeFonts = () => {
  if (registered) return;
  registered = true;

  const sans = fontDir("geist-sans");
  Font.register({
    family: "Geist",
    fonts: [
      { src: path.join(sans, "Geist-Regular.ttf"), fontWeight: 400 },
      { src: path.join(sans, "Geist-Medium.ttf"), fontWeight: 500 },
      { src: path.join(sans, "Geist-SemiBold.ttf"), fontWeight: 600 },
      { src: path.join(sans, "Geist-Bold.ttf"), fontWeight: 700 },
    ],
  });

  const mono = fontDir("geist-mono");
  Font.register({
    family: "Geist Mono",
    fonts: [{ src: path.join(mono, "GeistMono-Regular.ttf"), fontWeight: 400 }],
  });

  Font.registerHyphenationCallback((word) => [word]);
};
