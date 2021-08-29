import React, { useState } from 'react';
import EmployeeCardMini from './EmployeeCardMini';
import { v4 as uuidv4 } from 'uuid';

export default function Assign(props) {
  const employeeArray = [...props.employees];
  const addTask = props.addTask;

  const [title, setTile] = useState('');
  const [body, setBody] = useState('');

  function handleNewTask(name, desc) {
    if (name === '') {
      alert('Task Title cannot be empty');
      return;
    }

    if (desc === '') {
      alert('Task Description cannot be empty');
      return;
    }
    const newTask = {
      id: uuidv4(),
      title: name,
      body: desc,
      time: 17,
    };

    addTask(newTask);
  }

  return (
    <div className='assign'>
      <div className='assign-employees'>
        <span>Employees</span>

        <div>
          {employeeArray.map((employee) => {
            return <EmployeeCardMini key={employee.id} employee={employee} />;
          })}
        </div>
      </div>

      <div className='assign-details'>
        <div className='assign-details_header'>
          <span className='assign-details_header-title'>Details</span>
          <button className='assign-details_header-add_button'>+</button>
        </div>

        <div className='assign-new-task'>
          <div className='assign-new-task-title-div'>
            <label htmlFor='title'>Task Title</label>
          </div>

          <div className='assign-new-task-input-div'>
            <input
              className='assign-new-task_title-input'
              type='text'
              id='title'
              name='title'
              onChange={(e) => {
                setTile(e.target.value);
              }}
            />
          </div>

          <div className='assign-new-task-description-div'>
            <label htmlFor='title'>Task Description</label>
          </div>

          <div className='assign-new-task-description-input-div'>
            <textarea
              className='assign-new-task_description-input'
              type='text'
              id='title'
              name='title'
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>

          <button
            onClick={() => handleNewTask(title, body)}
            className='assign-new-task-add-button'
          >
            Assign
          </button>
        </div>
      </div>

      <div className='assign-drafts'>Drafts</div>
    </div>
  );
}
