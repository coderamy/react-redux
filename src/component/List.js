import React from 'react'
import { connect } from 'react-redux'

const List = (props) => {
    return (
        <ul>
            {props.todos.map((item)=> (
                <li key={item.id}>{item.message}</li> 
            ))}
           
        </ul>
    )
}

const result = (state) =>({
    todos: state.Todos.data
})

export default connect(result)(List);
