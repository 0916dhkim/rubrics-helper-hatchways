import { Note } from "../types";
import { ProgrammingSkills } from "./ProgrammingSkills";
import { ProgrammingSpecifics } from "./ProgrammingSpecifics";
import React from "react";

type NotePreviewProps = {
  ticketName: string;
  notes: Note[];
};

export const NotePreview = ({
  ticketName,
  notes,
}: NotePreviewProps): React.ReactElement => {
  return (
    <div>
      <ProgrammingSkills ticketName={ticketName} notes={notes} />
      <ProgrammingSpecifics notes={notes} />
    </div>
  );
};
