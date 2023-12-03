import React from "react";
import StudentTable from "./components/StudentTable";
import { ContextProvider } from "./store/studentsContext";
import WeekFilterButtons from "./components/WeekFilterButtons";
import SubjectButtons from "./components/SubjectButtons";

function App() {
  return (
    <ContextProvider>
      <SubjectButtons />
      <WeekFilterButtons />
      <StudentTable />
    </ContextProvider>
  );
}

export default App;
