export const addTodo = (todo) => {
    return{
        type: 'ADD_TODO',
        payload: todo
    }
}

export const deleteTodo = (idx) => {
    return {
        type: 'DELETE_TODO',
        payload: idx
    }
}

export const addInProgress = (todo, idx) => {
    return {
        type: 'ADD_INPROGRESS',
        payload: {todo, idx}
    }
}

export const addDone = (inprogress, idx) => {
    return {
        type: 'ADD_DONE',
        payload: {inprogress, idx}
    }
}

export const deleteInProgress = (idx) => {
    return {
        type: 'DELETE_INPROGRESS',
        payload: idx
    }
}

export const deleteDone = (idx) => {
    return {
        type: 'DELETE_DONE',
        payload: idx
    }
}

export const backProgressTodos = (idx, elm) => {
    return {
        type: 'BACK_PROGRESS_TODOS',
        payload: {idx, elm}
    }
}

export const backDoneProgress = (idx, elm) => {
    return {
        type: 'BACK_DONE_PROGRESS',
        payload: {idx, elm}
    }
}