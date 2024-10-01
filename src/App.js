import React, { useState, useEffect } from 'react';
import { fetchStudents, submitStudent } from './api/apis';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const data = await fetchStudents();
      setStudents(data);
    } catch (error) {
      console.error('Failed to load students', error);
    }
  };

  const handleStudentSubmit = async (studentData) => {
    try {
      await submitStudent(studentData);
      alert('Student submitted successfully!');
      loadStudents(); // Refresh the student list after submission
    } catch (error) {
      console.error('Failed to submit student', error);
      alert('Failed to submit student. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Student Form</h1>
      <StudentForm onSubmit={handleStudentSubmit} />

      <h2 className="mt-5">Student List</h2>
      <StudentTable students={students} />
    </div>
  );
}

export default App;
