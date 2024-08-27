import React from 'react';
import { StudentGridProps } from '../interface';

const StudentGrid:React.FC<StudentGridProps> = ({students}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-10 gap-4 text-center font-bold mb-4">
        <div>Name</div>
        <div>Age</div>
        <div>Grade</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Address</div>
        <div>City</div>
        <div>State</div>
        <div>Zip</div>
        <div>ID</div>
      </div>
      {students.map(student => (
        <div key={student.id} className="grid grid-cols-10 gap-4 text-center mb-2 border-b">
          <div>{student.name}</div>
          <div>{student.age}</div>
          <div>{student.grade}</div>
          <div>{student.email}</div>
          <div>{student.phone}</div>
          <div>{student.address}</div>
          <div>{student.city}</div>
          <div>{student.state}</div>
          <div>{student.zip}</div>
          <div>{student.id}</div>
        </div>
      ))}
    </div>
  );
}

export default StudentGrid;
