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
import type { Resume, Role, YearMonth } from "@/content/resume";
import { SPOKEN_LANGUAGE_IDS, TRACKS } from "@/content/resume/types";
import { formatYear, formatYearMonth } from "@/content/resume/format";
import { buildTimeline } from "@/content/resume/timeline";
import { PRINT_THEME as T } from "./print-theme";

interface Props {
  lang: Language;
  resume: Resume;
  labels: Dictionary["resume"];
  now: YearMonth;
}

const PAGE_WIDTH = 595.28;
const MARGIN = 36;
const SIDEBAR_WIDTH = 168;
const GUTTER = 24;
const MAIN_WIDTH = PAGE_WIDTH - 2 * MARGIN - SIDEBAR_WIDTH - GUTTER;
const HEADER_HEIGHT = 150;
const LANE_LABEL_WIDTH = 64;

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
  eyebrow: {
    fontFamily: "Geist Mono",
    fontSize: 7.4,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: T.brand,
    marginBottom: 6,
  },
  name: { fontSize: 26, fontWeight: 700, letterSpacing: -0.6, lineHeight: 1.1 },
  dot: { color: T.brand },
  headline: {
    marginTop: 5,
    maxWidth: 400,
    fontSize: 10.5,
    fontWeight: 500,
    color: T.muted,
    lineHeight: 1.35,
  },
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
  roleHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 8,
  },
  roleTitle: { fontSize: 10, fontWeight: 600 },
  roleEmployer: { color: T.brand, fontWeight: 500, marginBottom: 3 },
  bullet: { flexDirection: "row", gap: 5, marginTop: 2 },
  bulletMark: { color: T.brand },
  mono: { fontFamily: "Geist Mono", fontSize: 7.2, color: T.muted },
  lane: { flexDirection: "row", alignItems: "center", height: 13 },
  laneLabel: {
    width: LANE_LABEL_WIDTH,
    fontFamily: "Geist Mono",
    fontSize: 6.6,
    textTransform: "uppercase",
    color: T.muted,
  },
  listItem: { marginBottom: 5 },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  itemTitle: { fontWeight: 500 },
  groupTitle: { fontWeight: 600, marginBottom: 3 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 3, marginBottom: 8 },
  chip: {
    paddingVertical: 1.5,
    paddingHorizontal: 5,
    borderRadius: 6,
    backgroundColor: T.paperTint,
    border: `0.6pt solid ${T.rule}`,
    fontSize: 7.2,
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

const HeaderBand = () => {
  const dots = [];
  for (let row = 0; row < 7; row++) {
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
      <Circle cx={PAGE_WIDTH - 60} cy={HEADER_HEIGHT - 8} r={58} fill={T.brandBright} fillOpacity={0.12} />
      <Circle cx={PAGE_WIDTH - 60} cy={HEADER_HEIGHT - 8} r={32} fill={T.brand} fillOpacity={0.1} />
      <Rect x={0} y={HEADER_HEIGHT - 3} width={PAGE_WIDTH} height={3} fill="url(#accent)" />
    </Svg>
  );
};

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
    <View style={s.sectionTitle}>
      <Text style={s.sectionTitleText}>{title}</Text>
      <View style={s.sectionRule} />
    </View>
    {children}
  </View>
);

const CareerTimeline = ({
  roles,
  now,
  laneLabels,
}: {
  roles: Role[];
  now: YearMonth;
  laneLabels: Dictionary["resume"]["tracks"];
}) => {
  const timeline = buildTimeline(roles, now, 4);
  const width = MAIN_WIDTH - LANE_LABEL_WIDTH;
  const x = (percent: number) => (percent / 100) * width;

  return (
    <View>
      {TRACKS.map((track) => (
        <View key={track} style={s.lane}>
          <Text style={s.laneLabel}>{laneLabels[track]}</Text>
          <Svg width={width} height={13} viewBox={`0 0 ${width} 13`}>
            {timeline.yearTicks.map((tick) => (
              <Line
                key={tick.year}
                x1={x(tick.percent)}
                y1={0}
                x2={x(tick.percent)}
                y2={13}
                stroke={T.rule}
                strokeWidth={0.5}
              />
            ))}
            {timeline.spans
              .filter((span) => span.track === track)
              .map((span) => (
                <Rect
                  key={span.id}
                  x={x(span.startPercent)}
                  y={3.5}
                  width={Math.max(x(span.widthPercent) - 1, 3)}
                  height={6}
                  rx={3}
                  fill={span.current ? T.brand : T.muted}
                  fillOpacity={span.current ? 1 : 0.35}
                />
              ))}
          </Svg>
        </View>
      ))}
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: LANE_LABEL_WIDTH }} />
        <View style={{ position: "relative", width, height: 12 }}>
          <View
            style={{ position: "absolute", top: 0, left: 0, right: 0, height: 0.6, backgroundColor: T.muted }}
          />
          {timeline.yearTicks.map((tick) => (
            <Text
              key={tick.year}
              style={[s.mono, { position: "absolute", top: 2, left: Math.min(x(tick.percent), width - 18) }]}
            >
              {tick.year}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const displayUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export const ResumePdf = ({ lang, resume, labels, now }: Props) => {
  const { facts, copy } = resume;
  const period = (start: YearMonth, end: YearMonth | null) =>
    `${formatYearMonth(lang, start)} – ${end ? formatYearMonth(lang, end) : labels.present}`;

  return (
    <Document
      title={copy.meta.title}
      author={facts.name}
      subject={copy.meta.description}
      keywords={facts.skillGroups.flatMap((group) => group.items).join(", ")}
      creator={facts.name}
      producer={facts.name}
      language={lang}
    >
      <Page size="A4" style={s.page}>
        <HeaderBand />
        <View style={s.header}>
          <Text style={s.eyebrow}>{copy.eyebrow}</Text>
          <Text style={s.name}>
            {facts.name}
            <Text style={s.dot}>.</Text>
          </Text>
          <Text style={s.headline}>{copy.headline}</Text>
          <View style={s.contact}>
            <Link src={`mailto:${facts.email}`} style={s.link}>
              {facts.email}
            </Link>
            {facts.links.map((link) => (
              <Link key={link.id} src={link.url} style={s.link}>
                {displayUrl(link.url)}
              </Link>
            ))}
          </View>
        </View>

        <View style={s.columns}>
          <View style={s.main}>
            <View style={s.section} wrap={false}>
              <Text style={s.paragraph}>{copy.summary}</Text>
            </View>

            <Section title={labels.experience}>
              <View style={{ marginBottom: 12 }} wrap={false}>
                <CareerTimeline roles={facts.roles} now={now} laneLabels={labels.tracks} />
              </View>
              {facts.roles.map((role, i) => {
                const roleCopy = copy.roles[role.id];
                return (
                  <View key={role.id} style={s.role} wrap={false}>
                    {i < facts.roles.length - 1 && <View style={s.roleRail} />}
                    <View style={s.roleDot} />
                    <View style={s.roleHeading}>
                      <Text style={s.roleTitle}>{roleCopy.title}</Text>
                      <Text style={s.mono}>{period(role.start, role.end)}</Text>
                    </View>
                    <Text style={s.roleEmployer}>
                      {role.employer}, {role.location}
                    </Text>
                    <Text style={s.paragraph}>{roleCopy.summary}</Text>
                    {roleCopy.highlights.map((highlight) => (
                      <View key={highlight} style={s.bullet}>
                        <Text style={s.bulletMark}>•</Text>
                        <Text style={[s.paragraph, { flex: 1 }]}>{highlight}</Text>
                      </View>
                    ))}
                  </View>
                );
              })}
            </Section>

            <Section title={labels.awards} wrap={false}>
              {facts.awards.map((award) => {
                const awardCopy = copy.awards[award.id];
                return (
                  <View key={award.id} style={s.listItem}>
                    <View style={s.itemRow}>
                      <Text style={s.itemTitle}>{awardCopy.title}</Text>
                      <Text style={s.mono}>{formatYear(award.date)}</Text>
                    </View>
                    <Text style={s.paragraph}>
                      {award.issuer}
                      {awardCopy.note ? ` · ${awardCopy.note}` : ""}
                    </Text>
                  </View>
                );
              })}
            </Section>
          </View>

          <View style={s.sidebar}>
            <Section title={labels.skills} wrap={false}>
              {facts.skillGroups.map((group) => (
                <View key={group.id}>
                  <Text style={s.groupTitle}>{copy.skillGroups[group.id]}</Text>
                  <View style={s.chips}>
                    {group.items.map((item) => (
                      <Text key={item} style={s.chip}>
                        {item}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </Section>

            <Section title={labels.spokenLanguages} wrap={false}>
              {SPOKEN_LANGUAGE_IDS.map((id) => (
                <View key={id} style={[s.itemRow, s.listItem]}>
                  <Text style={s.itemTitle}>{copy.spokenLanguages[id].name}</Text>
                  <Text style={s.mono}>{copy.spokenLanguages[id].level}</Text>
                </View>
              ))}
            </Section>

            <Section title={labels.education} wrap={false}>
              {facts.education.map((entry) => (
                <View key={entry.id} style={s.listItem}>
                  <Text style={s.itemTitle}>{entry.school}</Text>
                  <Text style={s.paragraph}>{copy.education[entry.id].field}</Text>
                  <Text style={s.mono}>
                    {formatYear(entry.start)} – {formatYear(entry.end)}
                  </Text>
                </View>
              ))}
            </Section>

            <Section title={labels.courses} wrap={false}>
              {facts.courses.map((course) => (
                <View key={course.id} style={s.listItem}>
                  <Text style={s.itemTitle}>{course.title}</Text>
                  <Text style={s.mono}>
                    {course.provider} · {formatYearMonth(lang, course.date)}
                  </Text>
                </View>
              ))}
            </Section>
          </View>
        </View>

        <View style={s.footer} fixed>
          <Text>
            {facts.name} · {facts.email}
          </Text>
          <Text
            render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          />
        </View>
      </Page>
    </Document>
  );
};
