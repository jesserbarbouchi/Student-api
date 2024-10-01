import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { name, surname, dob, course };
    onSubmit(studentData);
    setName('');
    setSurname('');
    setDob('');
    setCourse('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCourse">
        <Form.Label>Course</Form.Label>
        <Form.Control
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
};

export default StudentForm;
