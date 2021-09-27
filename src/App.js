//import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store';
import AddTodo from './component/AddTodo';
import List from './component/List';

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <List />
    </Provider>
  );
}

export default App;
