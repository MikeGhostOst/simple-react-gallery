import React from 'react';

import './Loading.css';

const Loading = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className="loading full-screen app-background flex">
      <div className="container margin-auto">
        Loading...
      </div>
    </div>
  );
}

export default Loading;