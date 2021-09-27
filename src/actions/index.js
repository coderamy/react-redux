const ADD_TODO = 'ADD_TODO';

export const addTodo = (message) =>({
    type: ADD_TODO,
    message,
    id: Math.random()
})