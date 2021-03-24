import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getToDos } from '../api';

const ToDos = () => {

    const {id} = useParams()
    const [state, setState] = useState({todos: []})
    useEffect(() => {
        getToDos(id).then(data => {
            setState({todos: data})
        })
    }, [])

    return (
        <ul>
            
            {state.todos.filter(todo => todo.completed).map(todo =>
            <li key={todo.id}>
                <p>{todo.title} <strong>{todo.completed ? 'Done' : 'not yet' }</strong></p>
            </li>
            )}

            {state.todos.filter(todo => !todo.completed).map(todo =>
            <li key={todo.id}>
                <p>{todo.title} <strong>{todo.completed ? 'Done' : 'not yet' }</strong></p>
            </li>
            )}

        </ul>
    );
};

export default ToDos;