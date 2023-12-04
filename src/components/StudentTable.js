import React, { useContext, useState } from "react";
import { StudentsContext } from "../store/studentsContext";
import StudentGradeByWeekDay from "./StudentGradeByWeekday";
import AddNewStudentForm from "./AddNewStudentForm";

function StudentTable() {
  const { activeSubject, activeWeek, students } = useContext(StudentsContext);
  const [addStudentModalOpen, setAddStudentModalOpen] = useState(false);

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const handleCloseModal = () => setAddStudentModalOpen(false);

  return (
    <div>
      <h2>Student Information and Grades</h2>
      <table className="student-grades-table">
        <thead>
          <tr>
            <th>სახელი</th>
            <th>გვარი</th>
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
      <button
        disabled={addStudentModalOpen}
        type="button"
        onClick={() => setAddStudentModalOpen(true)}
      >
        დაამატე სტუდენტი
      </button>
      {addStudentModalOpen ? (
        <AddNewStudentForm onClose={handleCloseModal} />
      ) : null}
    </div>
  );
}

export default StudentTable;
