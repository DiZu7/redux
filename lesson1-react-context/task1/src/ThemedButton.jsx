import React from 'react';
import './index.scss';
import { ThemeContext } from './themes';

class ThemedButton extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        class="btn"
      ></button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
