import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text: taskText } });
      setTaskText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
