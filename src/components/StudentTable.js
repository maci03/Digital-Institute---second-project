import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function StudentTable() {
  const { subject } = useParams();
  const [marks, setMarks] = useState(Array(10).fill('')); // Assuming 10 students

  // Handle changes to the marks
  const handleMarkChange = (index, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks);
  };

  // Render the table with input fields for student marks
  return (
    <table>
      <caption>{subject} Marks</caption>
      <thead>
        <tr>
          <th>Student</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {marks.map((mark, index) => (
          <tr key={index}>
            <td>Student {index + 1}</td>
            <td>
              <input
                type="number"
                value={mark || ''}
                onChange={(e) => handleMarkChange(index, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
