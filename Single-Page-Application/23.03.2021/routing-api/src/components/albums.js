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
        const foundAlbum = state.albums.find(album => album.id === albumId)
        if(!foundAlbum.show){
        getPhotos(albumId).then(data => {
            const newAlbums = state.albums.map(album => {
                if (album.id === albumId) {
                    album.photos = data;
                    album.show = true;
                }
                return album;
            });
            setState({ albums: newAlbums })
        })
    } else {
        const newAlbums = state.albums.map(album => {
            if(album.id === albumId) {
                foundAlbum.show = false;
            }
            return album;
        })
        setState({albums: newAlbums})
    }
    }

    const albumsElement = state.albums.map(album => {
        let photosElement = null;
        if (album.photos && album.show) {
            photosElement =
                <div className="row">
                    {album.photos.map(photo =>
                        <div key={photo.id} className="col-md-3">
                            <div className="card" >
                                <img className="card-img-top"  src={photo.thumbnailUrl} alt={photo.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{photo.title}</h5>
                                    <p className="card-text">{photo.title}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
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