
const initialState = {
    data: []
}

const Todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                data:[
                    {
                        message: action.message,
                        id: action.id
                    },                    
                    ...state.data
                ]
            }
        default:
            return state;
    }
}
export default Todos;