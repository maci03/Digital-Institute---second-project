import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";



function SubjectButtons() {
  return (
    <div id="buttons" className="button-container">
      <Link to="/subject/georgian/week/first" className="button">ქართული</Link>
      <Link to="/subject/math" className="button">მათემატიკა</Link>
      <Link to="/subject/english" className="button">ინგლისური</Link>
    </div>
  );
}

export default SubjectButtons;
