import { useContext, useEffect, useState } from "react";
import { StudentsContext } from "../store/studentsContext";

function StudentGradeByWeekDay({ day, studentId }) {
  const dayGrade = day[1];
  const [showForm, setShowForm] = useState(false);
  const [studentGrade, setStudentGrade] = useState(() => dayGrade);

  const { updateGrade, activeSubject, activeWeek } =
    useContext(StudentsContext);

  function handleSubmit(e) {
    e.preventDefault();
    updateGrade(studentId, day[0], studentGrade);
    setShowForm(false);
  }

  useEffect(() => {
    setStudentGrade(dayGrade);
    setShowForm(false);
  }, [activeSubject, activeWeek]);

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={studentGrade}
        onChange={(e) => setStudentGrade(e.target.value)}
      />
      <button type="submit">განახლება</button>
    </form>
  );

  return (
    <td>
      {showForm ? (
        form
      ) : (
        <div onClick={() => setShowForm(true)}>{dayGrade}</div>
      )}
    </td>
  );
}

export default StudentGradeByWeekDay;
