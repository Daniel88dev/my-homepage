import { describe, expect, it } from "vitest";
import { LANGUAGES } from "@/lib/language";
import { renderResumePdf } from "./render";

describe("resume PDF", () => {
  it("renders a PDF for every Language", async () => {
    for (const lang of LANGUAGES) {
      const pdf = await renderResumePdf(lang, { year: 2026, month: 9 });
      expect(pdf.subarray(0, 5).toString("latin1"), lang).toBe("%PDF-");
      expect(pdf.length, lang).toBeGreaterThan(5_000);
    }
  }, 30_000);
});
