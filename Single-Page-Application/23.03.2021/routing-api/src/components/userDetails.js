import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetails = (props) => {
    const {id} = useParams();
    const foundUser = props.users.find(user => user.id == id)
    console.log(foundUser);
    return (
        <>
        {foundUser ?
            <div>
            <h2>User Information</h2>
            <p><strong>id:</strong> {foundUser.id}</p>
            <p><strong>Name:</strong> {foundUser.name}</p>
            <p><strong>email:</strong> {foundUser.email}</p>
            <p><strong>phone:</strong> {foundUser.phone}</p>
            <p><strong>website:</strong> {foundUser.website}</p>
            <ul>
                <li><Link to="">posts</Link></li>
                <li><Link to="">todos</Link></li>
                <li><Link to="">Photos</Link></li>
                <li><Link to="">Albums</Link></li>
            </ul>
            </div>
            
            
        :null}
        </>
        
    );
};

export default UserDetails;