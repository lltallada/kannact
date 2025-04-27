import { Patient, SubmitHandlerParams } from '@/app/types/patient';

export function handlePatientSubmit({
  form,
  isEditing,
  addPatient,
  updatePatient,
  resetForm,
}: SubmitHandlerParams) {
  if (isEditing && form.id != null) {
    updatePatient.mutate(form as Patient);
  } else {
    const newPatient: Patient = {
      id: crypto.randomUUID(),
      name: form.name!,
      age: form.age!,
      condition: form.condition!,
    };
    addPatient.mutate(newPatient);
  }

  resetForm();
}
