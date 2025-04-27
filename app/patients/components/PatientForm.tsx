'use client';

import { PatientFormProps } from '@/app/types/patient';

export default function PatientForm({
  form,
  setForm,
  onSubmit,
  isEditing,
}: PatientFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-4">
      <input
        type="text"
        placeholder="Name"
        value={form.name || ''}
        onChange={e => setForm({ ...form, name: e.target.value })}
        className="py-2 px-4 bg-white rounded-lg"
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={form.age || ''}
        onChange={e => setForm({ ...form, age: Number(e.target.value) })}
        className="py-2 px-4 bg-white rounded-lg"
        required
      />
      <input
        type="text"
        placeholder="Condition"
        value={form.condition || ''}
        onChange={e => setForm({ ...form, condition: e.target.value })}
        className="py-2 px-4 bg-white rounded-lg"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded m-1">
        {isEditing ? 'Update Patient' : 'Add Patient'}
      </button>
    </form>
  );
}
