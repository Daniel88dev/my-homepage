import Link from "next/link";
import { PostProse } from "@/components/blog/PostProse";
import { languagePath } from "@/lib/language";

const WhyIBuiltFlexidayPost = () => (
  <PostProse>
    <h2>The spreadsheet</h2>
    <p>
      Every small team I have worked in kept its time off in a shared
      spreadsheet. It held the days somebody had booked and did nothing with
      them: no request, no approval, no reminder, no warning that two people
      from the same team were away in the same week.
    </p>
    <p>
      The question people actually had — <strong>who is off next week?</strong>{" "}
      — still had to be asked out loud, and every day off was agreed in person.
      That costs both people time, every single time.
    </p>

    <h2>Why not an existing tool</h2>
    <p>
      The tools that handle this properly are built for HR departments. They
      want an org chart, a payroll integration and a per-seat contract before a
      five-person team can book a Friday off. For a small team, that is a lot of
      ceremony around what should be a calendar.
    </p>

    <h2>Why build it myself</h2>
    <p>
      I wanted a calm, shared calendar: request in seconds, approve in a click,
      see the month at a glance. And I wanted to build a whole product, not a
      feature inside someone else&apos;s. flexiday meant owning every layer —
      the database schema, the API, the static web app, the email pipeline and
      the Terraform around it — and running it in production as a sole trader.
    </p>
    <p>
      It is also an old habit. At Hyundai, the tools I wrote in my spare time
      ended up running on the plant floor for real teams, and that is what
      convinced me to make software my profession. flexiday is the same
      instinct, pointed at a problem every team has.
    </p>

    <h2>What came out of it</h2>
    <p>
      flexiday is live at{" "}
      <Link href="https://www.flexi-day.com" target="_blank" rel="noopener noreferrer">
        flexi-day.com
      </Link>
      , ships in English and Czech, and is free for early adopters. How it is
      built — three repositories, a static Next.js web app, an Express API on
      AWS and emails compiled at build time — is in the{" "}
      <Link href={languagePath("en", "/projects/flexi-day")}>
        flexiday case study
      </Link>
      .
    </p>
  </PostProse>
);

export default WhyIBuiltFlexidayPost;
