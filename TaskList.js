import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
