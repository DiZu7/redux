export const addUser = name => {
  return {
    type: 'users/addUser',
    payload: name,
  };
};

export const deleteUser = id => {
  return {
    type: 'users/deleteUser',
    payload: id,
  };
};