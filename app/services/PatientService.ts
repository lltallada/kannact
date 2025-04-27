import { Patient } from '@/app/types/patient';
import { Note } from '@/app/types/note';

export default class PatientService {
  static async getPatients(): Promise<Patient[] | undefined> {
    const url = 'https://dummyjson.com/c/b617-1438-474b-b8ad';

    try {
      const res = await fetch(url);

      if (!res.ok) {
        console.error(`Fetch failed with status: ${res.status}`);
        return undefined;
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        return data as Patient[];
      } else if (Array.isArray(data.patients)) {
        return data.patients as Patient[];
      } else {
        console.error('Unexpected data format:', data);
        return undefined;
      }
    } catch (err) {
      console.error('Error fetching patients:', err);
      return undefined;
    }
  }

  static async getPatientNotes(patientId: string): Promise<Note[] | undefined> {
    const url = `https://dummyjson.com/c/f473-e5c2-40e1-99ee`;

    console.log(patientId);
    console.log(url);

    try {
      const res = await fetch(url);

      if (!res.ok) {
        console.error(`Fetch failed with status: ${res.status}`);
        return undefined;
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        return data as Note[];
      } else if (Array.isArray(data.notes)) {
        return data.notes as Note[];
      } else {
        console.error('Unexpected data format:', data);
        return undefined;
      }
    } catch (err) {
      console.error('Error fetching patient notes:', err);
      return undefined;
    }
  }
}
