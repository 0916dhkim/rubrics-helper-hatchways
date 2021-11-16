import { Categories, Note } from "../types";
import React, { useState } from "react";

type Props = {
  onAdd: (note: Note) => void;
};

export const NoteForm = ({ onAdd }: Props): React.ReactElement => {
  const [privateNote, setPrivateNote] = useState("");
  const [publicNote, setPublicNote] = useState("");
  const [link, setLink] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(0);

  const resetForm = () => {
    setPrivateNote("");
    setPublicNote("");
    setCategoryIndex(0);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onAdd({
      privateNote,
      publicNote,
      link,
      category: Categories[categoryIndex],
    });
    resetForm();
  };

  return (
    <div className="card">
      <form className="card-content" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Private Note</label>
          <div className="control">
            <input
              className="input"
              name="private-note"
              value={privateNote}
              onChange={(e) => {
                setPrivateNote(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Public Note</label>
          <div className="control">
            <input
              className="input"
              name="public-note"
              value={publicNote}
              onChange={(e) => {
                setPublicNote(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input
              className="input"
              name="link"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <select
                name="category"
                value={categoryIndex}
                onChange={(e) => {
                  setCategoryIndex(parseInt(e.target.value));
                }}
              >
                {Categories.map((category, index) => (
                  <option value={index}>{category.join(" - ")}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="button is-primary" type="submit" value="Add" />
          </div>
        </div>
      </form>
    </div>
  );
};
