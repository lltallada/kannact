'use client';

import { Patient, PatientListItemsProps } from '@/app/types/patient';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function PatientListItems({
  initialPatients,
  onEdit,
  onDelete,
}: PatientListItemsProps) {
  const { data: patients } = useQuery<Patient[]>({
    queryKey: ['patients'],
    queryFn: () => Promise.resolve(initialPatients),
    placeholderData: initialPatients,
  });

  const queryClient = useQueryClient();
  const router = useRouter();

  const handleSelectAndGo = (patient: Patient) => {
    queryClient.setQueryData(['selected-patient'], patient);
    router.push(`/patients/${patient.id}`);
  };

  return (
    <ul className="bg-white p-4 rounded-2xl">
      {patients?.map(patient => (
        <li
          key={patient.id}
          className="flex justify-between items-center odd:bg-gray-100 rounded-md group"
        >
          <button
            onClick={() => handleSelectAndGo(patient)}
            className="p-4 w-full text-left group cursor-pointer"
          >
            <div className="group-hover:text-primary group-hover:translate-x-2 transition-transform ">
              <strong>{patient.name}</strong> ({patient.age} years old) -{' '}
              {patient.condition}
            </div>
          </button>
          <div className="flex gap-4 shrink-0 px-4">
            <button onClick={() => onEdit(patient)} className="bg-yellow-400">
              Edit
            </button>
            <button
              onClick={() => onDelete(patient.id)}
              className="bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </li>
      ))}

      {!patients && <li>No patients found</li>}
    </ul>
  );
}
