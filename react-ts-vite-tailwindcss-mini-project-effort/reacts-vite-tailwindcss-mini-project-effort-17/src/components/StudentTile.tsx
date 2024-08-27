import { StudentTileProps } from "../interface";

const StudentTile: React.FC<StudentTileProps> = ({ student, onEdit, onFlag, onDelete }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md bg-white">
        <h2 className="text-xl font-bold mb-2">{student.name}</h2>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Grade:</strong> {student.grade}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => onEdit(student.id)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => onFlag(student.id)}
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          >
            Flag
          </button>
          <button
            onClick={() => onDelete(student.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default StudentTile;