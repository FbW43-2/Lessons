import {combineReducers} from 'redux';


const todosList = [];

const todosReducer = (todos = todosList, action) => {
    if (action.type === 'ADD_TODO') {
        todosList.push(action.payload);
        return [...todosList]
    }

    return todosList;

}

export default combineReducers({
    todos: todosReducer
})