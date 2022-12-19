import React from 'react';
import { UserContext } from './context';
import Header from './Header';
import './index.scss';

class App extends React.Component {
  state = {
    userData: {
      name: 'Nicola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state.userData}>
        <Header />
      </UserContext.Provider>
    );
  }
}

export default App;
