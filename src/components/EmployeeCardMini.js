import React from 'react';

export default function EmployeeCardMini(props) {
  const employee = props.employee;

  return (
    <div className='employee-card-mini'>
      <div>{employee.name}</div>
      <div>{employee.dept}</div>
    </div>
  );
}
