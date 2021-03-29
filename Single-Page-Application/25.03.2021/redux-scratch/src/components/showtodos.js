import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions';
const ShowToDos = (props) => {

    const deleteBtnClick = (index) => {
        props.delete(index)
    }
    return (
        <div>
            <ul>
                {props.todolist.map((todo, idx) => 
                    <li key={idx}>
                        {todo}
                        <button onClick={() => {deleteBtnClick(idx)}}>delete</button>
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
export default connect(mapStateToProps, {delete: deleteTodo})(ShowToDos) ;