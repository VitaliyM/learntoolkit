import './App.css';
import Todolist from './components/listTodo/Todolist';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <Users />
      <Todolist />
    </div>
  );
}

export default App;
