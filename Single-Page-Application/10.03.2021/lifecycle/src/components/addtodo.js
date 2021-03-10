import React from 'react';

class AddToDo extends React.Component {

    state = {
        todoValue: ''
    }

    addTodoClick = () => {
        //alert(this.props.someProp)
        this.props.addtodo(this.state.todoValue)
        this.setState({todoValue: ''});
    }

    render() {
        return (
            <>
            <input 
            onChange={(e) => {this.setState({todoValue: e.target.value})}}
            value={this.state.todoValue}
            />

            <button onClick={this.addTodoClick}>Add ToDo</button>
            </>
        )
    }
}

export default AddToDo;