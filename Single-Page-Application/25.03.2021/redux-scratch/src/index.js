import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddToDo from './components/addtodo';
import ShowToDos from './components/showtodos';

const App = () => {
    const [state, setState] = useState({todosList: []})

    const saveToDo = (todo) => {
        setState({todosList: [...state.todosList, todo]})
    }

    return (
        <div>
            <AddToDo save={saveToDo}/>
            <ShowToDos todolist={state.todosList}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'))