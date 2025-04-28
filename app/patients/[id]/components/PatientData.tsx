import Image from 'next/image';
import { useSelectedPatient } from '@/app/hooks/useSelectedPatient';

const PatientData = () => {
  const selectedPatient = useSelectedPatient();

  return (
    <div className="bg-primary500 p-4 rounded-t-xl pb-8 -mb-4">
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
  );
};

export default PatientData;
