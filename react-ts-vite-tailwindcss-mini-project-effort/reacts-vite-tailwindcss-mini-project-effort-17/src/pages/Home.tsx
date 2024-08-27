import React from 'react';
import Banner from '../layout/Banner';
import StudentGrid from '../components/StudentGrid';
import { students } from '../constants/studentData';
import StudentTile from '../components/StudentTile';

const Home:React.FC = () => {

  const handleEdit = (id: number) => {
    console.log(`Edit student with ID ${id}`);
    // Implement edit functionality here
  };

  const handleFlag = (id: number) => {
    console.log(`Flag student with ID ${id}`);
    // Implement flag functionality here
  };

  const handleDelete = (id: number) => {
    console.log(`Delete student with ID ${id}`);
    // Implement delete functionality here
  };
  return (
    <div className='content'>
      <Banner title='Home' desc='Sunt amet ea ut ut eu fugiat reprehenderit.'/>
      <h1 className="text-2xl font-bold text-center my-4">Student Directory</h1>
      <StudentGrid students={students} />

      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center my-4">Student Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {students.map(student => (
          <StudentTile
            key={student.id}
            student={student}
            onEdit={handleEdit}
            onFlag={handleFlag}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
