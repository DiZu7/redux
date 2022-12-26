import React from 'react';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store.js';
import UsersList from './users/UsersList';

const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;
