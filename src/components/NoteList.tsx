import { Note } from "../types";
import React from "react";

type NoteListProps = {
  notes: Note[];
  onDelete: (index: number) => void;
};

type ListItemProps = {
  note: Note;
  onDelete: () => void;
};

const ListItem = ({ note, onDelete }: ListItemProps): React.ReactElement => {
  return (
    <div className="column is-6-desktop is-12-tablet">
      <div className="box">
        <p className="block">
          <strong>Private Note: </strong>
          {note.privateNote}
        </p>
        <p className="block">
          <strong>Public Note: </strong>
          {note.publicNote}
        </p>
        <p className="block">
          <strong>Link: </strong>
          <a href={note.link}>{note.link}</a>
        </p>
        <p className="block">
          <strong>Category: </strong>
          {note.category.join(" - ")}
        </p>
        <button
          className="button is-danger is-small is-uppercase"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export const NoteList = ({
  notes,
  onDelete,
}: NoteListProps): React.ReactElement => {
  return (
    <div className="columns is-multiline">
      {notes.map((note, index) => (
        <ListItem key={index} note={note} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};
