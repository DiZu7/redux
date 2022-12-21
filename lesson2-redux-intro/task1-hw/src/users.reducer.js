const nextUserId = usersList => {
  const maxId = usersList.reduce((maxId, user) => Math.max(user.id, maxId), -1);
  return maxId + 1;
};

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/addUser':
      return {
        ...state,
        usersList: [...state.usersList, { id: action.payload.id, name: action.payload.name }],
      };
    case 'users/deleteUser':
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default usersReducer;
