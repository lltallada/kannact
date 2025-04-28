'use client';

import Button from '@/app/components/ui/Button';
import { Patient, PatientListItemsProps } from '@/app/types/patient';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import SearchBar from './SearchBar';

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

  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectAndGo = (patient: Patient) => {
    queryClient.setQueryData(['selected-patient'], patient);
    router.push(`/patients/${patient.id}`);
  };

  // 👇 Filter patients based on search
  const filteredPatients = useMemo(() => {
    if (!searchTerm.trim()) return initialPatients || [];
    return (initialPatients || []).filter(patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, initialPatients]);

  return (
    <div className="bg-white p-4 rounded-2xl">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <ul>
        {filteredPatients?.map((patient: Patient) => (
          <li
            key={patient.id}
            className="flex justify-between items-center odd:bg-gray-100 rounded-md"
          >
            <div
              onClick={() => handleSelectAndGo(patient)}
              className="p-4 w-full text-left group cursor-pointer"
            >
              <div className="group-hover:text-primary group-hover:translate-x-2 transition-transform ">
                <strong>{patient.name}</strong> ({patient.age} years old) -{' '}
                {patient.condition}
              </div>
            </div>
            <div className="flex gap-4 shrink-0 px-4">
              <Button onClick={() => onEdit(patient)} style="edit">
                Edit
              </Button>
              <Button onClick={() => onDelete(patient.id)} style="delete">
                Delete
              </Button>
            </div>
          </li>
        ))}

        {!patients && <li>No patients found</li>}
      </ul>
    </div>
  );
}
