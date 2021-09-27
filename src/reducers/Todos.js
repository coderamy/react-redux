
const initialState = {
    data: []
}

const Todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                data:[
                    ...state.data,{
                        message: action.message,
                        id: action.id
                    }
                ]
            }
        default:
            return state;
    }
}
export default Todos;