export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedOptionsSelector = state => {
  const allOptionsList = optionsListSelector(state);
  const selectedIds = state.options.selected;

  return allOptionsList.filter(option => selectedIds.includes(option.id));
};

export const availableOptionsSelector = state => {
  const allOptionsList = optionsListSelector(state);
  const selectedIds = state.options.selected;

  return allOptionsList.filter(option => !selectedIds.includes(option.id));
};
