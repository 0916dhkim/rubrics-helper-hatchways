import { MajorCategories, Note } from "../types";

import React from "react";

function fillProgrammingSkils(majorCategory: string, notes: Note[]): string {
  if (notes.length === 0) return "";
  return (
    `- ${majorCategory}: Candidate lost points for ` +
    notes.map((note) => `[${note.publicNote}](${note.link})`).join(", ") +
    "."
  );
}

type PublicNotesProps = { notes: Note[] };

const PublicNotes = ({ notes }: PublicNotesProps): React.ReactElement => {
  return (
    <>
      {MajorCategories.map((majorCategory) => (
        <>
          <p>
            {fillProgrammingSkils(
              majorCategory,
              notes.filter((note) => note.category[0] === majorCategory)
            )}
          </p>
        </>
      ))}
    </>
  );
};

type PrivateNotesProps = {
  ticketName: string;
  notes: Note[];
};

const PrivateNotes = ({
  ticketName,
  notes,
}: PrivateNotesProps): React.ReactElement => {
  return (
    <>
      {MajorCategories.map((category) => (
        <>
          <h4>{category}</h4>
          {notes
            .filter((note) => note.category[0] === category)
            .map((note) => (
              <p>{`[${ticketName}: ${note.privateNote}]`}</p>
            ))}
        </>
      ))}
    </>
  );
};

type ProgrammingSkillsProps = {
  notes: Note[];
  ticketName: string;
};

export const ProgrammingSkills = ({
  notes,
  ticketName,
}: ProgrammingSkillsProps): React.ReactElement => {
  return (
    <>
      <h2>Programming Skills</h2>
      <h3>Public Notes</h3>
      <PublicNotes notes={notes} />
      <h3>Private Notes</h3>
      <PrivateNotes ticketName={ticketName} notes={notes} />
    </>
  );
};