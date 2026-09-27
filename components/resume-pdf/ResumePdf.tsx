import type { ReactNode } from "react";
import {
  Circle,
  Defs,
  Document,
  G,
  Line,
  LinearGradient,
  Link,
  Page,
  Rect,
  Stop,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";
import type { Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import type { Resume } from "@/content/resume";
import type { Period, ResumeDate, Skill } from "@/content/resume/types";
import { formatPeriod, formatResumeDate } from "@/content/resume/format";
import { PRINT_THEME as T } from "./print-theme";

interface Props {
  lang: Language;
  resume: Resume;
  labels: Dictionary["resume"];
  siteUrl: string;
  asOf: ResumeDate;
}

const PAGE_WIDTH = 595.28;
const MARGIN = 36;
const SIDEBAR_WIDTH = 168;
const GUTTER = 24;
const MAIN_WIDTH = PAGE_WIDTH - 2 * MARGIN - SIDEBAR_WIDTH - GUTTER;
const HEADER_HEIGHT = 128;

const s = StyleSheet.create({
  page: {
    fontFamily: "Geist",
    fontSize: 8.6,
    lineHeight: 1.45,
    color: T.ink,
    backgroundColor: T.paper,
    paddingTop: MARGIN,
    paddingBottom: MARGIN + 12,
    paddingHorizontal: MARGIN,
  },
  headerBand: { position: "absolute", top: 0, left: 0 },
  header: { height: HEADER_HEIGHT - MARGIN, justifyContent: "center" },
  name: { fontSize: 26, fontWeight: 700, letterSpacing: -0.6, lineHeight: 1.1 },
  dot: { color: T.brand },
  headline: { marginTop: 4, fontSize: 11, fontWeight: 500, color: T.muted },
  contact: {
    marginTop: 8,
    flexDirection: "row",
    gap: 10,
    fontFamily: "Geist Mono",
    fontSize: 7.4,
    color: T.muted,
  },
  link: { color: T.ink, textDecoration: "none" },
  columns: { marginTop: 18, flexDirection: "row", gap: GUTTER },
  main: { width: MAIN_WIDTH },
  sidebar: { width: SIDEBAR_WIDTH },
  section: { marginBottom: 16 },
  sectionTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },
  sectionTitleText: {
    fontFamily: "Geist Mono",
    fontSize: 7.4,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: T.brand,
  },
  sectionRule: { flexGrow: 1, height: 0.6, backgroundColor: T.rule },
  paragraph: { color: T.muted },
  role: { position: "relative", paddingLeft: 14, paddingBottom: 12 },
  roleRail: {
    position: "absolute",
    left: 3,
    top: 6,
    bottom: 0,
    width: 0.8,
    backgroundColor: T.rule,
  },
  roleDot: {
    position: "absolute",
    left: 0,
    top: 3,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: T.brand,
    border: `1.6pt solid ${T.brandSoft}`,
  },
  roleTitle: { fontSize: 10, fontWeight: 600 },
  roleMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 1,
    marginBottom: 3,
  },
  roleHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 8,
  },
  roleEmployer: { color: T.brand, fontWeight: 500, marginBottom: 3 },
  mono: { fontFamily: "Geist Mono", fontSize: 7.2, color: T.muted },
  skillRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3.5,
  },
  listItem: { marginBottom: 5 },
  itemTitle: { fontWeight: 500 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 3 },
  chip: {
    paddingVertical: 1.5,
    paddingHorizontal: 5,
    borderRadius: 6,
    backgroundColor: T.paperTint,
    border: `0.6pt solid ${T.rule}`,
    fontSize: 7.4,
  },
  footer: {
    position: "absolute",
    bottom: MARGIN - 8,
    left: MARGIN,
    right: MARGIN,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Geist Mono",
    fontSize: 7,
    color: T.muted,
  },
});

const monthIndex = (date: ResumeDate, fallbackMonth: number) =>
  date.year * 12 + (date.month ?? fallbackMonth) - 1;

const HeaderBand = () => {
  const dots = [];
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 14; col++) {
      dots.push(
        <Circle
          key={`${row}-${col}`}
          cx={PAGE_WIDTH - 196 + col * 13}
          cy={18 + row * 13}
          r={1.1}
          fill={T.brand}
          fillOpacity={0.08 + (col / 14) * 0.32}
        />
      );
    }
  }

  return (
    <Svg
      style={s.headerBand}
      width={PAGE_WIDTH}
      height={HEADER_HEIGHT}
      viewBox={`0 0 ${PAGE_WIDTH} ${HEADER_HEIGHT}`}
    >
      <Defs>
        <LinearGradient id="band" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor={T.paperTint} />
          <Stop offset="1" stopColor={T.brandSoft} />
        </LinearGradient>
        <LinearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={T.brandBright} />
          <Stop offset="1" stopColor={T.brand} stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={PAGE_WIDTH} height={HEADER_HEIGHT} fill="url(#band)" />
      <G>{dots}</G>
      <Circle cx={PAGE_WIDTH - 60} cy={HEADER_HEIGHT - 8} r={54} fill={T.brandBright} fillOpacity={0.12} />
      <Circle cx={PAGE_WIDTH - 60} cy={HEADER_HEIGHT - 8} r={30} fill={T.brand} fillOpacity={0.1} />
      <Rect x={0} y={HEADER_HEIGHT - 3} width={PAGE_WIDTH} height={3} fill="url(#accent)" />
    </Svg>
  );
};

const SectionTitle = ({ children }: { children: string }) => (
  <View style={s.sectionTitle}>
    <Text style={s.sectionTitleText}>{children}</Text>
    <View style={s.sectionRule} />
  </View>
);

const Section = ({
  title,
  children,
  wrap = true,
}: {
  title: string;
  children: ReactNode;
  wrap?: boolean;
}) => (
  <View style={s.section} wrap={wrap}>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </View>
);

const LevelBar = ({ level }: { level: number }) => (
  <Svg width={52} height={4} viewBox="0 0 52 4">
    {[0, 1, 2, 3, 4].map((i) => (
      <Rect
        key={i}
        x={i * 10.5}
        y={0}
        width={9}
        height={4}
        rx={1.2}
        fill={i < level ? T.brand : T.rule}
      />
    ))}
  </Svg>
);

const SkillList = ({ skills }: { skills: Skill[] }) => (
  <View>
    {skills.map(({ name, level }) => (
      <View key={name} style={s.skillRow}>
        <Text>{name}</Text>
        <LevelBar level={level} />
      </View>
    ))}
  </View>
);

const CareerTimeline = ({
  periods,
  asOf,
}: {
  periods: Period[];
  asOf: ResumeDate;
}) => {
  const first = Math.min(...periods.map((p) => monthIndex(p.start, 1)));
  const last = monthIndex(asOf, 12);
  const span = Math.max(last - first, 1);
  const width = MAIN_WIDTH;
  const rowHeight = 7;
  const axisY = periods.length * rowHeight + 4;
  const x = (month: number) => ((month - first) / span) * width;
  const firstYear = Math.ceil(first / 12);
  const years = [];
  for (let year = firstYear; year * 12 <= last; year++) {
    if ((year - firstYear) % 4 === 0) years.push(year);
  }

  return (
    <View>
      <Svg width={width} height={axisY + 2} viewBox={`0 0 ${width} ${axisY + 2}`}>
        {years.map((year) => (
          <Line
            key={year}
            x1={x(year * 12)}
            y1={0}
            x2={x(year * 12)}
            y2={axisY}
            stroke={T.rule}
            strokeWidth={0.5}
          />
        ))}
        {periods.map((period, i) => {
          const start = x(monthIndex(period.start, 1));
          const end = x(period.end ? monthIndex(period.end, 12) : last);
          return (
            <Rect
              key={`${period.start.year}-${period.start.month ?? 0}`}
              x={start}
              y={i * rowHeight + 1}
              width={Math.max(end - start, 3)}
              height={4.5}
              rx={2.25}
              fill={i === 0 ? T.brandBright : T.brand}
              fillOpacity={1 - i * 0.14}
            />
          );
        })}
        <Line x1={0} y1={axisY} x2={width} y2={axisY} stroke={T.muted} strokeWidth={0.6} />
      </Svg>
      <View style={{ position: "relative", height: 10 }}>
        {years.map((year) => (
          <Text
            key={year}
            style={[s.mono, { position: "absolute", left: Math.min(x(year * 12), width - 18), top: 2 }]}
          >
            {year}
          </Text>
        ))}
      </View>
    </View>
  );
};

const displayUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export const ResumePdf = ({ lang, resume, labels, siteUrl, asOf }: Props) => (
  <Document
    title={`${resume.name}, ${resume.headline}`}
    author={resume.name}
    subject={resume.headline}
    keywords={resume.skills.map((skill) => skill.name).join(", ")}
    creator={resume.name}
    producer={resume.name}
    language={lang}
  >
    <Page size="A4" style={s.page}>
      <HeaderBand />
      <View style={s.header}>
        <Text style={s.name}>
          {resume.name}
          <Text style={s.dot}>.</Text>
        </Text>
        <Text style={s.headline}>{resume.headline}</Text>
        <View style={s.contact}>
          <Text>{resume.location}</Text>
          <Link src={`mailto:${resume.email}`} style={s.link}>
            {resume.email}
          </Link>
          <Link src={siteUrl} style={s.link}>
            {displayUrl(siteUrl)}
          </Link>
        </View>
      </View>

      <View style={s.columns}>
        <View style={s.main}>
          <Section title={labels.summary} wrap={false}>
            <Text style={s.paragraph}>{resume.summary}</Text>
          </Section>

          <Section title={labels.employment}>
            <View style={{ marginBottom: 10 }} wrap={false}>
              <CareerTimeline
                periods={resume.employment.map((position) => position.period)}
                asOf={asOf}
              />
            </View>
            {resume.employment.map((position, i) => (
              <View key={`${position.employer}-${position.role}`} style={s.role} wrap={false}>
                {i < resume.employment.length - 1 && <View style={s.roleRail} />}
                <View style={s.roleDot} />
                <View style={s.roleHeading}>
                  <Text style={s.roleTitle}>{position.role}</Text>
                  <Text style={s.mono}>
                    {formatPeriod(lang, position.period, labels.present)}
                  </Text>
                </View>
                <Text style={s.roleEmployer}>
                  {position.employer}, {position.location}
                </Text>
                <Text style={s.paragraph}>{position.description}</Text>
              </View>
            ))}
          </Section>

          <Section title={labels.awards} wrap={false}>
            {resume.awards.map((award) => (
              <View key={`${award.title}-${award.date.year}`} style={s.listItem}>
                <View style={s.roleMeta}>
                  <Text style={s.itemTitle}>{award.title}</Text>
                  <Text style={s.mono}>{formatResumeDate(lang, award.date)}</Text>
                </View>
                <Text style={s.paragraph}>
                  {award.issuer}
                  {award.note ? ` · ${award.note}` : ""}
                </Text>
              </View>
            ))}
          </Section>
        </View>

        <View style={s.sidebar}>
          <Section title={labels.skills} wrap={false}>
            <SkillList skills={resume.skills} />
          </Section>

          <Section title={labels.languages} wrap={false}>
            <SkillList skills={resume.languages} />
          </Section>

          <Section title={labels.links} wrap={false}>
            {resume.links.map((link) => (
              <View key={link.url} style={s.listItem}>
                <Text style={s.itemTitle}>{link.label}</Text>
                <Link src={link.url} style={[s.mono, s.link]}>
                  {displayUrl(link.url)}
                </Link>
              </View>
            ))}
          </Section>

          <Section title={labels.education} wrap={false}>
            {resume.education.map((entry) => (
              <View key={entry.school} style={s.listItem}>
                <Text style={s.itemTitle}>{entry.school}</Text>
                <Text style={s.mono}>
                  {formatPeriod(lang, entry.period, labels.present)}
                </Text>
              </View>
            ))}
          </Section>

          <Section title={labels.courses} wrap={false}>
            {resume.courses.map((course) => (
              <View key={course.title} style={s.listItem}>
                <Text style={s.itemTitle}>{course.title}</Text>
                <Text style={s.mono}>
                  {course.provider} · {formatResumeDate(lang, course.date)}
                </Text>
              </View>
            ))}
          </Section>

          <Section title={labels.hobbies} wrap={false}>
            <View style={s.chips}>
              {resume.hobbies.map((hobby) => (
                <Text key={hobby} style={s.chip}>
                  {hobby}
                </Text>
              ))}
            </View>
          </Section>
        </View>
      </View>

      <View style={s.footer} fixed>
        <Text>
          {resume.name} · {resume.headline}
        </Text>
        <Text
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        />
      </View>
    </Page>
  </Document>
);
