import { useState } from 'react';

export default function AddNoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const maxTitleLength = 50;

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const id = formData.get('id');
    const title = formData.get('title');
    const body = formData.get('body');
    const createdAt = formData.get('createdAt');
    const archived = formData.get('archived');

    const note = {
      id,
      title,
      body,
      createdAt,
      archived,
    };

    addNote(note);
    setTitle('');
  }

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    if (newTitle.length <= maxTitleLength) {
      setTitle(newTitle);
    }
  }

  const remainingChars = maxTitleLength - title.length;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/3 space-y-4"
    >
      <input
        type="hidden"
        name="id"
        value={new Date().toISOString()}
      />
      <input
        className="w-full px-4 py-2 border border-zinc-300 rounded"
        type="text"
        name="title"
        placeholder="Title"
        required
        value={title}
        onChange={handleTitleChange}
      />
      <span
        className={`text-sm ${
          remainingChars <= 10 ? 'text-red-500' : 'text-zinc-400'
        }`}
      >
        {remainingChars} characters left
      </span>
      <textarea
        className="w-full px-4 py-2 border border-zinc-300 rounded"
        name="body"
        placeholder="Body"
        required
      ></textarea>
      <input
        type="hidden"
        name="createdAt"
        value={new Date()}
      />
      <input
        type="hidden"
        name="archived"
        value={false}
      />
      <button
        className="w-full px-4 py-2 bg-zinc-950 text-zinc-50 rounded"
        type="submit"
      >
        Create Note
      </button>
    </form>
  );
}
