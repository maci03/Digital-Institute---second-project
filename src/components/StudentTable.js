import React, { useContext, useState } from "react";
import { StudentsContext } from "../store/studentsContext";

function StudentTable() {
  const [studentData, setStudentData] = useState([
    { name: "", surname: "" },
    { name: "", surname: "" },
  ]);

  const { activeSubject, activeWeek } = useContext(StudentsContext);

  console.log("activeSubject", activeSubject);
  console.log("activeWeek", activeWeek);

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const addStudentRow = () => {
    const newStudentData = [...studentData, { name: "", surname: "" }];
    setStudentData(newStudentData);
  };

  const updateStudentCell = (rowIndex, columnName, value) => {
    const newStudentData = [...studentData];
    newStudentData[rowIndex][columnName] = value;
    setStudentData(newStudentData);
  };

  return (
    <div>
      <h2>Student Information and Grades</h2>
      <table className="student-grades-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) =>
                    updateStudentCell(rowIndex, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.surname}
                  onChange={(e) =>
                    updateStudentCell(rowIndex, "surname", e.target.value)
                  }
                />
              </td>
              {daysOfWeek.map((day, dayIndex) => (
                <td key={dayIndex}>
                  <input
                    type="text"
                    value={studentData[rowIndex][day]}
                    onChange={(e) =>
                      updateStudentCell(rowIndex, day, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addStudentRow}>Add Student Row</button>
    </div>
  );
}

export default StudentTable;
