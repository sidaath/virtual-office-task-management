import React from 'react';
import TaskCardMini from './TaskCardMini';

export default function MyTasks(props) {
  const cardArray = [...props.tasks];
  const addTask = props.addTask;

  //button + doesnt do anything yet.

  return (
    <div className='my-tasks'>
      <div className='my-tasks-overview'>
        <span>Overview</span>
        <div>
          {cardArray.map((card) => {
            return <TaskCardMini key={card.id} {...card} />;
          })}
        </div>
        <button onClick={addTask} className='my-tasks-overview_add-task'>
          +
        </button>
      </div>

      <div className='my-tasks-item_detail'>Item Detail</div>

      <div className='my-tasks-related_info'>Related Info</div>
    </div>
  );

  // return (
  //   <div className='my-tasks'>
  //     <div className='my-tasks-overview'>
  //       <span>Overview</span>
  //       <div>
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //         <TaskCardMini />
  //       </div>
  //     </div>
  //     <div className='my-tasks-item_detail'>Item Detail</div>
  //     <div className='my-tasks-related_info'>Related Info</div>
  //   </div>
  // );
}
