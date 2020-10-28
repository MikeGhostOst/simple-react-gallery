import React, { useState, useEffect } from 'react';

import Album from '../Album/Album';

import './PageAlbums.css';

const PageAlbums = ({ userId, albumsUrl, photosUrl, setPhotos, photos, setCurrentPath, setAlbumId, setLoading }) => {
  const [albums, setAlbums] = useState([]);
  const [loadCounter, setLoadCounter] = useState(0);

  const goBack = () => {
    setAlbums([]);
    setPhotos({});
    setLoadCounter(0);
    setCurrentPath('users');
  }

  const onLoadHandler = () => {
    setLoadCounter(prevLoadCounter => (prevLoadCounter + 1));
  }

  useEffect(() => {
    if (userId === null) return;

    setLoading(true);

    fetch(albumsUrl + '?userId=' + userId)
      .then(response => response.json())
      .then(data => {
        setAlbums(data);

        return Promise.all(
          data.map(album => 
            fetch(photosUrl + '?albumId=' + album.id)
              .then(response => response.json()))
        );
      })
      .then(data => {
        setPhotos( data.reduce(
          (photos, albumPhotos) => ({ ...photos, [albumPhotos[0].albumId]: albumPhotos }), {}));

        setLoading(false);
      })
      .catch(error => {
        alert(error);
        setLoading(true);
      });
  }, [userId, albumsUrl, photosUrl, setLoading, setPhotos]);

  useEffect(() => {
    const numberOfAlbums = Object.entries(photos).length;

    if (loadCounter === numberOfAlbums) {
      setLoading(false);
    }
  }, [photos, loadCounter, setLoading]);

  return (
    <div className="page-albums full-screen app-background flex">
      <div className="container window-background margin-auto">
        <div className="title">Albums</div>
        <div className="albums">
          {Object.entries(photos).length
          ?
          albums.map(album =>
            <Album
              key={album.id}
              title={album.title}
              id={album.id}
              thumbnailUrl={photos[album.id][0].thumbnailUrl}
              size={photos[album.id].length}
              setCurrentPath={setCurrentPath}
              setAlbumId={setAlbumId}
              onLoadHandler={onLoadHandler}
            />)
          :
          null}
        </div>
        <div className="button-container flex">
          <button className="margin-auto" type="button" onClick={goBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default PageAlbums;