import Link from "next/link";
import { CaseStudySection, Prose } from "@/components/case-study/Section";
import { FeatureSplit, FeatureTile, Figure } from "@/components/case-study/Media";
import {
  Callout,
  LessonList,
  RepositoryList,
  TechListGroups,
} from "@/components/case-study/Lists";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { FLEXI_DAY_REPOSITORIES } from "./repositories";
import type { CaseStudyNavItem } from "@/content/projects/types";
import { SECTION_IDS, withAlt } from "./case-study";

/**
 * The section navigation, in page order, in this module's Language. The ids
 * are the invariant ones; only the labels are prose. A Language whose content
 * module labels a different set, or the same set in a different order, is a
 * test failure rather than a navigation that silently stops tracking.
 */
/**
 * English alt text for every screenshot. The figures themselves are
 * invariant; this is the half a visitor reads, and the hero shows its
 * own alt text as a visible caption.
 */
const SHOT_ALT = {
  calendar:
    "The flexiday team calendar for one month, with vacation, home office and sick days for four people shown as colour-coded chips.",
  dashboard:
    "The flexiday dashboard: pending approvals, who is out today, upcoming leave, the month calendar and a balance summary.",
  requests:
    "The requests page listing each request with its type, dates, state and the approve and decline actions.",
  groups:
    "A group's member list with each person's view, admin and approver permissions, and tabs for quotas, invites, settings and mirroring.",
  report:
    "The report page with per-person balances for the year and an Excel export.",
  calendarSync:
    "The new calendar feed dialog: choose whose records and which leave types to include, with a live month preview.",
  holidays:
    "A group's settings: the working days of the week, and public holidays set to the Czech Republic.",
  localisation:
    "The same dashboard in Czech, with the Czech state holiday marked on 28 September.",
  landing:
    "The public flexiday landing page in dark mode.",
  mobile:
    "The new request form on a phone: leave type, date range and a note.",
};

const shots = withAlt(SHOT_ALT);


export const sections: CaseStudyNavItem[] = [
  { id: SECTION_IDS.hero, label: "Overview" },
  { id: SECTION_IDS.problem, label: "The problem" },
  { id: SECTION_IDS.features, label: "What it does" },
  { id: SECTION_IDS.architecture, label: "Architecture" },
  { id: SECTION_IDS.stack, label: "Tech list" },
  { id: SECTION_IDS.status, label: "Status" },
  { id: SECTION_IDS.learnings, label: "What I learned" },
];

/**
 * The long-form content of the flexiday Case Study. Loaded only by the Case
 * Study route, so none of it reaches the homepage bundle.
 */
const FlexiDayCaseStudyContent = () => (
  <>
    <CaseStudySection
      id={SECTION_IDS.problem}
      title="A spreadsheet that kept breaking"
      lede="Every small team I have worked in tracked time off in a shared sheet. It answered nobody's real question."
    >
      <Prose>
        <p>
          The question is always the same: <strong>who is off next week?</strong> A
          spreadsheet is not enough to answer it. The data in it is static: it
          holds the days somebody booked and does nothing with them — no
          request, no approval, no reminder, no check that two people are not
          away in the same week. Every day off has to be agreed in person, and
          that costs both people time.
        </p>
        <p>
          The tools that solve this properly are built for HR departments. They
          want an org chart, a payroll integration and a per-seat contract
          before a five-person team can book a Friday off.
        </p>
        <p>
          flexiday sits in the gap. It is a calm, shared calendar for teams of a
          few people to a few hundred: request in seconds, approve in a click,
          see the month at a glance. Balances, public holidays and calendar
          feeds are handled for you, and nothing about it needs an HR
          department.
        </p>
      </Prose>
      <Callout>
        <p>
          Built for small and growing teams in the EU. Data lives in AWS
          Frankfurt, the interface ships in English and Czech, and the whole
          product works in light and dark mode.
        </p>
      </Callout>
    </CaseStudySection>

    <CaseStudySection
      id={SECTION_IDS.features}
      title="What it does"
      lede="Everything hangs off one calendar. The rest exists so that calendar is always right."
    >
      <div className="flex flex-col gap-[8rem] max-md:gap-[5.6rem]">
        <div>
          <Figure
            shot={shots.calendar}
            caption="The month view in Group mode. Nine leave types, each with its own colour, filterable per type."
          />
          <div className="mt-[3.2rem] grid gap-x-[6.4rem] gap-y-[2.4rem] md:grid-cols-2">
            <div>
              <h3 className="text-md font-semibold">Shared team calendar</h3>
              <p className="mt-[1.2rem] text-sm text-text-muted">
                One colour-coded view of who is off and when. Switch between
                your own bookings and the whole group, filter by leave type,
                and click any day to start a request from there.
              </p>
            </div>
            <div>
              <h3 className="text-md font-semibold">Nine kinds of leave</h3>
              <p className="mt-[1.2rem] text-sm text-text-muted">
                Vacation, home office, sick days, sick leave, paid and unpaid
                leave, study leave, bank holidays and a catch-all. Only the
                first three draw down a quota; the others are there so the
                calendar tells the truth.
              </p>
            </div>
          </div>
        </div>

        <FeatureSplit
          title="One-click approvals"
          shot={shots.requests}
          caption="The requests queue: type, dates, state, and approve or decline without leaving the row."
        >
          <p>
            Requests land in the approver&apos;s queue with the dates, the type and
            a note. Approve or decline in a tap. The requester gets an email
            and an in-app notification either way, with the reason if it was
            declined.
          </p>
          <p>
            Every state change is recorded as an event, so a request&apos;s history
            is never a mystery.
          </p>
        </FeatureSplit>

        <FeatureSplit
          reverse
          title="Who is away, at a glance"
          shot={shots.dashboard}
          caption="A manager's dashboard: the approval queue, who is out today, upcoming leave and the month, on one screen."
        >
          <p>
            The dashboard answers the daily question before anyone asks it: who
            is out today, who is out next, and what is waiting on me. Balances
            sit beside it, so a manager approving a request already knows
            whether the days are there.
          </p>
        </FeatureSplit>

        <FeatureSplit
          title="Groups, approvers and coverage"
          shot={shots.groups}
          caption="A group's members and who can view, administer and approve. Quotas, invites and settings live in the other tabs."
        >
          <p>
            A team, an office or a project is a group. Each group has its own
            manager, approvers, working days and holiday country, so a
            colleague in Prague and one in Vienna each see the right red days.
          </p>
          <p>
            Coverage is the question the group view answers: before approving,
            an approver sees who else in the group is already away across those
            dates, so a thin week is visible rather than discovered.
          </p>
          <p>
            Invites are single-use links bound to an email address. Managers
            can control a member&apos;s calendar when someone forgets to book their
            own sick day.
          </p>
        </FeatureSplit>

        <div className="grid gap-x-[4.8rem] gap-y-[5.6rem] md:grid-cols-2">
          <FeatureTile title="Balances that add up" shot={shots.report}>
            <p>
              Yearly allowances, carry-over and a paid-plan sick-day benefit
              are tracked per person and per group. A scheduled job rolls
              quotas into the new year. The report exports to Excel for
              whoever still needs a spreadsheet.
            </p>
          </FeatureTile>
          <FeatureTile title="Lives in your own calendar" shot={shots.calendarSync}>
            <p>
              A private ICS feed puts team absences into Google Calendar,
              Outlook or Apple Calendar next to your meetings. No plugin, no
              OAuth prompt; subscribe once and it stays current.
            </p>
          </FeatureTile>
        </div>

        <div className="grid items-center gap-x-[6.4rem] gap-y-[3.2rem] md:grid-cols-[1fr_minmax(0,32rem)]">
          <div className="flex flex-col gap-[3.2rem]">
            <div>
              <h3 className="text-md font-semibold">Requests in seconds, on any screen</h3>
              <p className="mt-[1.2rem] text-sm text-text-muted">
                Pick a type, pick a range, add a note, done. Multi-day requests
                stay grouped so the approver sees one item, not five. On paid
                plans a request can carry an attachment, such as a doctor&apos;s
                note, uploaded straight to S3 and processed by a Lambda.
              </p>
            </div>
            <div>
              <h3 className="text-md font-semibold">Private by default</h3>
              <p className="mt-[1.2rem] text-sm text-text-muted">
                Members see their group. Approvers see what they approve.
                Sensitive leave types are shown discreetly to everyone except
                the people who need to know. Sign-in supports Google, Microsoft
                and two-factor authentication.
              </p>
            </div>
          </div>
          <Figure
            shot={shots.mobile}
            sizes="(max-width: 768px) 60vw, 320px"
            className="mx-auto w-full max-w-[32rem]"
            caption="The new-request form on a phone."
          />
        </div>

        <div className="grid gap-x-[4.8rem] gap-y-[5.6rem] md:grid-cols-2">
          <FeatureTile title="Localised public holidays" shot={shots.holidays}>
            <p>
              Each group picks the country whose holidays it follows and the
              working days it counts. Holidays are resolved per country and
              year, so nobody maintains a list of red days by hand, and a range
              that crosses one does not quietly spend a day of somebody&apos;s
              allowance.
            </p>
          </FeatureTile>
          <FeatureTile title="English and Czech" shot={shots.localisation}>
            <p>
              The interface, the emails and the public site all ship in both
              languages, and the choice follows the person rather than the team.
              Dates, week starts and holiday names follow it too, which matters
              more than the wording does.
            </p>
          </FeatureTile>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection
      id={SECTION_IDS.architecture}
      title="Three repositories, one product"
      lede="The web app, the API and the email templates version and deploy on their own schedules."
    >
      <div className="flex flex-col gap-[4.8rem]">
        <ArchitectureDiagram
          caption="Solid lines are runtime traffic. Dashed lines happen at build or deploy time. The web app never runs a server: every dynamic thing goes through the API."
        />
        <Prose>
          <p>
            <strong>The web app is a static export.</strong> Next.js builds it
            to plain files that sit on S3 behind CloudFront. There is no server
            runtime, no route handlers and no middleware. Everything dynamic is
            a JSON call to the API, which keeps hosting cheap and the attack
            surface small.
          </p>
          <p>
            <strong>The API is a plain Express 5 service</strong> on App Runner
            with strict one-way layering: routes call controllers, controllers
            call services, services call the database through Drizzle.
            Permission checks live in the service layer, so a route cannot
            forget them. Cron jobs inside the same process roll quotas over at
            new year and sweep expired attachments.
          </p>
          <p>
            <strong>Emails are compiled, not rendered.</strong> The emails
            repository renders react-email components to HTML at build time and
            publishes them to SES as native templates. The API sends by template
            name with a handful of variables. A broken template fails the
            emails build, never a user&apos;s request.
          </p>
          <p>
            <strong>Infrastructure is Terraform</strong>: App Runner, RDS, the
            VPC, S3, Secrets Manager, IAM and Route 53. Applying is a deliberate
            manual step, never something CI does on a green build.
          </p>
        </Prose>
        <div>
          <h3 className="mb-[1.6rem] text-md font-semibold">The repositories</h3>
          <RepositoryList repositories={FLEXI_DAY_REPOSITORIES} />
          <p className="mt-[2.4rem] max-w-[62ch] text-sm text-text-muted">
            The workspace repository exists because three independent repos
            still need to be developed together. It holds the agent skills I
            use with Claude Code, a CLI that brings up the whole stack and seeds
            a realistic team, an MCP server exposing the same operations to
            agents, and the docs that only make sense across all three. The
            product repos are plain sibling clones inside it, on purpose:
            submodules pin a commit, and pinning is the opposite of what
            independently released repos want.
          </p>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection id={SECTION_IDS.stack} title="Tech list, by repository">
      <TechListGroups
        groups={[
          {
            name: "Web app",
            items: [
              "Next.js 16",
              "React 19",
              "TypeScript",
              "Tailwind v4",
              "shadcn/ui",
              "TanStack Query",
              "better-auth",
              "Zod",
              "Recharts",
              "Paddle",
              "S3 + CloudFront",
              "Vitest",
              "Sentry",
            ],
          },
          {
            name: "Backend",
            items: [
              "Node 24",
              "Express 5",
              "Drizzle ORM",
              "PostgreSQL",
              "better-auth",
              "Google OAuth",
              "Microsoft OAuth",
              "AWS SDK (SES, S3)",
              "App Runner",
              "RDS",
              "Lambda",
              "Terraform",
              "croner",
              "date-holidays",
              "ExcelJS",
              "sharp",
              "Vitest",
              "Sentry",
            ],
          },
          {
            name: "Emails",
            items: ["react-email", "React 19", "AWS SES templates", "tsx"],
          },
          {
            name: "Workspace",
            items: [
              "Node scripts",
              "MCP server",
              "Claude agent skills",
              "GitHub Actions",
              "CodeQL",
              "actionlint",
              "shellcheck",
              "ESLint",
              "Prettier",
            ],
          },
        ]}
      />
    </CaseStudySection>

    <CaseStudySection
      id={SECTION_IDS.status}
      title="Where it stands"
      lede="Live, in production, and free for early adopters."
    >
      <div className="grid gap-x-[6.4rem] gap-y-[4rem] md:grid-cols-2">
        <Prose>
          <p>
            flexiday runs at{" "}
            <Link
              href="https://www.flexi-day.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-brand hover:decoration-brand"
            >
              flexi-day.com
            </Link>{" "}
            on the infrastructure described above. Billing is built on Paddle
            as merchant of record, with Free, Pro and Enterprise plans that
            differ in how many groups and people they hold. Early adopters use
            it free while the product settles.
          </p>
          <p>
            I run it as a sole trader from Brno, Czech Republic. It started as
            the vacation spreadsheet I kept breaking, and it is now the tool I
            wanted.
          </p>
        </Prose>
        <div>
          <h3 className="text-xs font-medium text-text">What&apos;s next</h3>
          <ul className="mt-[1.6rem] flex flex-col gap-[2rem] text-sm text-text-muted">
            <li className="border-l border-border pl-[2rem]">
              <strong className="block font-medium text-text">Direct Google Calendar sync</strong>
              Writing approved leave straight into people&apos;s calendars, instead
              of the ICS feed they subscribe to today.
            </li>
            <li className="border-l border-border pl-[2rem]">
              <strong className="block font-medium text-text">A mobile app</strong>
              A native app for the two things people do on a phone: book a day
              off, and approve somebody else&apos;s.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[5.6rem]">
        <Figure
          shot={shots.landing}
          caption="The public site at flexi-day.com, which is also where the product's own copy comes from."
        />
      </div>
    </CaseStudySection>

    <CaseStudySection id={SECTION_IDS.learnings} title="What I learned">
      <LessonList
        items={[
          {
            title: "A static frontend is a feature",
            body: (
              <p>
                Removing the server from the web app forced every piece of
                logic to live in one place, the API. It made the frontend
                trivially cheap to host and impossible to leak secrets from,
                and it made local development honest: if it works against
                localhost:8080, it works in production.
              </p>
            ),
          },
          {
            title: "Guards belong in the service layer",
            body: (
              <p>
                Early on, permission checks lived in route handlers and drifted.
                Moving them next to the business logic meant a new endpoint
                could not skip them, and tests could exercise them without HTTP.
              </p>
            ),
          },
          {
            title: "Email is a build artefact",
            body: (
              <p>
                Rendering templates at build time and syncing them to SES turned
                email from a runtime risk into a verified asset. Placeholder
                tokens are checked before anything is published, so a template
                cannot ship with a variable that never gets filled.
              </p>
            ),
          },
          {
            title: "Seed the whole story, not a row",
            body: (
              <p>
                A dev command that creates a team, quotas and requests across
                pending, approved and rejected states made every screen testable
                in seconds. The screenshots on this page came out of that seed.
              </p>
            ),
          },
          {
            title: "Agents need a shared workspace",
            body: (
              <p>
                Working across three repos with coding agents only became smooth
                once the skills, the dev CLI and the domain glossary lived in one
                place. The workspace repo is small, and it is where most of the
                leverage came from.
              </p>
            ),
          },
        ]}
      />
    </CaseStudySection>
  </>
);

export default FlexiDayCaseStudyContent;
