import React from 'react';
import {connect} from 'react-redux';
import {addDone, deleteInProgress, backProgressTodos} from '../actions'

const InProgress = (props) => {

    const doneBtnClick = (elm, idx) => {
        props.addDone(elm, idx);
    }

    const deleteBtnClick = (idx) => {
        props.deleteInProgress(idx);
    }

    const backTodosBtnClick = (idx, elm) => {
        props.backProgressTodos(idx, elm);
        
    }

    return (
        <div>
            <h2>In progress</h2>
            <ul>
                {props.progressList.map((elm, idx) =>
                <li key={idx}>
                    {elm}
                    <button onClick={() => {deleteBtnClick(idx)}}>delete</button>
                    <button onClick={() => {doneBtnClick(elm, idx)}}>Done</button>
                    <button onClick={() => {backTodosBtnClick(idx, elm)}}>Back to todos</button>
                </li>
                )}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        progressList: state.inprogressList
    }
}

export default connect(mapStateToProps, {addDone, deleteInProgress, backProgressTodos})(InProgress);