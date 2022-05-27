import "./App.css";
import Todo from "./components/todo";

function App() {
  const todos = [
    { id: 1, title: "Make Lunch", completed: false },
    { id: 2, title: "Make dinner", completed: true },
  ];
  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
