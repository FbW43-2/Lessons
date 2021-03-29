import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo, addInProgress} from '../actions';
const ShowToDos = (props) => {

    const deleteBtnClick = (index) => {
        props.delete(index)
    }

    const addInProgressBtnClick = (todo, idx) => {
        props.addInProgress(todo, idx);
        //props.delete(idx)
    }
    return (
        <div>
            <h2>ToDos</h2>
            <ul>
                {props.todolist.map((todo, idx) => 
                    <li key={idx}>
                        {todo}
                        <button onClick={() => {deleteBtnClick(idx)}}>delete</button>
                        <button onClick={() => {addInProgressBtnClick(todo, idx)}}>in progress</button>
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
export default connect(mapStateToProps, {delete: deleteTodo, addInProgress})(ShowToDos) ;