import React, { useMemo } from "react";

import { Note } from "../types";

function fillProgrammingSpecifics(notes: Note[]): string {
  if (notes.length === 0) return "";
  return (
    "- Candidate lost points for " +
    notes.map((note) => `[${note.publicNote}](${note.link})`).join(", ") +
    "."
  );
}

type ProgrammingSpecificsProps = {
  notes: Note[];
};

export const ProgrammingSpecifics = ({ notes }: ProgrammingSpecificsProps) => {
  const generated = useMemo(() => fillProgrammingSpecifics(notes), [notes]);
  return (
    <>
      <h2>Programming Specifics</h2>
      <h3>Public Notes</h3>
      <p>{generated}</p>
    </>
  );
};
