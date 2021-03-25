import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbums, getPhotos } from '../api'
const Albums = () => {
    const [state, setState] = useState({albums: []});
    const {id} = useParams();
    useEffect(() => {
        getAlbums(id).then(data => {
            setState({albums: data})
        })
    }, []);

    const getAlbumPhotos = (albumId) => {
        getPhotos(albumId).then(data => {
            const newAlbums = state.albums.map(album => {
                if (album.id === albumId) {
                    album.photos = data
                }
                return album;
            });
            setState({albums: newAlbums})

        })
    }

    return (
        <ul>
            {state.albums.map(album => 
                <li key={album.id}>
                  <p>  {album.title}  </p>
                  <button onClick={() => {getAlbumPhotos(album.id)}}>Photos</button>
                  
                </li>
            )}
        </ul>
    );
};
export default Albums;