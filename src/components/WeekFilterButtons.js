import React from 'react';
import { Link } from 'react-router-dom';


function WeekFilterButtons() {
    return (
      <div id="week-filter-buttons">
        <Link to="/week/first">First Week</Link>
        <Link to="/week/second">Second Week</Link>
        <Link to="/week/third">Third Week</Link>
      </div>
    );
  }
  
  export default WeekFilterButtons;