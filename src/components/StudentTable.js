import React from 'react';
import { Table } from 'react-bootstrap';

const StudentTable = ({ students }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Date of Birth</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{new Date(student.dob).toLocaleDateString()}</td>
              <td>{student.course}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No students found
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default StudentTable;
