import "./App.css";

import React, { useCallback, useState } from "react";

import { Note } from "./types";
import { NoteForm } from "./components/NoteForm";
import { NoteList } from "./components/NoteList";
import { NotePreview } from "./components/NotePreview";

function App() {
  const [ticketName, setTicketName] = useState("Bugfix");
  const [notes, setNotes] = useState<Note[]>([]);
  const onNoteAdd = useCallback((note) => {
    setNotes((previous) => [...previous, note]);
  }, []);
  const onNoteDelete = useCallback((indexToDelete: number): void => {
    setNotes((previous) =>
      previous.reduce<Note[]>((agg, note, index) => {
        if (index !== indexToDelete) agg.push(note);
        return agg;
      }, [])
    );
  }, []);
  return (
    <div className="App">
      <label>
        Ticket Name
        <input
          name="ticket"
          value={ticketName}
          onChange={(e) => setTicketName(e.target.value)}
        />
      </label>
      <NoteForm onAdd={onNoteAdd} />
      <NoteList notes={notes} onDelete={onNoteDelete} />
      <NotePreview ticketName={ticketName} notes={notes} />
    </div>
  );
}

export default App;
