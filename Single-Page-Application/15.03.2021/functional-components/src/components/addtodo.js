import React, {useState} from 'react';

const AddToDo = () => {
    // hook useState
    // 1- create intial state object
    // 2- state array destructuring using useState
    const initState ={
        todoValue: ''
    };

    const [state, setState] = useState(initState);

    return(
        <>
        <input
        value={state.todoValue} 
        onChange={(e) => {setState({todoValue: e.target.value})}}
        type="text" 
        placeholder="enter To Do" 
        />
        <button>add</button>
        </>
    )
}

export default AddToDo;