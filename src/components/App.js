import { useState, useEffect } from 'react';
import '../css/app.css';
import TabBar from './TabBar';
import MyTasks from './MyTasks';
import Inspect from './Inspect';
import Assign from './Assign';
import Reports from './Reports';

function App() {
  //these variables are used to short circuit logic behind rendering each tab.
  //let tasks = null;
  // let inspect = 1;
  // let assign = null;
  // let reports = null;

  const [tasks, setTasks] = useState(1);
  const [inspect, setInspect] = useState(null);
  const [assign, setAssign] = useState(null);
  const [reports, setReports] = useState(null);

  useEffect(() => {}, [tasks, inspect, assign, reports]);

  //when you click on a button, one of these functions is used to set the 4 variables above.
  //used to render correct pane.
  function handleTasksClick() {
    setTasks(1);
    setInspect(null);
    setAssign(null);
    setReports(null);
  }

  function handleInspectClick() {
    setTasks(null);
    setInspect(1);
    setAssign(null);
    setReports(null);
  }

  function handleAssignClick() {
    setTasks(null);
    setInspect(null);
    setAssign(1);
    setReports(null);
  }

  function handleReportsClick() {
    setTasks(null);
    setInspect(null);
    setAssign(null);
    setReports(1);
  }

  return (
    <>
      <TabBar
        tasks={handleTasksClick}
        inspect={handleInspectClick}
        assign={handleAssignClick}
        reports={handleReportsClick}
      />
      {tasks && <MyTasks />}
      {inspect && <Inspect />}
      {assign && <Assign />}
      {reports && <Reports />}
    </>
  );
}

export default App;
