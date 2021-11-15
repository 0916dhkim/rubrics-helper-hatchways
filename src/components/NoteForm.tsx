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
    <form onSubmit={handleSubmit}>
      <label>
        Private Note
        <input
          name="private-note"
          value={privateNote}
          onChange={(e) => {
            setPrivateNote(e.target.value);
          }}
        />
      </label>
      <label>
        Public Note
        <input
          name="public-note"
          value={publicNote}
          onChange={(e) => {
            setPublicNote(e.target.value);
          }}
        />
      </label>
      <label>
        Link
        <input
          name="link"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
      </label>
      <label>
        Category
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
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};
