import Container from '../components/layout/Container';
import PatientService from '../services/PatientService';
import Patients from './components/Patients';

export default async function PatientsPage() {
  const initialPatients = await PatientService.getPatients();

  if (!initialPatients) {
    return <Container>No patients found</Container>;
  }

  return <Patients initialPatients={initialPatients} />;
}
