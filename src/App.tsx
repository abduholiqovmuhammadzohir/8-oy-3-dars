import TodoList from "./components/TodoList";
import "./CSS/App.css"
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
        <h1>What To Do</h1>
        </div>
     
      </div>
      <TodoList />
    </div>
  );
}

export default App;
