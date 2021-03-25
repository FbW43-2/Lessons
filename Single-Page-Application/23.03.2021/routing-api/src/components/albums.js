import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbums } from '../api'
const Albums = () => {
    const [state, setState] = useState({albums: []});
    const {id} = useParams();
    useEffect(() => {
        getAlbums(id).then(data => {
            setState({albums: data})
        })
    }, [])
    return (
        <ul>
            {state.albums.map(album => 
                <li key={album.id}>
                  <p>  {album.title}  </p>
                </li>
            )}
        </ul>
    );
};
export default Albums;