import { renderToString } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { Reveal } from "./Reveal";

const preference = vi.hoisted(() => ({ reducedMotion: false }));

vi.mock("framer-motion", async (importOriginal) => ({
  ...(await importOriginal<typeof import("framer-motion")>()),
  useReducedMotion: () => preference.reducedMotion,
}));

const markup = (reducedMotion: boolean) => {
  preference.reducedMotion = reducedMotion;
  return renderToString(
    <Reveal>
      <p>Hello</p>
    </Reveal>
  );
};

describe("Reveal", () => {
  it("renders the same markup whether or not the visitor prefers reduced motion", () => {
    expect(markup(true)).toBe(markup(false));
  });
});
