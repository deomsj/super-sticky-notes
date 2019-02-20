import React from 'react';
import Note from './Note';

const Notes = ({ notes, onType, remove, move }) => (
  <main>
    {notes.map((note, index) => (
      <Note
        note={note}
        index={index}
        key={note.id}
        onType={onType}
        remove={remove}
        move={move}
      />
    ))}
  </main>
);

export default Notes;
