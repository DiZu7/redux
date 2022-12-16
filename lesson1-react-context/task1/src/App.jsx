import React from 'react';
import './index.scss';
import ThemedButton from './ThemedButton';
import { ThemeContext, themes } from './themes';

class App extends React.Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    const newTheme =
      this.state.theme === themes.light ? themes.dark : themes.light;

    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>

        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default App;
