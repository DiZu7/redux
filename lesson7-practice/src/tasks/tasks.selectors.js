export const tasksListSelector = state => state.tasks.tasksList;

export const sortedTasksListSelector = state =>
  tasksListSelector(state)
    .slice()
    .sort((a, b) => a.done - b.done);
