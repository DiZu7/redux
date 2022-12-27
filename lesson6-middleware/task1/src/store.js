import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './counter.reducer';

const reducer = combineReducers({
  counter: counterReducer,
});

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
};

const store = createStore(
  reducer,
  applyMiddleware(logger),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
