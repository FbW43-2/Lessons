import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts, getComments } from '../api';

const Posts = () => {

    const [state, setState] = useState({posts: []})

    const {id} = useParams();
    useEffect(() => {
        getPosts(id).then(data => {
            setState({posts: data})
        })

    }, [])

    const getPostComments = (postId) => {
        getComments(postId).then(data => {
            const newPosts = state.posts.map(post => {
                if (post.id === postId) {
                    post.comments = data
                }
                return post;
            }) 
            //console.log(newPosts);
            setState({posts: newPosts})
        })
    }

    return (
        <ul>
            {state.posts.map(post => 
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => {getPostComments(post.id)}}>Comments</button>
                        {/* render comments here */}
                        {post.comments? 
                        <ul>
                            {post.comments.map(comment =>
                                <li key={comment.id}>
                                    <h5>{comment.email}</h5>
                                    <h5>{comment.name}</h5>
                                    <p>{comment.body}</p>
                                </li>
                            )}
                        </ul>
                        : null}
                    </li>
            )}
        </ul>
    );
};

export default Posts;