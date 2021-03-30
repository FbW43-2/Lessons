import React from 'react';
import { connect } from 'react-redux'
import { deleteDone } from '../actions'

const Done = (props) => {

    const deleteBtnClick = (idx) => {
        props.deleteDone(idx);
    }

    return (
        
        <div>
            <h2>Done</h2>
            <ul>
                {props.donelist.map((elm, idx) => 
                    <li key={idx}>
                        {elm}
                        <button onClick={() => {deleteBtnClick(idx)}}>delete</button>
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

export default connect(mapStateToProps, {deleteDone})(Done);