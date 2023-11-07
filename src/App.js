import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SubjectButtons from './components/SubjectButtons';
import SubjectTable from './components/SubjectTable';
import StudentTable from './components/StudentTable';
import WeekFilterButtons from './components/WeekFilterButtons';
import WeekFilterTable from './components/WeekFillterTable';



function App() {
  return (
    <Router>
      <div>
        <SubjectButtons />
        <WeekFilterButtons />
        <Switch>
          <Route path="/subject/:subject/week/:week" component={WeekFilterTable} />
          <Route path="/subject/:subject" component={SubjectTable} />
        </Switch>
      <StudentTable />

      </div>
    </Router>
  );
}

export default App;
