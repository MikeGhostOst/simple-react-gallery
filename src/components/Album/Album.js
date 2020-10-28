import React from 'react';

import './Album.css';

const Album = ({ title, id, thumbnailUrl, size, setCurrentPath, setAlbumId, onLoadHandler }) => {
  const clickHandler = () => {
    setAlbumId(id);
    setCurrentPath('photos');
  }

  return (
    <div className="album" onClick={clickHandler} onLoad={onLoadHandler}>
      <img className="cover" src={thumbnailUrl} alt="cover"></img>
      <div className="size-container">
        <div className="size">{ size }</div>
      </div>
      <div className="title-container">
        <div className="title">{ title }</div>
      </div>
    </div>
  );
}

export default Album;