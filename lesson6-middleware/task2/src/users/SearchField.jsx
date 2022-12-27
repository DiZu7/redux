import React from 'react';
import { connect } from 'react-redux';
import '../index.scss';
import * as usersActions from './users.action';

class SearchField extends React.Component {
  state = {
    userName: '',
  };

  handleChange = e => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleUserSearch = () => {
    this.props.showSpinner();
    this.props.fetchUserData(this.state.userName);
  };
  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

// const mapState = state => {
//
// };

const mapDispatch = {
  showSpinner: usersActions.showSpinner,
  userDataRecieved: usersActions.userDataRecieved,
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
