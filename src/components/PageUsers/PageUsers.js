import React from 'react';

import User from '../User/User';

import './PageUsers.css';

const PageUsers = ({ users, setCurrentPath, setUserId }) => {
  return (
    <div className="page-users full-screen app-background flex">
      <div className="container window-background margin-auto">
        <div className="title">Users</div>
        <div className="users">
          {users.map(user =>
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              setCurrentPath={setCurrentPath}
              setUserId={setUserId}
            />)}
        </div>
      </div>
    </div>
  );
}

export default PageUsers;