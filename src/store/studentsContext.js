import { createContext, useState } from "react";
import { GEORGIAN, WEEK_ONE } from "../constants/constants";

export const StudentsContext = createContext({});

const DUMMY_DATA = [
  {
    id: 1,
    name: "John",
    lastname: "Doe",
    performance: {
      math: {
        week1: {
          monday: 80,
          tuesday: 75,
          wednesday: 90,
          thursday: 85,
          friday: 88,
        },
        week2: {
          monday: 85,
          tuesday: 78,
          wednesday: 92,
          thursday: 89,
          friday: 91,
        },
        week3: {
          monday: 88,
          tuesday: 82,
          wednesday: 95,
          thursday: 90,
          friday: 93,
        },
      },
      georgian: {
        week1: {
          monday: 70,
          tuesday: 68,
          wednesday: 72,
          thursday: 75,
          friday: 74,
        },
        week2: {
          monday: 75,
          tuesday: 72,
          wednesday: 78,
          thursday: 80,
          friday: 79,
        },
        week3: {
          monday: 78,
          tuesday: 76,
          wednesday: 82,
          thursday: 85,
          friday: 84,
        },
      },
      english: {
        week1: {
          monday: 85,
          tuesday: 82,
          wednesday: 88,
          thursday: 90,
          friday: 87,
        },
        week2: {
          monday: 88,
          tuesday: 85,
          wednesday: 92,
          thursday: 94,
          friday: 91,
        },
        week3: {
          monday: 90,
          tuesday: 88,
          wednesday: 94,
          thursday: 96,
          friday: 93,
        },
      },
    },
  },
];

export const ContextProvider = ({ children }) => {
  const [activeSubject, setActiveSubject] = useState(() => GEORGIAN);
  const [activeWeek, setActiveWeek] = useState(() => WEEK_ONE);
  const [students, setStudents] = useState(() => DUMMY_DATA);

  const contextValue = {
    students,
    setStudents,
    activeSubject,
    setActiveSubject,
    activeWeek,
    setActiveWeek,
  };

  return (
    <StudentsContext.Provider value={contextValue}>
      {children}
    </StudentsContext.Provider>
  );
};
