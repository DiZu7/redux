import React, { useEffect } from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import { connect } from 'react-redux';
import * as tasksActions from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';
import PropTypes from 'prop-types';


const TodoList = ({ tasks, getTasksList, createTask, deleteTask, updateTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput onCreate={createTask} />
        <TasksList
          tasks={tasks}
          handleTaskDelete={deleteTask}
          handleTaskStatusChange={updateTask}
        />
      </main>
    </>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTasksList: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

export default connect(mapState, mapDispatch)(TodoList);
