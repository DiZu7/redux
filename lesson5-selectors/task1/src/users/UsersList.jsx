import React from 'react';
import { connect } from 'react-redux';
import '../index.scss';
import Pagination from './Pagination';
import User from './User';
import * as usersAction from './users.action';
import { currentPageSelector, usersListSelector } from './users.selectors';

const itemsPerPage = 3;

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const start = currentPage * itemsPerPage - itemsPerPage;
  const usersToDisplay = users.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goNext: usersAction.goNext,
  goPrev: usersAction.goPrev,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUserList = connector(UsersList);

export default ConnectedUserList;
