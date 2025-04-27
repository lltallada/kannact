'use client';

import { useQuery } from '@tanstack/react-query';
import { Note } from '@/app/types/note';
import NoteForm from './NoteForm';
import { useNotesMutations } from '@/app/hooks/useNotesMutations';
import { useSelectedPatient } from '@/app/hooks/useSelectedPatient';
import { useState } from 'react';
import NotesListItems from './NoteListItems';
import Header from '@/app/components/layout/Header';
import Image from 'next/image';
import Container from '@/app/components/layout/Container';

export default function PatientNotes({
  initialNotes,
}: {
  initialNotes: Note[];
}) {
  const { data: notes = [] } = useQuery<Note[]>({
    queryKey: ['patient-notes'],
    queryFn: async () => initialNotes,
    initialData: initialNotes,
  });

  const { addNote, updateNote, deleteNote } = useNotesMutations();
  const selectedPatient = useSelectedPatient();

  const [form, setForm] = useState<Partial<Note>>({});
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (note: Note) => {
    setForm(note);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    deleteNote.mutate(id);
  };

  return (
    <>
      <Header title="Patient Notes" />
      <Container className="py-8">
        <div className="bg-primary p-4 rounded-t-xl pb-8 -mb-4">
          <div className="flex gap-4 items-center">
            <Image
              src="https://i.pravatar.cc/200"
              alt="Kannact"
              width={60}
              height={60}
              className="p-1 rounded-full bg-white"
            />
            <ul className="flex flex-col gap-1">
              <li>
                <span className="font-bold">{selectedPatient?.name}</span>,{' '}
                {selectedPatient?.age} years old
              </li>
              <li>{selectedPatient?.condition}</li>
            </ul>
          </div>
        </div>
        <div className="bg-primary250 p-4 rounded-t-xl pb-8 -mb-4">
          <NoteForm
            form={form}
            setForm={setForm}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            addNote={addNote}
            updateNote={updateNote}
          />
        </div>

        <NotesListItems
          notes={notes}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Container>
    </>
  );
}
