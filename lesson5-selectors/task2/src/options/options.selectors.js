import { createSelector } from 'reselect';
export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedIdsListSelector = state => {
  return state.options.selected;
};

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsListSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => selectedIds.includes(option.id));
  },
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsListSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => !selectedIds.includes(option.id));
  },
);