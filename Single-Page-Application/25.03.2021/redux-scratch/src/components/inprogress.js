import React from 'react';
import {connect} from 'react-redux';

const InProgress = (props) => {
    return (
        <div>
            <h2>In progress</h2>
            <ul>
                {props.progressList.map((elm, idx) =>
                <li key={idx}>
                    {elm}
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

export default connect(mapStateToProps)(InProgress);