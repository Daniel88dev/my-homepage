"use client";

import { ReactTyped } from "react-typed";

/** The role that types itself out inside the hero headline. */
export const TypedRoles = () => (
  <ReactTyped
    strings={[
      "Full Stack Developer",
      "Back-end Developer",
      "Manufacturing Engineer",
      "Project Manager",
    ]}
    typeSpeed={50}
    loop
    backSpeed={20}
    cursorChar="_"
    showCursor={true}
  />
);
