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