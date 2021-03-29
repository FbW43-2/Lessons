import React from 'react';
import {connect} from 'react-redux';
import {addDone} from '../actions'

const InProgress = (props) => {

    const doneBtnClick = (elm, idx) => {
        props.addDone(elm, idx);
    }

    return (
        <div>
            <h2>In progress</h2>
            <ul>
                {props.progressList.map((elm, idx) =>
                <li key={idx}>
                    {elm}
                    <button onClick={() => {doneBtnClick(elm, idx)}}>Done</button>
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

export default connect(mapStateToProps, {addDone})(InProgress);