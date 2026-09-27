"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Timeline } from "@/content/resume/timeline";
import type { RoleId, Track } from "@/content/resume/types";

interface Props {
  timeline: Timeline;
  lanes: { track: Track; label: string }[];
  spanLabels: Record<RoleId, string>;
  nowLabel: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

export const CareerTimeline = ({
  timeline,
  lanes,
  spanLabels,
  nowLabel,
}: Props) => {
  const reduceMotion = useReducedMotion();
  let order = 0;

  return (
    <div className="grid grid-cols-[minmax(9rem,12rem)_minmax(0,1fr)] gap-x-[2.4rem] max-md:grid-cols-[7rem_minmax(0,1fr)] max-md:gap-x-[1.2rem]">
      {lanes.map((lane) => (
        <Fragment key={lane.track}>
          <p className="self-end pb-[0.2rem] font-mono text-2xs uppercase text-text-muted">
            {lane.label}
          </p>
          <div className="relative h-[4.4rem] border-r border-dashed border-brand/40">
            <div
              aria-hidden
              className="absolute bottom-[0.6rem] left-0 right-0 h-px bg-border"
            />
            {timeline.spans
              .filter((span) => span.track === lane.track)
              .map((span) => {
                const index = order++;
                const anchor = span.current
                  ? { right: `${100 - span.startPercent - span.widthPercent}%` }
                  : { left: `${span.startPercent}%` };
                return (
                  <Fragment key={span.id}>
                    <motion.div
                      data-rise
                      title={spanLabels[span.id]}
                      className={`absolute bottom-0 h-[1.4rem] rounded-[4px] ${
                        span.current ? "bg-brand" : "bg-text-muted/35"
                      }`}
                      style={{
                        left: `${span.startPercent}%`,
                        width: `${span.widthPercent}%`,
                        transformOrigin: "left center",
                      }}
                      initial={reduceMotion ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.1 + index * 0.12,
                        ease,
                      }}
                    />
                    <motion.span
                      data-rise
                      aria-hidden
                      className={`absolute top-0 whitespace-nowrap font-mono text-2xs max-md:hidden ${
                        span.current ? "text-brand" : "text-text-muted"
                      }`}
                      style={anchor}
                      initial={reduceMotion ? false : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.12 }}
                    >
                      {spanLabels[span.id]}
                    </motion.span>
                  </Fragment>
                );
              })}
          </div>
        </Fragment>
      ))}
      <div aria-hidden />
      <div
        aria-hidden
        className="relative h-[2.4rem] font-mono text-2xs text-text-muted"
      >
        {timeline.yearTicks
          .filter((tick) => tick.percent <= 94)
          .map((tick, i) => (
            <span
              key={tick.year}
              className={`absolute top-[0.6rem] -translate-x-1/2 ${
                i % 2 === 1 ? "max-md:hidden" : ""
              }`}
              style={{ left: `${tick.percent}%` }}
            >
              {tick.year}
            </span>
          ))}
        <span className="absolute right-0 top-[0.6rem] text-brand">
          {nowLabel}
        </span>
      </div>
    </div>
  );
};
