import React, { useRef } from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions'

const AddToDo = (props) => {


    const inputRef = useRef();
    const addBtnClick = () => {
        props.save(inputRef.current.value)
    }
    return (
        <div>
            <button onClick={addBtnClick}>add</button>
            <input ref={inputRef} type="text" />
        </div>
    );
};

export default connect(null, {save: addTodo})(AddToDo);