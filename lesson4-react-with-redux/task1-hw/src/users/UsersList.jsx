import React from 'react';
import { connect } from 'react-redux';
import '../index.scss';
import Pagination from './Pagination';
import User from './User';
import * as usersAction from './users.action';

class UsersList extends React.Component {
	
  getPaginatedData = data => {
    const startIndex = this.props.currentPage * 3 - 3;
    const endIndex = startIndex + 3;
    return data.slice(startIndex, endIndex);
  };

  render() {
    const { users, currentPage, goNext, goPrev } = this.props;
    return (
      <div>
        <Pagination
          goPrev={goPrev}
          goNext={goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={3}
        />
        <ul className="users">
          {this.getPaginatedData(users).map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage + 1,
  };
};

const mapDispatch = {
  goNext: usersAction.goNext,
  goPrev: usersAction.goPrev,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUserList = connector(UsersList);

export default ConnectedUserList;
