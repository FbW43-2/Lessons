import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../api';
const Users = () => {
    const [state, setState] = useState({users: []})
    useEffect(() => {
        getUsers().then(data => {
            setState({users: data});
        })
    }, [])
    return (
        <div>
            <ul>
                {state.users.map(element => 
                    <li>
                        <Link 
                        to={`/users/${element.id}`}>
                            {element.name}
                        </Link>
                    </li>
                    )}
            </ul>
        </div>
    );
};

export default Users;