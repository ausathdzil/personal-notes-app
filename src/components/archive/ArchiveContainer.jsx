import ArchiveCard from './ArchiveCard';

export default function ArchiveContainer({
  archive,
  deleteNote,
  removeArchive,
}) {
  return (
    <div className="w-full border border-zinc-300 rounded p-8 space-y-4">
      <h1 className="text-lg font-bold">Archive</h1>
      {archive.length > 0 ? (
        <ul className="grid grid-cols-3 gap-8">
          {archive.map((note) => (
            <ArchiveCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              removeArchive={removeArchive}
            />
          ))}
        </ul>
      ) : (
        <p className="text-zinc-400">No archived notes found.</p>
      )}
    </div>
  );
}
