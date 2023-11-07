import React from 'react';
import { Link } from 'react-router-dom';


function WeekFilterButtons() {
    return (
      <div id="week-filter-buttons" className="button-container-week">
        <Link to="/week/first" className="button">First Week</Link>
        <Link to="/week/second" className="button">Second Week</Link>
        <Link to="/week/third" className="button">Third Week</Link>
      </div>

      
    );
  }
  
  export default WeekFilterButtons;