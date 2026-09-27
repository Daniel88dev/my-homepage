import type { Role, Track, YearMonth } from "./types";

export const monthIndex = ({ year, month }: YearMonth): number =>
  year * 12 + (month - 1);

export const monthsSpanned = (from: YearMonth, to: YearMonth): number =>
  monthIndex(to) - monthIndex(from) + 1;

export const isValidYearMonth = ({ year, month }: YearMonth): boolean =>
  Number.isInteger(year) &&
  Number.isInteger(month) &&
  month >= 1 &&
  month <= 12;

export interface Duration {
  years: number;
  months: number;
}

export const splitDuration = (months: number): Duration => ({
  years: Math.floor(months / 12),
  months: months % 12,
});

export const roleDuration = (role: Role, now: YearMonth): Duration =>
  splitDuration(monthsSpanned(role.start, role.end ?? now));

export const currentMonth = (date: Date = new Date()): YearMonth => ({
  year: date.getFullYear(),
  month: date.getMonth() + 1,
});

export interface TimelineSpan {
  id: Role["id"];
  track: Track;
  startPercent: number;
  widthPercent: number;
  current: boolean;
}

export interface Timeline {
  start: YearMonth;
  end: YearMonth;
  totalMonths: number;
  spans: TimelineSpan[];
  yearTicks: { year: number; percent: number }[];
}

const earliestStart = (roles: Role[]): YearMonth =>
  roles.reduce(
    (earliest, role) =>
      monthIndex(role.start) < monthIndex(earliest) ? role.start : earliest,
    roles[0]!.start,
  );

export const buildTimeline = (
  roles: Role[],
  now: YearMonth,
  tickEveryYears = 3,
): Timeline => {
  const start = { year: earliestStart(roles).year, month: 1 };
  const totalMonths = monthsSpanned(start, now);
  const percentOf = (months: number) => (months / totalMonths) * 100;

  const spans = roles.map((role) => ({
    id: role.id,
    track: role.track,
    startPercent: percentOf(monthIndex(role.start) - monthIndex(start)),
    widthPercent: percentOf(monthsSpanned(role.start, role.end ?? now)),
    current: role.end === null,
  }));

  const yearTicks = [];
  for (let year = start.year; year <= now.year; year += tickEveryYears) {
    yearTicks.push({
      year,
      percent: percentOf(monthIndex({ year, month: 1 }) - monthIndex(start)),
    });
  }

  return { start, end: now, totalMonths, spans, yearTicks };
};

export const yearsWorked = (roles: Role[], now: YearMonth): number =>
  Math.floor(monthsSpanned(earliestStart(roles), now) / 12);

export const yearsOnTrack = (
  roles: Role[],
  track: Track,
  now: YearMonth,
): number => {
  const onTrack = roles.filter((role) => role.track === track);
  if (onTrack.length === 0) return 0;
  return Math.floor(monthsSpanned(earliestStart(onTrack), now) / 12);
};
