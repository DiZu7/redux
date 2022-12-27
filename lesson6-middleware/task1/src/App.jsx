import React from 'react';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store.js';
import Counter from './Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
