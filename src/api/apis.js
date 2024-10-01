import axios from 'axios';

const API_URL = 'https://api.barcelos.dev/lasalle-student/';

// Fetch all students
export const fetchStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.students;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// Submit a new student
export const submitStudent = async (studentData) => {
  try {
    await axios.post(API_URL, studentData);
  } catch (error) {
    console.error('Error submitting student:', error);
    throw error;
  }
};
