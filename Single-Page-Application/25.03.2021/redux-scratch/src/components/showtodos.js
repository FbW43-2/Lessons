import React from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => {
    return ({
        todolist: state.todos
    })
}

export default connect(mapStateToProps)(ShowToDos) ;