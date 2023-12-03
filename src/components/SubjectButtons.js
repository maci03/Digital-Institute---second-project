import React, { useContext } from "react";
import "../App.css";
import { StudentsContext } from "../store/studentsContext";
import { ENGLISH, GEORGIAN, MATH, WEEK_ONE } from "../constants/constants";

const SUBJECTS = [
  {
    title: "ქართული",
    value: GEORGIAN,
  },
  {
    title: "მათემატიკა",
    value: MATH,
  },
  {
    title: "ინგლისური",
    value: ENGLISH,
  },
];

function SubjectButtons() {
  const { setActiveSubject, setActiveWeek } = useContext(StudentsContext);

  return (
    <div id="buttons" className="button-container">
      {SUBJECTS.map((subject) => (
        <div
          key={subject.value}
          className="button"
          onClick={() => {
            setActiveSubject(subject.value);
            setActiveWeek(WEEK_ONE);
          }}
        >
          {subject.title}
        </div>
      ))}
    </div>
  );
}

export default SubjectButtons;
