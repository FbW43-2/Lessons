import React from 'react';
import ReactDOM from 'react-dom';
import AddToDo from './components/addtodo';
import ShowToDos from './components/showtodos';
import getToDos from './api';

class App extends React.Component {

    // trick to pass value from child component to parent
    // 1- create a function/method on the parent component "mainAddTodo"
    // 2- pass this method as prop to child "addtodo"
    // 3- call the method from a child with a PARAMETER "todo"
    // 4- the parameter is going to be the value that we want to pass
    //    from child to parent

    constructor(props) {
        super(props);
        console.log('this is constructor');
    }

    // it will be called ONCE after render
    componentDidMount() {
        console.log('this is componentDidMount')
    }

    // it is going to be called after render on each update for the component
    // update means change the state or rerender the component
    componentDidUpdate() {
        console.log('this is componentDidUpdate')
    }

    // it will executed directly before deleting the component from the dom
    // used usually to clean up javascript code from other libraries or to delete the event listeners from the body
    componentWillUnmount(){
        console.log('this is componentWillUnmount')
    }


    state = {
        todoStorage: []
    }

    // method to delete element from the todoStroage
    deleteToDo = (index) => {

            // solution with splice 
        //const tempArr = this.state.todoStorage;
        //tempArr.splice(index, 1);
            // save the array on the state one more time
        //this.setState({todoStorage: tempArr});

        // solution with filter
        const tempArr = this.state.todoStorage.filter((element, idx) => index !== idx);
        this.setState({todoStorage: tempArr})
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
        console.log('this is render');
        //console.log(this.state.todoStorage);
        return (
            <>
                <h1>ToDo List</h1>
                <AddToDo addtodo={this.mainAddTodo} />
                <ShowToDos deleteItem={this.deleteToDo} todos={this.state.todoStorage}/>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));