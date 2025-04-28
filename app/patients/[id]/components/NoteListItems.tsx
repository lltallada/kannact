import Button from '@/app/components/ui/Button';
import { Note } from '@/app/types/note';

export default function NotesListItems({
  notes,
  onEdit,
  onDelete,
}: {
  notes: Note[];
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <ul className="bg-white p-4 rounded-2xl">
      {notes.map(note => (
        <li
          key={note.id}
          className="flex flex-col gap-4 items-start odd:bg-gray-100 rounded-md group p-4"
        >
          <p>{note.note}</p>
          <div className="flex w-full justify-between">
            <p className="italic text-black/50 text-sm">
              {new Intl.DateTimeFormat('en-GB').format(new Date(note.lastEdit))}
            </p>
            <div className="flex gap-2">
              <Button style="edit" onClick={() => onEdit(note)}>
                Edit
              </Button>
              <Button style="delete" onClick={() => onDelete(note.id)}>
                Delete
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
