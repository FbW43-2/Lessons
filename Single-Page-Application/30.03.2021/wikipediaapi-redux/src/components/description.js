import React from 'react';
import {connect} from 'react-redux'

const Description = (props) => {
    if (props.result.staus === 'SUCCESS'){
        return (
            <p>
                {props.result.data[props.result.selectedIdx].snnippet}
            </p>
        );
    } else {
        return null
    }
    
};

const mapStateToProps = (state) => {
    return {
        result: state.results
    }
}

export default connect(mapStateToProps)(Description);