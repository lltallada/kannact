'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Note } from '@/app/types/note';

export function useNotesMutations() {
  const queryClient = useQueryClient();

  const addNote = useMutation({
    mutationFn: async (note: Note) => note,
    onSuccess: newNote => {
      queryClient.setQueryData<Note[]>(['patient-notes'], (oldNotes = []) => [
        newNote,
        ...oldNotes,
      ]);
    },
  });

  const updateNote = useMutation({
    mutationFn: async (note: Note) => note,
    onSuccess: updatedNote => {
      queryClient.setQueryData<Note[]>(['patient-notes'], (oldNotes = []) =>
        oldNotes.map(n => (n.id === updatedNote.id ? updatedNote : n))
      );
    },
  });

  const deleteNote = useMutation({
    mutationFn: async (id: string) => id,
    onSuccess: deletedId => {
      queryClient.setQueryData<Note[]>(['patient-notes'], (oldNotes = []) =>
        oldNotes.filter(n => n.id !== deletedId)
      );
    },
  });

  return { addNote, updateNote, deleteNote };
}
