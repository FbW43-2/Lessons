import React from 'react';
import {connect} from 'react-redux'

const Done = (props) => {
    return (
        
        <div>
            <h2>Done</h2>
            <ul>
                {props.donelist.map((elm, idx) => 
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
        donelist: state.doneList
    }
}

export default connect(mapStateToProps)(Done);