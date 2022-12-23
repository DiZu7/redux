import { ADD_USER, DELETE_USER } from './users.action';

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    }

    case DELETE_USER: {
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.userId),
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
