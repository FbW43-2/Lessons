import React from 'react';
import {connect} from 'react-redux'

const Description = (props) => {
    if (props.result.status === 'SUCCESS' && props.result.selectedIdx !== -1){
        return (
            <p dangerouslySetInnerHTML={{__html: props.result.data[props.result.selectedIdx].snippet}}>
                
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