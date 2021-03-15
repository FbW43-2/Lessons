import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import AddToDo from './components/addtodo';
import ShowToDos from './components/showtodos';


const App = () => {

    const initState = {
        todoList: [
            'teach FBW43-2',
            'meeting with Michal',
            'Teachers meeting'
        ]
    }

    const addToDo = (todo) => {
        setState({
            todoList: [...state.todoList, todo]
        })
    }

    const [state, setState] = useState(initState);
    return (
        <>
            <h1>Functional Component</h1>
            <AddToDo add={addToDo}/>
            <ShowToDos list={state.todoList}/>
        </>
    )
}

// create addToDo component and import it to the index.js
// it suppose to contain only input text and a add button 


ReactDOM.render(<App />, document.getElementById('root'));