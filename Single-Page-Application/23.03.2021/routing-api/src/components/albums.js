import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbums, getPhotos } from '../api'
const Albums = () => {
    const [state, setState] = useState({ albums: [] });
    const { id } = useParams();
    useEffect(() => {
        getAlbums(id).then(data => {
            setState({ albums: data })
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
            setState({ albums: newAlbums })

        })
    }

    const albumsElement = state.albums.map(album => {
        let photosElement = null;
        if (album.photos) {
            photosElement =
                <div className="row">
                    {album.photos.map(photo =>
                        <div key={photo.id} className="col-md-3">
                            <div class="card" >
                                <img class="card-img-top"  src={photo.thumbnailUrl} alt={photo.title} />
                                <div class="card-body">
                                    <h5 class="card-title">{photo.title}</h5>
                                    <p class="card-text">{photo.title}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
        }
        return (
            <li key={album.id}>
                <p>  {album.title}  </p>
                <button onClick={() => { getAlbumPhotos(album.id) }}>Photos</button>
                {photosElement}
            </li>
        )
    });

    return (
        <ul>
            {albumsElement}
        </ul>
    );
};
export default Albums;