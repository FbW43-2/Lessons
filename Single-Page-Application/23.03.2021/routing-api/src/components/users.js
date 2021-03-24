import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../api';
const Users = (props) => {
    // const [state, setState] = useState({users: []})
    useEffect(() => {
        getUsers().then(data => {
            // setState({users: data});
            props.save(data);
        })
    }, [])
    return (
        <div>
            <ul>
                {props.users.map(element => 
                    <li key={element.id}>
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