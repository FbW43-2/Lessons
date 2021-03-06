import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';

import AddToDo from './components/addtodo';
import ShowToDos from './components/showtodos';
import InProgress from './components/inprogress';
import Done from './components/done';

const App = () => {
    // const [state, setState] = useState({todosList: []})

    // const saveToDo = (todo) => {
    //     setState({todosList: [...state.todosList, todo]})
    // }

    return (
        <div>
            {/* <AddToDo save={saveToDo}/>
            <ShowToDos todolist={state.todosList}/> */}

            <AddToDo />
            <ShowToDos />
            <InProgress />
            <Done />
        </div>
    );
};

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
, document.getElementById('root'))