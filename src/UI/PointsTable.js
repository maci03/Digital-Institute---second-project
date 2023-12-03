import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DATA } from "../utils/config";

function PointsTable() {
  const [params] = useSearchParams();
  const subject = params.get("subject");
  const week = params.get("week");

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const correctSubject =
    subject && ["georgian", "english", "math"].includes(subject);

  const correctWeek = week && ["1", "2", "3"].includes(week);

  const weekData =
    correctSubject && correctWeek ? DATA[week][subject]["studentPoints"] : [];

  return (
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
        {weekData.map((student) => (
          <tr key={rowIndex}>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            {student.points.map((point, idx) => (
              <td key={dayIndex}>
                <input
                  type="text"
                  value={point}
                  //   onChange={(e) =>
                  //     updateStudentCell(rowIndex, day, e.target.value)
                  //   }
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PointsTable;
