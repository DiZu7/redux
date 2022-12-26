import React from 'react';
import { connect } from 'react-redux';
import '../index.scss';
import Filter from './Filter';
import User from './User';
import { filter } from './users.action';
import { filteredUsersList, filterTextSelector } from './users.selectors';

class UsersList extends React.Component {
  handleChange = e => {
    this.props.filter(e.target.value);
  };

  render() {
    const { users, filterText } = this.props;
    return (
      <div>
        <Filter filterText={filterText} count={users.length} onChange={this.handleChange} />
        <ul className="users">
          {users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: filteredUsersList(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  filter: filter,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUserList = connector(UsersList);

export default ConnectedUserList;
