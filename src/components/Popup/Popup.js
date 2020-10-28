import React, { useEffect } from 'react';

import './Popup.css';

const Popup = ({ photos, setPopupPhotoId, popupPhotoId, setLoading }) => {
  const index = photos.findIndex(photo => photo.id === popupPhotoId);
  const isLeftButton = index !== 0;
  const isRightButton = index !== (photos.length - 1);
  const photo = photos[index];

  useEffect(() => {
    if (popupPhotoId) {
      setLoading(true);
    }
  }, [setLoading, popupPhotoId]);

  return (
    popupPhotoId
    ?
    <div className="popup full-screen flex app-background">
      <div className="container margin-auto">
        <button
          type="button"
          onClick={() => setPopupPhotoId(photos[index - 1].id)}
          className={'left-button no-button-styles ' + (isLeftButton ? '' : 'visibility-hidden')}>

          {'<'}
        </button>

        <div className="picture-container">
          <img src={photo.url} alt={photo.id} onLoad={() => setLoading(false)}></img>

          <div className="title-container">
            <div className="title">{ photo.title }</div>
          </div>

          <button
            className="close-button no-button-styles"
            type="button"
            onClick={() => setPopupPhotoId(null)}>
            
              Close
          </button>
        </div>

        <button
          type="button"
          onClick={() => setPopupPhotoId(photos[index + 1].id)}
          className={'right-button no-button-styles ' + (isRightButton ? '' : 'visibility-hidden')}>
  
          {'>'}
        </button>
      </div>
    </div>
    :
    null
  )
}

export default Popup;