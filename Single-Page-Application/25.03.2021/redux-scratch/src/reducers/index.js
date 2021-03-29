import {combineReducers} from 'redux';


const todosList = [
    'this is thing that I should do',
    'this is another thing that I should do'
];

const todosReducer = (todos = todosList, action) => {
    if (action.type === 'ADD_TODO') {
        todosList.push(action.payload);
        return [...todosList]
    }
    if (action.type === 'DELETE_TODO') {
        todosList.splice(action.payload, 1);
        return [...todosList]
    }

    return todos;

}

export default combineReducers({
    todos: todosReducer
})