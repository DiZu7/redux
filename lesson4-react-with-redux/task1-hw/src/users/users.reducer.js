import { GO_NEXT, GO_PREV } from './users.action';
import users from './users';

const initialState = {
  usersList: users,
  currentPage: 0,
};

// const getPaginatedData = (data, state) => {
//   const startIndex = state.currentPage * 3 - 3;
//   const endIndex = startIndex + 3;
//   return data.slice(startIndex, endIndex);
// };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_NEXT: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }

    case GO_PREV: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
    default:
      return {
        ...state,
        currentPage: 1,
      };
  }
};

export default usersReducer;
