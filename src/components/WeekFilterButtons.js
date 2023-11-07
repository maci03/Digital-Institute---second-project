import React from 'react';
import { Link } from 'react-router-dom';


function WeekFilterButtons() {
    return (
      <div id="week-filter-buttons" className="button-container-week">
        <Link to="/week/first" className="button">პირველი კვირა</Link>
        <Link to="/week/second" className="button">მეორე კვირა</Link>
        <Link to="/week/third" className="button">მესამე კვირა</Link>
      </div>

      
    );
  }
  
  export default WeekFilterButtons;