import React from 'react';

import './Photo.css';

const Photo = ({ thumbnailUrl, setPopupPhotoId, id, onLoadHandler, title }) => {
  return (
    <div className="photo">
      <div className="title-container">
        <div className="title">{ title }</div>
      </div>
      <img
        src={thumbnailUrl}
        alt={id}
        onClick={() => setPopupPhotoId(id)}
        onLoad={onLoadHandler}
      ></img>
    </div>
  )
}

export default Photo;