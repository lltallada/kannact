import PatientService from '@/app/services/PatientService';
import PatientNotes from './components/PatientNotes';

export default async function PatientDetailPage() {
  const initialNotes = await PatientService.getPatientNotes('test');

  if (!initialNotes) {
    return <div>No notes found</div>;
  }

  return <PatientNotes initialNotes={initialNotes} />;
}
