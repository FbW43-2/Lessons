import React from 'react';
import ReactDOM from 'react-dom';
import AddToDo from './components/addtodo';
import ShowToDos from './components/showtodos';

class App extends React.Component {

    // trick to pass value from child component to parent
    // 1- create a function/method on the parent component "mainAddTodo"
    // 2- pass this method as prop to child "addtodo"
    // 3- call the method from a child with a PARAMETER "todo"
    // 4- the parameter is going to be the value that we want to pass
    //    from child to parent


    state = {
        todoStorage: []
    }

    mainAddTodo = (todo) =>{
        //console.log(todo);
        // add the new todo to the storage inside the state of the APP
        //this.setState({todoStorage: [...this.state.todoStorage, todo] });
        const tempArr = this.state.todoStorage;
        tempArr.push(todo);
        this.setState({todoStorage: tempArr});
    }
    render() {
        console.log(this.state.todoStorage);
        return (
            <>
                <h1>ToDo List</h1>
                <AddToDo addtodo={this.mainAddTodo} />
                <ShowToDos todos={this.state.todoStorage}/>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));