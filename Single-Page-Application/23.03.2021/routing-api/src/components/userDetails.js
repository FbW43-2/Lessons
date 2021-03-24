import React from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Posts from './posts';

const UserDetails = (props) => {
    const {id} = useParams();
    const foundUser = props.users.find(user => user.id == id)
    const {url, path} = useRouteMatch()
    console.log(url);
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
                <li><Link to={`${url}/posts`}>posts</Link></li>
                <li><Link to={`${url}/todos`}>todos</Link></li>
                <li><Link to={`${url}/photos`}>Photos</Link></li>
                <li><Link to={`${url}/albums`}>Albums</Link></li>
            </ul>
            <Switch>
                <Route path={`${path}/posts`}> <Posts />  </Route>
                <Route path={`${path}/todos`}> <h1>here we need to render todos</h1>  </Route>
                <Route path={`${path}/photos`}> <h1>here we need to render photos</h1>  </Route>
                <Route path={`${path}/albums`}> <h1>here we need to render Albums</h1>  </Route>
            </Switch>
            </div>

            
            
            
        :null}
        </>
        
    );
};

export default UserDetails;