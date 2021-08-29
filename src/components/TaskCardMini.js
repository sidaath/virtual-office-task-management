import React from 'react';

export default function TaskCardMini(props) {
  const { title, body, time } = props;
  return (
    <div className='task-card-mini'>
      <div className='task-card-mini-header'>
        <div className='task-card-mini-title'>{title}</div>
        <div className='task-card-mini-time'>{time}</div>
      </div>
      <div className='task-card-mini-body'>
        <span>{body}</span>
      </div>
    </div>
  );
}
