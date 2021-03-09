import React from 'react';
import ReactDOM from 'react-dom';

import Head from './components/head';
import './css/Main.css';
import Todo from './components/todo';


class App extends React.Component {
    render() {

        const todos = [
            {
                todo: 'Teach FBW43-2',
                done: false
            },
            {
                todo: 'Dintest Appointemnt',
                done: false
            },
            {
                todo: 'do some sport',
                done: true
            }
        ];
        let x = 5; 
        // jsx
        return (
            <div>
                <h1 className="border" >Hello React</h1>
                <Head someNumber={x} content="content from parent" />
                <Head someNumber={x} content="another content from parent" />
                <Head />
                <Todo  todolist={todos}  />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));