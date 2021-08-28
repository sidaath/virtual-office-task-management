//this component has the 4 tabs that show on top of task management.

import React from 'react';

export default function TabBar(props) {
  const { tasks, inspect, assign, reports } = props;

  return (
    <div className='task-navigation-div'>
      <button onClick={tasks} className='task-nav-btn'>
        My Tasks
      </button>
      <button onClick={inspect} className='task-nav-btn'>
        Inspect
      </button>
      <button onClick={assign} className='task-nav-btn'>
        Assign
      </button>
      <button onClick={reports} className='task-nav-btn'>
        Reports
      </button>
    </div>
  );
}
