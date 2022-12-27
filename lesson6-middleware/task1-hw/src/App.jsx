import React from 'react';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store.js';
import Weather from './weather/Weather';

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};

export default App;
