import { useEffect, useState } from 'react';
import ArchiveContainer from './components/archive/ArchiveContainer';
import AddNoteForm from './components/form/AddNoteForm';
import NotesContainer from './components/notes/NotesContainer';
import { notes as initialData } from './lib/data';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [archive, setArchive] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setNotes(initialData);
    setArchive(initialData.filter((note) => note.archived));
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(query.toLowerCase());
  });

  const filteredArchive = archive.filter((archive) => {
    return archive.title.toLowerCase().includes(query.toLowerCase());
  });

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
    setArchive(archive.filter((note) => note.id !== id));
  }

  function archiveNote(id) {
    let note = notes.find((note) => note.id === id);
    note = { ...note, archived: true };

    deleteNote(id);
    setArchive([...archive, note]);
  }

  function removeArchive(id) {
    const updatedArchive = archive.filter((note) => note.id !== id);

    setNotes([...notes, archive.find((note) => note.id === id)]);
    setArchive(updatedArchive);
  }

  return (
    <main className="flex flex-col justify-center items-center gap-4 max-w-5xl mx-auto p-8">
      <AddNoteForm addNote={addNote} />
      <h1 className="text-lg font-bold">My Personal Notes</h1>
      <input
        className="w-full px-4 py-2 border border-zinc-300 rounded"
        type="text"
        placeholder="Search notes..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <NotesContainer
        notes={filteredNotes}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
      <ArchiveContainer
        archive={filteredArchive}
        deleteNote={deleteNote}
        removeArchive={removeArchive}
      />
    </main>
  );
}
