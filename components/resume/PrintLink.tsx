"use client";

import { PiPrinter } from "react-icons/pi";

interface Props {
  label: string;
  className: string;
}

export const PrintLink = ({ label, className }: Props) => (
  <button type="button" onClick={() => window.print()} className={className}>
    {label} <PiPrinter aria-hidden />
  </button>
);
