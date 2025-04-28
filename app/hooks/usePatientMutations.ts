'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Patient } from '@/app/types/patient';

export function usePatientMutations() {
  const queryClient = useQueryClient();

  const addPatient = useMutation({
    mutationFn: (newPatient: Patient) => Promise.resolve(newPatient),
    onSuccess: newPatient => {
      queryClient.setQueryData<Patient[]>(['patients'], old => [
        newPatient,
        ...(old || []),
      ]);
    },
  });

  const updatePatient = useMutation({
    mutationFn: (updatedPatient: Patient) => Promise.resolve(updatedPatient),
    onSuccess: updatedPatient => {
      queryClient.setQueryData<Patient[]>(['patients'], old =>
        (old || []).map(patient =>
          patient.id === updatedPatient.id ? updatedPatient : patient
        )
      );
    },
  });

  const deletePatient = useMutation({
    mutationFn: (id: string) => Promise.resolve(id),
    onSuccess: id => {
      queryClient.setQueryData<Patient[]>(['patients'], old =>
        (old || []).filter(patient => patient.id !== id)
      );
    },
  });

  return { addPatient, updatePatient, deletePatient };
}
