export const addUser = userData => {
  return {
    type: 'users/addUser',
    payload: {
      userData,
    },
  };
};

export const deleteUser = id => {
  return {
    type: 'users/deleteUser',
    payload: { id },
  };
};
