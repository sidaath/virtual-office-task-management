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

  const [cardArray, setCardArray] = useState([
    { id: 1, title: 'Card 1', body: 'desc 1', time: 12 },
    { id: 2, title: 'Card 2', body: 'desc 2', time: 12 },
    { id: 3, title: 'Card 3', body: 'desc 3 ', time: 12 },
  ]);

  function addTaskCard(card) {
    setCardArray([...cardArray, card]);
    alert('added task');
  }

  const employeeArray = [
    { id: 1, name: 'employee1', dept: 'dep 1' },
    { id: 2, name: 'employee2', dept: 'dep 1' },
    { id: 3, name: 'employee3', dept: 'dep 1' },
    { id: 4, name: 'employee4', dept: 'dep 2' },
    { id: 5, name: 'employee5', dept: 'dep 2' },
    { id: 6, name: 'employee6', dept: 'dep 2' },
    { id: 7, name: 'employee7', dept: 'dep 3' },
    { id: 8, name: 'employee8', dept: 'dep 3' },
    { id: 9, name: 'employee9', dept: 'dep 4' },
    { id: 10, name: 'employee10', dept: 'dep 4' },
    { id: 11, name: 'employee11', dept: 'dep 5' },
    { id: 12, name: 'employee12', dept: 'dep 5' },
    { id: 13, name: 'employee13', dept: 'dep 6' },
    { id: 14, name: 'employee14', dept: 'dep 6' },
    { id: 15, name: 'employee15', dept: 'dep 6' },
  ];

  useEffect(() => {}, [tasks, inspect, assign, reports, cardArray]);

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

  //clicking on + changes tab to assign.
  function handleAddTask() {
    setTasks(null);
    setInspect(null);
    setAssign(1);
    setReports(null);
  }

  return (
    <>
      <TabBar
        tasks={handleTasksClick}
        inspect={handleInspectClick}
        assign={handleAssignClick}
        reports={handleReportsClick}
      />
      {tasks && <MyTasks tasks={cardArray} addTask={handleAddTask} />}
      {inspect && <Inspect />}
      {assign && <Assign employees={employeeArray} addTask={addTaskCard} />}
      {reports && <Reports />}
    </>
  );
}

export default App;
