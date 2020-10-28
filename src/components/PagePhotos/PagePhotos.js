import React, { useState, useEffect } from 'react';

import Photo from '../Photo/Photo';
import Popup from '../Popup/Popup';

import './PagePhotos.css';

const PagePhotos = ({ setCurrentPath, albumPhotos, setLoading }) => {
  const [popupPhotoId, setPopupPhotoId] = useState(null);
  const [loadCounter, setLoadCounter] = useState(0);

  const goBack = () => {
    setPopupPhotoId(null);
    setLoadCounter(0);
    setCurrentPath('albums');
  }

  const onLoadHandler = () => {
    setLoadCounter(prevLoadCounter => (prevLoadCounter + 1));
  }

  useEffect(() => {
    if (albumPhotos) {
      setLoading(true);
    }
  }, [albumPhotos, setLoading]);
  
  useEffect(() => {
    if (albumPhotos && loadCounter === albumPhotos.length) {
      setLoading(false);
    }
  }, [loadCounter, albumPhotos, setLoading]);

  return (
      albumPhotos
      ?
      <div className="page-photos full-screen app-background flex">
        <div className="container window-background margin-auto">
          <div className="title">Photos</div>
          <div className="photos">
            {albumPhotos.map(photo =>
              <Photo
                key={photo.id}
                id={photo.id}
                thumbnailUrl={photo.thumbnailUrl}
                setPopupPhotoId={setPopupPhotoId}
                onLoadHandler={onLoadHandler}
                title={photo.title}
              />)}
          </div>
          <Popup
            photos={albumPhotos}
            popupPhotoId={popupPhotoId}
            setPopupPhotoId={setPopupPhotoId}
            setLoading={setLoading}
          />
          <div className="button-container flex">
            <button className="margin-auto" type="button" onClick={goBack}>Back</button>
          </div>
        </div>
      </div>
      :
      null
  );
}

export default PagePhotos;