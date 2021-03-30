import React from 'react';
import { connect } from 'react-redux'
import { deleteDone, backDoneProgress } from '../actions'

const Done = (props) => {

    const deleteBtnClick = (idx) => {
        props.deleteDone(idx);
    }

    const backProgressBtnClick = (idx, elm) => {
        props.backDoneProgress(idx, elm);
    }

    return (
        
        <div>
            <h2>Done</h2>
            <ul>
                {props.donelist.map((elm, idx) => 
                    <li key={idx}>
                        {elm}
                        <button onClick={() => {deleteBtnClick(idx)}}>delete</button>
                        <button onClick={() => {backProgressBtnClick(idx, elm)}}>Back to inprogress</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        donelist: state.doneList
    }
}

export default connect(mapStateToProps, {deleteDone, backDoneProgress})(Done);