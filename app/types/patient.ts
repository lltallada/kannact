import { UseMutationResult } from '@tanstack/react-query';

export type Patient = {
  id: string;
  name: string;
  age: number;
  condition: string;
};

export type PatientFormProps = {
  form: Partial<Patient>;
  setForm: (form: Partial<Patient>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isEditing: boolean;
};

export type SubmitHandlerParams = {
  form: Partial<Patient>;
  isEditing: boolean;
  addPatient: UseMutationResult<Patient, unknown, Patient>;
  updatePatient: UseMutationResult<Patient, unknown, Patient>;
  resetForm: () => void;
};

export type PatientListItemsProps = {
  initialPatients: Patient[];
  onEdit: (patient: Patient) => void;
  onDelete: (id: string) => void;
};
