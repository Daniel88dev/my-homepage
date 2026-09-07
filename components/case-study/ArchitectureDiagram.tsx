import type { ReactNode } from "react";

/**
 * How the flexiday repositories fit together. Drawn in the page's own tokens
 * so it follows the theme; not an external image.
 *
 * Layout (viewBox 960 x 530). The browser sits outside the AWS boundary;
 * the left column inside it is the three repositories plus the attachment
 * bucket, the right column is the managed services they talk to.
 *
 *   [Browser] --loads app--> [Web app on S3 + CloudFront]
 *       |
 *       +--JSON over HTTPS--> [API on App Runner] --SQL--> [PostgreSQL on RDS]
 *       |                          |
 *       |                          +--send by template--> [SES]
 *       |                                                   ^
 *       |                     [Emails repo] --publishes templates (build time)
 *       |
 *       +--presigned upload--> [S3 attachments] --S3 event--> [Lambda]
 */

interface NodeProps {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  subtitle: string;
  accent?: boolean;
}

const Node = ({ x, y, w, h, title, subtitle, accent }: NodeProps) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={8}
      fill="var(--background-light)"
      stroke={accent ? "var(--brand)" : "var(--border)"}
      strokeWidth={accent ? 1.5 : 1}
    />
    <text
      x={x + 16}
      y={y + 30}
      fill="var(--text)"
      fontFamily="var(--font-sans)"
      fontSize={16}
      fontWeight={600}
    >
      {title}
    </text>
    <text
      x={x + 16}
      y={y + 52}
      fill="var(--text-muted)"
      fontFamily="var(--font-mono)"
      fontSize={12}
    >
      {subtitle}
    </text>
  </g>
);

interface EdgeProps {
  d: string;
  label?: string;
  lx?: number;
  ly?: number;
  dashed?: boolean;
}

const Edge = ({ d, label, lx, ly, dashed }: EdgeProps) => (
  <g>
    <path
      d={d}
      fill="none"
      stroke="var(--text-muted)"
      strokeWidth={1.25}
      strokeDasharray={dashed ? "4 4" : undefined}
      markerEnd="url(#arrow)"
      opacity={0.8}
    />
    {label && (
      <text
        x={lx}
        y={ly}
        fill="var(--text-muted)"
        fontFamily="var(--font-mono)"
        fontSize={11}
        textAnchor="middle"
      >
        {label}
      </text>
    )}
  </g>
);

/**
 * The diagram itself is invariant: its node and edge labels are the names of
 * the services and repositories, which are not translated, and its `<desc>` is
 * the drawing's alt text, which stays English for the same reason a
 * screenshot's does. The caption below it is running prose in the page's own
 * flow, so it comes from the Case Study content module in that module's
 * Language, exactly as a `Figure`'s caption does — and it is typed the same
 * way, so a caption can carry emphasis or a link the day one needs to.
 */
export const ArchitectureDiagram = ({ caption }: { caption: ReactNode }) => {
  return (
    <figure>
      <div className="overflow-x-auto rounded-[0.8rem] border border-border bg-[radial-gradient(120%_80%_at_50%_100%,rgb(46_229_157/0.06),transparent_60%)] p-[2.4rem] max-md:p-[1.2rem]">
        <svg
          viewBox="0 0 960 530"
          role="img"
          aria-labelledby="arch-title arch-desc"
          className="mx-auto block h-auto w-full min-w-[640px] max-w-[960px]"
        >
          <title id="arch-title">flexiday architecture</title>
          <desc id="arch-desc">
            The browser loads the static web app from S3 through CloudFront and
            talks JSON to an Express 5 API on App Runner, which reads and writes
            PostgreSQL on RDS and sends mail through SES using templates that
            the emails repository publishes at build time. Attachments upload
            straight to S3 with presigned requests and a Lambda processes them.
            Terraform manages all of the AWS resources.
          </desc>
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-muted)" />
            </marker>
          </defs>

          {/* Terraform boundary: everything except the visitor's browser */}
          <rect
            x={260}
            y={20}
            width={680}
            height={490}
            rx={12}
            fill="none"
            stroke="var(--border)"
            strokeDasharray="6 6"
          />
          <text
            x={920}
            y={44}
            textAnchor="end"
            fill="var(--text-muted)"
            fontFamily="var(--font-mono)"
            fontSize={11}
          >
            AWS eu-central-1, managed with Terraform
          </text>

          {/* The visitor */}
          <Node x={20} y={200} w={180} h={72} title="Browser" subtitle="visitor or team member" />

          {/* Left column: the three repositories and the attachment bucket */}
          <Node
            x={300}
            y={60}
            w={240}
            h={72}
            title="Web app"
            subtitle="Next.js export on S3 + CloudFront"
            accent
          />
          <Node x={300} y={200} w={240} h={72} title="API" subtitle="Express 5 on App Runner" accent />
          <Node
            x={300}
            y={320}
            w={240}
            h={72}
            title="Emails repo"
            subtitle="react-email, synced at build"
            accent
          />
          <Node x={300} y={430} w={240} h={60} title="S3 attachments" subtitle="presigned upload" />

          {/* Right column: managed services */}
          <Node x={640} y={200} w={240} h={72} title="PostgreSQL" subtitle="RDS, Drizzle ORM" />
          <Node x={640} y={320} w={240} h={72} title="SES" subtitle="transactional email" />
          <Node x={640} y={430} w={240} h={60} title="Lambda" subtitle="image post-processing" />

          {/* Runtime traffic */}
          <Edge d="M 200 218 L 300 100" label="loads app" lx={222} ly={140} />
          <Edge d="M 200 236 L 300 236" label="JSON" lx={250} ly={226} />
          <Edge d="M 110 272 L 110 460 L 300 460" label="upload" lx={140} ly={452} />
          <Edge d="M 540 236 L 640 236" label="SQL" lx={590} ly={226} />
          <Edge d="M 540 268 L 640 340" label="send by template" lx={618} ly={296} />
          <Edge d="M 540 460 L 640 460" label="S3 event" lx={590} ly={450} />

          {/* Build and deploy time */}
          <Edge d="M 540 356 L 640 356" label="templates" lx={590} ly={346} dashed />
        </svg>
      </div>
      <figcaption className="mt-[1.2rem] max-w-[62ch] font-mono text-2xs text-text-muted">
        {caption}
      </figcaption>
    </figure>
  );
};
