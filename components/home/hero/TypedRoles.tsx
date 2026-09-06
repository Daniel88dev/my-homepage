"use client";

import { ReactTyped } from "react-typed";

/** The role that types itself out inside the hero headline. */
export const TypedRoles = ({ roles }: { roles: string[] }) => (
  <ReactTyped
    strings={roles}
    typeSpeed={50}
    loop
    backSpeed={20}
    cursorChar="_"
    showCursor={true}
  />
);
