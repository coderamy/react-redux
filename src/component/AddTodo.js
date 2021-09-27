import React, {useState} from "react";
import { addTodo } from "../actions";
import {connect} from 'react-redux';

const AddTodo = (props) => {
    const [input, setInput] = useState('')
    function handleSubmit(e) {
    e.preventDefault();
    let input = e.target.userInput.value;
    //console.log(input)
    props.dispatch(addTodo(input));
    e.target.userInput.value = ''
    //setInput('')
  }
  return (
    <div>
      <h2>Todos App</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userInput" onChange={(e)=>setInput(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);




















