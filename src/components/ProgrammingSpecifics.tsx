import React, { useMemo } from "react";

import { Note } from "../types";
import { QuickCopy } from "./QuickCopy";

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
    <div className="box">
      <h2 className="title is-2">Programming Specifics</h2>
      <h3 className="title is-3">Public Notes</h3>
      <QuickCopy>{generated}</QuickCopy>
    </div>
  );
};
