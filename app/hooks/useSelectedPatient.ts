'use client';

import { useQueryClient } from '@tanstack/react-query';
import { Patient } from '@/app/types/patient';

export function useSelectedPatient() {
  const queryClient = useQueryClient();
  const selectedPatient = queryClient.getQueryData<Patient>([
    'selected-patient',
  ]);

  return selectedPatient;
}
