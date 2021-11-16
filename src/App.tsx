import React, { useCallback, useState } from "react";

import { Note } from "./types";
import { NoteForm } from "./components/NoteForm";
import { NoteList } from "./components/NoteList";
import { NotePreview } from "./components/NotePreview";
import { Snackbar } from "./components/Snackbar";
import { SnackbarProvider } from "./providers/SnackbarProvider";

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
    <SnackbarProvider>
      <div className="container">
        <div className="columns is-desktop">
          <div className="column">
            <div className="section">
              <h1 className="title is-1">Rubrics Helper</h1>
              <div className="box">
                <div className="field ">
                  <label className="label">Ticket Name</label>
                  <input
                    className="input"
                    name="ticket"
                    value={ticketName}
                    onChange={(e) => setTicketName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <h1 className="title is-1">Add Note</h1>
              <NoteForm onAdd={onNoteAdd} />
            </div>
            <div className="section">
              <h1 className="title is-1">Notes</h1>
              <NoteList notes={notes} onDelete={onNoteDelete} />
            </div>
          </div>
          <div className="column">
            <div className="section">
              <h1 className="title is-1">Preview</h1>
              <NotePreview ticketName={ticketName} notes={notes} />
            </div>
          </div>
        </div>
        <Snackbar />
      </div>
    </SnackbarProvider>
  );
}

export default App;
