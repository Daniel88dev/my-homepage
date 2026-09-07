"use client";

import { animate, stagger } from "animejs";

export const DotGrid = () => {
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 20;

  const dots = [];

  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(".dot-point", {
      scale: [
        { to: 1.35, ease: "outSine", duration: 250 },
        { to: 1, ease: "inOutQuad", duration: 500 },
      ],
      translateY: [
        { to: -15, ease: "outSine", duration: 250 },
        { to: 1, ease: "inOutQuad", duration: 500 },
      ],
      opacity: [
        { to: 0.7, ease: "outSine", duration: 250 },
        { to: 0.35, ease: "inOutQuad", duration: 500 },
      ],
      delay: stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: Number(e.currentTarget.dataset.index),
      }),
    });
  };

  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-[8px] p-[0.8rem] transition-[background] duration-[250ms] hover:bg-[rgba(255,255,255,0.15)]"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-[8px] w-[8px] rounded-full bg-[linear-gradient(180deg,var(--background),var(--text))] opacity-[0.35] group-hover:bg-[linear-gradient(180deg,var(--background),var(--brand))] group-hover:opacity-100"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="absolute bottom-[12px] right-[3.6rem] top-[12px] z-0 grid max-w-[75%] max-md:opacity-40"
    >
      {dots.map((dot) => dot)}
    </div>
  );
};
