import React from 'react';
import { connect } from 'react-redux';
import '../index.scss';
import Spinner from './Spinner';
import { isFetchingSelector, userDataSelector } from './users.selectors';

const UserInfo = ({ isFetching, userData }) => {
  if (isFetching) {
    return <Spinner />;
  }

  if (!userData) {
    return null;
  }

  const { name, location, avatar_url } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{`from ${location}`}</span>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    isFetching: isFetchingSelector(state),
    userData: userDataSelector(state),
  };
};

// const mapDispatch = {
//   goNext: usersAction.goNext,
//   goPrev: usersAction.goPrev,
// };

// const connector = connect(mapState, mapDispatch);
// const ConnectedUserList = connector(UsersList);

export default connect(mapState)(UserInfo);
