import NoteCard from './NoteCard';

export default function NotesContainer({ notes, deleteNote, archiveNote }) {
  return (
    <div className="w-full border border-zinc-300 rounded p-8 space-y-4">
      <h1 className="text-lg font-bold">Notes</h1>
      
      {notes.length > 0 ? (
        <ul className="grid grid-cols-3 gap-8">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              archiveNote={archiveNote}
            />
          ))}
        </ul>
      ) : (
        <p className="text-zinc-400">No notes found.</p>
      )}
    </div>
  );
}
