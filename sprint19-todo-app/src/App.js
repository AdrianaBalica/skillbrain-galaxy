import React from "react";
import TodoManager from "./components/todo-manager/TodoManager";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <TodoManager />
      </div>
    </div>
  );
}

export default App;