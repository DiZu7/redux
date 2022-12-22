const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/addUser':
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
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
