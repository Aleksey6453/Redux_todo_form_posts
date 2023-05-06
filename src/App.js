import './App.css';
import User from './components/User'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import Posts from './components/Posts'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="block">
          <h1>User</h1>
          <User />
        </div>
        <div className="block">
          <h1>Todo</h1>
          <Form />
          <TodoItem />
        </div>
        <div className="block">
          <h1>Posts</h1>
          <Posts />
        </div>
      </div> 
    </div>
  );
}

export default App;
