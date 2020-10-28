import React, { useState, useEffect } from 'react';

import Page from '../Page/Page';
import PageUsers from '../PageUsers/PageUsers';
import PageAlbums from '../PageAlbums/PageAlbums';
import PagePhotos from '../PagePhotos/PagePhotos';
import Loading from '../Loading/Loading';

import './App.css';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

const App = () => {
  const [currentPath, setCurrentPath] = useState('users');
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [albumId, setAlbumId] = useState(null);
  const [photos, setPhotos] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(USERS_URL)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        alert(error);
        setLoading(true);
      });
  }, []);

  return (
    <div className="app">
      <Loading
        loading={loading}
      />
      <Page
        path="users"
        currentPath={currentPath}
        innerComponent={PageUsers}
        setCurrentPath={setCurrentPath}
        users={users}
        setUserId={setUserId}
      />
      <Page
        path="albums"
        currentPath={currentPath}
        innerComponent={PageAlbums}
        setCurrentPath={setCurrentPath}
        userId={userId}
        albumsUrl={ALBUMS_URL}
        photosUrl={PHOTOS_URL}
        setPhotos={setPhotos}
        photos={photos}
        setAlbumId={setAlbumId}
        setLoading={setLoading}
      />
      <Page
        path="photos"
        currentPath={currentPath}
        innerComponent={PagePhotos}
        setCurrentPath={setCurrentPath}
        albumPhotos={photos[albumId]}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;