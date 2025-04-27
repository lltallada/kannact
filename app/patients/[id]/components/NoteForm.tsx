'use client';

import { Note } from '@/app/types/note';
import { UseMutationResult } from '@tanstack/react-query';

export default function NoteForm({
  form,
  setForm,
  isEditing,
  setIsEditing,
  addNote,
  updateNote,
}: {
  form: Partial<Note>;
  setForm: (form: Partial<Note>) => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  addNote: UseMutationResult<Note, unknown, Note>;
  updateNote: UseMutationResult<Note, unknown, Note>;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const note: Note = {
      id: form.id || crypto.randomUUID(),
      creationDate: form.creationDate || new Date().toISOString(),
      lastEdit: new Date().toISOString(),
      note: form.note || '',
    };

    if (isEditing) {
      updateNote.mutate(note);
    } else {
      addNote.mutate(note);
    }

    setForm({});
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="rounded-lg p-2 w-full bg-white"
        placeholder="Write a note..."
        value={form.note || ''}
        onChange={e => setForm({ ...form, note: e.target.value })}
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
        {isEditing ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
}
