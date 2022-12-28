import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete }) => {
  return (
    <ul className="list">
      {tasks.map(task => (
        <Task
          key={task.id}
          {...task}
          onChange={handleTaskStatusChange}
          onDelete={handleTaskDelete}
        />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  handleTaskStatusChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};

export default TasksList;
