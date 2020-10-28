import React from 'react';

import './User.css';

const User = ({ name, id, setCurrentPath, setUserId }) => {
  const clickHandler = () => {
    setUserId(id);
    setCurrentPath('albums');
  }

  return (
    <div className="user" onClick={clickHandler}>
      <span>{name}</span>
    </div>
  )
}

export default User;