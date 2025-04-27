'use client';

import { useState } from 'react';
import { Patient } from '@/app/types/patient';
import { usePatientMutations } from '@/app/hooks/usePatientMutations';
import PatientForm from './PatientForm';
import { handlePatientSubmit } from '../helpers/patientHandlers';
import PatientListItems from './PatientsList';
import Header from '@/app/components/layout/Header';
import Container from '@/app/components/layout/Container';

export default function Patients({
  initialPatients,
}: {
  initialPatients: Patient[];
}) {
  const { addPatient, updatePatient, deletePatient } = usePatientMutations();

  const [form, setForm] = useState<Partial<Patient>>({});
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePatientSubmit({
      form,
      isEditing,
      addPatient,
      updatePatient,
      resetForm: () => {
        setForm({});
        setIsEditing(false);
      },
    });
  };

  const startEdit = (patient: Patient) => {
    setForm(patient);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    deletePatient.mutate(id);
  };

  return (
    <>
      <Header title="Patients List" />
      <Container className="py-8">
        <div className="bg-primary/25 p-4 rounded-t-xl pb-8 -mb-4">
          <PatientForm
            form={form}
            setForm={setForm}
            onSubmit={handleSubmit}
            isEditing={isEditing}
          />
        </div>
        <PatientListItems
          initialPatients={initialPatients || []}
          onEdit={startEdit}
          onDelete={handleDelete}
        />
      </Container>
    </>
  );
}
