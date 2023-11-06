import React from 'react';
import { Link } from 'react-router-dom';




function SubjectButtons() {
  return (
    <div id="buttons">
      <Link to="/subject/georgian">Georgian</Link>
      <Link to="/subject/math">Mathematics</Link>
      <Link to="/subject/english">English</Link>
    </div>
  );
}

export default SubjectButtons;
