import React from 'react';
import ReactDOM from 'react-dom';
import AddToDo from './components/addtodo';


const App = () => {
    return (
        <>
            <h1>Functional Component</h1>
            <AddToDo />

        </>
    )
}

// create addToDo component and import it to the index.js
// it suppose to contain only input text and a add button 


ReactDOM.render(<App />, document.getElementById('root'));