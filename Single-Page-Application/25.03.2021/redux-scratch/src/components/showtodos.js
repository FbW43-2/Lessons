import React from 'react';

const ShowToDos = (props) => {
    return (
        <div>
            <ul>
                {props.todolist.map((todo, idx) => 
                    <li key={idx}>
                        {todo}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ShowToDos;