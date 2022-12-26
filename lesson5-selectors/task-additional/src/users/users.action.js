export const FILTER = 'USERS/FILTER';

export const filter = filterText => {
  return {
    type: FILTER,
    payload: { filterText },
  };
};
