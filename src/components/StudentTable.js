import React, { useContext } from "react";
import { StudentsContext } from "../store/studentsContext";
import StudentGradeByWeekDay from "./StudentGradeByWeekday";

function StudentTable() {
  const { activeSubject, activeWeek, students } = useContext(StudentsContext);

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

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
          {students.map((student) => {
            const week = student.performance[activeSubject][activeWeek];
            return (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.lastname}</td>
                {Object.entries(week).map((day) => (
                  <StudentGradeByWeekDay
                    key={day[0]}
                    day={day}
                    studentId={student.id}
                  />
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="button" onClick={() => {}}>
        Add Student Row
      </button>
    </div>
  );
}

export default StudentTable;
