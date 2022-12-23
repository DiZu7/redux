import React from 'react';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store.js';
import TransferList from './options/TransferList';

const App = () => {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
};

export default App;
