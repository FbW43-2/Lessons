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
        return [...todosList];
    }

    if (action.type === 'ADD_INPROGRESS') {
        todosList.splice(action.payload.idx, 1);
        return [...todosList];
    }

    if (action.type === 'BACK_PROGRESS_TODOS') {
        todosList.push(action.payload.elm)
        return [...todosList]
    }
    return todos;
}

const inprogressList = [];

const inprogressReducer = (inprogress = inprogressList, action) => {

    if (action.type === 'ADD_INPROGRESS') {
        inprogressList.push(action.payload.todo);
        return [...inprogressList];
    }
    if (action.type === 'ADD_DONE') {
        inprogressList.splice(action.payload.idx, 1);
        return [...inprogressList]
    }
    if (action.type === 'DELETE_INPROGRESS') {
        inprogressList.splice(action.payload, 1);
        return [...inprogressList]
    }
    if (action.type === 'BACK_PROGRESS_TODOS'){
        inprogressList.splice(action.payload.idx, 1);
        return [...inprogressList];
    }
    if (action.type === 'BACK_DONE_PROGRESS') {
        inprogressList.push(action.payload.elm);
        return [...inprogressList]
    }

    return inprogress;
}

const donelist = [];

const doneReducer = (done = donelist, action) => {
    if (action.type === 'ADD_DONE') {
        donelist.push(action.payload.inprogress);
        return [...donelist]
    }

    if (action.type === 'DELETE_DONE') {
        donelist.splice(action.payload, 1);
        return [...donelist]
    }

    if (action.type === 'BACK_DONE_PROGRESS') {
        donelist.splice(action.payload.idx, 1);
        return [...donelist]
    }

    return done;
}


export default combineReducers({
    todos: todosReducer,
    inprogressList: inprogressReducer,
    doneList: doneReducer
})