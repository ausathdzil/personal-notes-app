import { Archive, Trash2 } from 'lucide-react';

export default function NoteCard({ note, deleteNote, archiveNote }) {
  const formattedDate = new Date(note.createdAt).toLocaleString();

  return (
    <li className="border border-zinc-300 rounded p-8 flex flex-col justify-between gap-4">
      <div>
        <h1 className="font-bold">{note.title}</h1>
        <p className="text-sm text-zinc-400">{formattedDate}</p>
        <p className="text-sm">{note.body}</p>
      </div>
      <div className="flex justify-end gap-4">
        <button
          title="Archive note"
          onClick={() => archiveNote(note.id)}
        >
          <Archive size={20} />
        </button>
        <button
          title="Delete note"
          onClick={() => deleteNote(note.id)}
        >
          <Trash2
            size={20}
            className="text-red-500"
          />
        </button>
      </div>
    </li>
  );
}
