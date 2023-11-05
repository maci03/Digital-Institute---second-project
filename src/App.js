import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SubjectButtons from './SubjectButtons';
import SubjectTable from './SubjectTable';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <Router>
      <div>
        <SubjectButtons />
        <Switch>
          <Route path="/subject/georgian" component={() => <SubjectTable subject="Georgian" />} />
          <Route path="/subject/math" component={() => <SubjectTable subject="Mathematics" />} />
          <Route path="/subject/english" component={() => <SubjectTable subject="English" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
