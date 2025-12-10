import React, { useState } from "react";
import Card from "../card/Card";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import TodoItem from "../todo-item/TodoItem";
import Modal from "../modal/Modal";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

const TodoManager = () => {
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const [editTodo, setEditTodo] = useState(null);
  const [errors, setErrors] = useState({ title: "", description: "" });

  const validateForm = (todo) => {
    const newErrors = { title: "", description: "" };
    let isValid = true;

    if (!todo.title.trim()) {
      newErrors.title = "Title is required";
      isValid = false;
    }

    if (!todo.description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleCreateTodo = (e) => {
    e.preventDefault();

    if (!validateForm(newTodo)) return;

    const todoToAdd = {
      id: Date.now().toString(),
      title: newTodo.title,
      description: newTodo.description,
      completed: false,
    };

    setTodos([...todos, todoToAdd]);
    setNewTodo({ title: "", description: "" });
    setErrors({ title: "", description: "" });
    setIsModalOpen(false);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
    setErrors({ title: "", description: "" });
    setIsModalOpen(true);
  };

  const handleEditSave = (e) => {
    e.preventDefault();

    if (!validateForm(editTodo)) return;

    setTodos(todos.map((t) => (t.id === editTodo.id ? editTodo : t)));

    setEditTodo(null);
    setErrors({ title: "", description: "" });
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditTodo(null);
    setErrors({ title: "", description: "" });
  };

  return (
    <>
      <Card>
        <h2>Create Todo</h2>
        <form onSubmit={handleCreateTodo}>
          <Input
            value={newTodo.title}
            placeholder="Title"
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            className={errors.title ? "input-error" : ""}
          />
          {errors.title && <p className="error-message">{errors.title}</p>}

          <TextArea
            value={newTodo.description}
            placeholder="Description"
            onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
            className={errors.description ? "input-error" : ""}
          />
          {errors.description && <p className="error-message">{errors.description}</p>}

          <Button type="submit">Create</Button>
        </form>
      </Card>

      <Card>
        <h1>My todos</h1>

        <Button onClick={() => setIsModalOpen(true)}>Add +</Button>

        <div className="list-container">
          {todos
            .filter((t) => !t.completed)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                description={todo.description}
                completed={todo.completed}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
                onEdit={() => handleEdit(todo)}
              />
            ))}
        </div>

        <div className="separator"></div>

        <h2>Completed</h2>

        <div className="list-container">
          {todos
            .filter((t) => t.completed)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                description={todo.description}
                completed={todo.completed}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
                onEdit={() => handleEdit(todo)}
              />
            ))}
        </div>
      </Card>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>{editTodo ? "Edit Todo" : "Add Todo"}</h2>

        {editTodo ? (
          <form onSubmit={handleEditSave}>
            <Input
              value={editTodo.title}
              onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })}
              className={errors.title ? "input-error" : ""}
            />
            {errors.title && <p className="error-message">{errors.title}</p>}

            <TextArea
              value={editTodo.description}
              onChange={(e) =>
                setEditTodo({
                  ...editTodo,
                  description: e.target.value,
                })
              }
              className={errors.description ? "input-error" : ""}
            />
            {errors.description && <p className="error-message">{errors.description}</p>}

            <Button type="submit">Save</Button>
          </form>
        ) : (
          <form onSubmit={handleCreateTodo}>
            <Input
              value={newTodo.title}
              placeholder="Title"
              onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
              className={errors.title ? "input-error" : ""}
            />
            {errors.title && <p className="error-message">{errors.title}</p>}

            <TextArea
              value={newTodo.description}
              placeholder="Description"
              onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
              className={errors.description ? "input-error" : ""}
            />
            {errors.description && <p className="error-message">{errors.description}</p>}

            <Button type="submit">Create</Button>
          </form>
        )}
      </Modal>
    </>
  );
};

export default TodoManager;