import './App.css';
import Todolist from './components/listTodo/Todolist';
import Posts from './components/posts/Posts';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <Users />
      <Todolist />
      <Posts />
    </div>
  );
}

export default App;
