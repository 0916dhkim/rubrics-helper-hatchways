import { Note } from "../types";
import React from "react";
import styles from "./NoteList.module.css";

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
    <div className={styles.item}>
      <p>{note.privateNote}</p>
      <p>{note.publicNote}</p>
      <a href={note.link}>{note.link}</a>
      <p>{note.category.join(" - ")}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export const NoteList = ({
  notes,
  onDelete,
}: NoteListProps): React.ReactElement => {
  return (
    <div>
      {notes.map((note, index) => (
        <ListItem key={index} note={note} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};
