import { createContext, useState } from "react";
import { GEORGIAN, WEEK_ONE } from "../constants/constants";
import { createEmptyStudent } from "../utils/createEmptyStudent";

export const StudentsContext = createContext({});

const DUMMY_DATA = [
  {
    id: 1,
    name: "John",
    lastname: "Doe",
    performance: {
      math: {
        week1: {
          Monday: 80,
          Tuesday: 75,
          Wednesday: 90,
          Thursday: 85,
          Friday: 88,
        },
        week2: {
          Monday: 85,
          Tuesday: 78,
          Wednesday: 92,
          Thursday: 89,
          Friday: 91,
        },
        week3: {
          Monday: 88,
          Tuesday: 82,
          Wednesday: 95,
          Thursday: 90,
          Friday: 93,
        },
      },
      georgian: {
        week1: {
          Monday: 70,
          Tuesday: 68,
          Wednesday: 72,
          Thursday: 75,
          Friday: 74,
        },
        week2: {
          Monday: 75,
          Tuesday: 72,
          Wednesday: 78,
          Thursday: 80,
          Friday: 79,
        },
        week3: {
          Monday: 78,
          Tuesday: 76,
          Wednesday: 82,
          Thursday: 85,
          Friday: 84,
        },
      },
      english: {
        week1: {
          Monday: 85,
          Tuesday: 82,
          Wednesday: 88,
          Thursday: 90,
          Friday: 87,
        },
        week2: {
          Monday: 88,
          Tuesday: 85,
          Wednesday: 92,
          Thursday: 94,
          Friday: 91,
        },
        week3: {
          Monday: 90,
          Tuesday: 88,
          Wednesday: 94,
          Thursday: 96,
          Friday: 93,
        },
      },
    },
  },
];

export const ContextProvider = ({ children }) => {
  const [activeSubject, setActiveSubject] = useState(() => GEORGIAN);
  const [activeWeek, setActiveWeek] = useState(() => WEEK_ONE);
  const [students, setStudents] = useState(() => DUMMY_DATA);

  function updateGrade(studentId, day, grade) {
    const clonedStudents = [...students];

    const studentIndex = clonedStudents.findIndex(
      (student) => student.id === studentId
    );

    if (studentIndex === -1) {
      return;
    }

    const student = { ...clonedStudents[studentIndex] };

    student.performance[activeSubject][activeWeek][day] = grade;

    setStudents([
      ...clonedStudents.slice(0, studentIndex),
      student,
      ...clonedStudents.slice(studentIndex + 1),
    ]);
  }

  function createStudent(name, surname) {
    const newStudent = createEmptyStudent(name, surname);

    newStudent.id = students.length + 1;

    setStudents([...students, newStudent]);
  }

  const contextValue = {
    students,
    setStudents,
    activeSubject,
    setActiveSubject,
    activeWeek,
    setActiveWeek,
    updateGrade,
    createStudent,
  };

  return (
    <StudentsContext.Provider value={contextValue}>
      {children}
    </StudentsContext.Provider>
  );
};
