import React from "react";
import Card from "../card/Card";
import Button from "../button/Button";
import TodoItem from "../todo-item/TodoItem";

const TodoListCard = ({ todos, onToggle, onDelete, onEdit, onOpenModal }) => {
  const activeTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  return (
    <Card>
      <h1>My todos</h1>
      <Button onClick={onOpenModal}>Add +</Button>

      <div className="list-container">
        {activeTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            onToggle={() => onToggle(todo.id)}
            onDelete={() => onDelete(todo.id)}
            onEdit={() => onEdit(todo)}
          />
        ))}
      </div>

      <div className="separator"></div>

      <h2>Completed</h2>

      <div className="list-container">
        {completedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            onToggle={() => onToggle(todo.id)}
            onDelete={() => onDelete(todo.id)}
            onEdit={() => onEdit(todo)}
          />
        ))}
      </div>
    </Card>
  );
};

export default TodoListCard;