import * as tasksGateway from './tasks.gateway';
import { tasksListSelector } from './tasks.selectors';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecieved = tasksList => {
  return {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };
};

export const getTasksList = () => {
  return function (dispatch) {
    tasksGateway.fetchTasksList().then(tasksList => dispatch(tasksListRecieved(tasksList)));
  };
};

export const updateTask = taskId => {
  return function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };

    tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTasksList()));
  };
};

export const deleteTask = taskId => {
  return function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
};

export const createTask = text => {
  return function (dispatch) {
    const newTask = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };

    tasksGateway.createTask(newTask).then(() => dispatch(getTasksList()));
  };
};
