import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts } from '../api';

const Posts = () => {

    const [state, setState] = useState({posts: []})

    const {id} = useParams();
    useEffect(() => {
        getPosts(id).then(data => {
            setState({posts: data})
        })

    }, [])
    return (
        <ul>
            {state.posts.map(post => 
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
            )}
        </ul>
    );
};

export default Posts;