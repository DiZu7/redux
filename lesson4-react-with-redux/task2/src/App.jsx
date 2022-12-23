import React from 'react';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store.js';
import Users from './users/Users';

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};

export default App;
