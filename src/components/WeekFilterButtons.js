import React, { useContext } from "react";
import { StudentsContext } from "../store/studentsContext";
import { WEEK_ONE, WEEK_THREE, WEEK_TWO } from "../constants/constants";

const WEEKS = [
  {
    title: "პირველი კვირა",
    value: WEEK_ONE,
  },
  {
    title: "მეორე კვირა",
    value: WEEK_TWO,
  },
  {
    title: "მესამე კვირა",
    value: WEEK_THREE,
  },
];

function WeekFilterButtons() {
  const { setActiveWeek } = useContext(StudentsContext);

  return (
    <div id="week-filter-buttons" className="button-container-week">
      {WEEKS.map((week) => (
        <div className="button" onClick={() => setActiveWeek(week.value)}>
          {week.title}
        </div>
      ))}
    </div>
  );
}

export default WeekFilterButtons;
