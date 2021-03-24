import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/users';
import UserDetails from './components/userDetails';

const App = () => {
    const [state, setState] = useState({users: []});
    const saveUsers = (data) => {
        setState({users: data})
    }
    return (
        <Router>
            <Link to="/users">Users</Link>
            <Switch>
                <Route exact path="/users" >
                    <Users 
                    save={saveUsers} 
                    users={state.users}/>
                </Route>
                <Route path="/users/:id">
                    <UserDetails users={state.users} />
                </Route>
            </Switch>
        </Router>
       
    );
};

ReactDOM.render(<App />, document.getElementById('root'));