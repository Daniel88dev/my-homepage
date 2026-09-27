import { describe, expect, it } from "vitest";
import {
  buildTimeline,
  currentMonth,
  monthsSpanned,
  roleDuration,
  splitDuration,
  yearsOnTrack,
  yearsWorked,
} from "./timeline";
import { RESUME_FACTS } from "./resume";

const now = { year: 2026, month: 9 };

describe("timeline arithmetic", () => {
  it("counts the months a range spans, inclusive of both ends", () => {
    expect(
      monthsSpanned({ year: 2025, month: 8 }, { year: 2025, month: 8 }),
    ).toBe(1);
    expect(
      monthsSpanned({ year: 2025, month: 8 }, { year: 2026, month: 9 }),
    ).toBe(14);
  });

  it("splits months into years and months", () => {
    expect(splitDuration(14)).toEqual({ years: 1, months: 2 });
    expect(splitDuration(12)).toEqual({ years: 1, months: 0 });
  });

  it("measures a current role up to now", () => {
    const figure = RESUME_FACTS.roles.find((role) => role.id === "figure")!;
    expect(roleDuration(figure, now)).toEqual({ years: 1, months: 2 });
  });

  it("reads the current month from a date", () => {
    expect(currentMonth(new Date(2026, 8, 27))).toEqual(now);
  });
});

describe("career timeline", () => {
  const timeline = buildTimeline(RESUME_FACTS.roles, now);

  it("starts at the first of the year the earliest role began", () => {
    expect(timeline.start).toEqual({ year: 2008, month: 1 });
    expect(timeline.end).toEqual(now);
  });

  it("keeps every span inside the track", () => {
    for (const span of timeline.spans) {
      expect(span.startPercent).toBeGreaterThanOrEqual(0);
      expect(span.startPercent + span.widthPercent).toBeLessThanOrEqual(
        100.0001,
      );
    }
  });

  it("runs current roles up to the right edge", () => {
    for (const span of timeline.spans.filter((s) => s.current)) {
      expect(span.startPercent + span.widthPercent).toBeCloseTo(100, 5);
    }
  });

  it("ticks every third year from the start", () => {
    expect(timeline.yearTicks.map((tick) => tick.year)).toEqual([
      2008, 2011, 2014, 2017, 2020, 2023, 2026,
    ]);
    expect(timeline.yearTicks[0]?.percent).toBe(0);
  });

  it("derives the headline figures from the roles", () => {
    expect(yearsWorked(RESUME_FACTS.roles, now)).toBe(18);
    expect(yearsOnTrack(RESUME_FACTS.roles, "freelance", now)).toBe(5);
    expect(yearsOnTrack(RESUME_FACTS.roles, "software", now)).toBe(1);
  });
});
