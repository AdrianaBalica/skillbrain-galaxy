import React, { useState } from "react";
import CreateTodoCard from "../create-todo-card/CreateTodoCard";
import TodoListCard from "../todo-list-card/TodoListCard";
import TodoModal from "../todo-modal/TodoModal";

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
  const [editingTodo, setEditingTodo] = useState(null);
  const [errors, setErrors] = useState({ title: "", description: "" });

  const validateTodo = (todo) => {
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

  const handleCreateTodo = (newTodo) => {
    if (!validateTodo(newTodo)) return false;

    const todoToAdd = {
      id: Date.now().toString(),
      ...newTodo,
      completed: false,
    };

    setTodos([...todos, todoToAdd]);
    setErrors({ title: "", description: "" });
    return true;
  };

  const handleSaveTodo = (formData, todoId) => {
    if (!validateTodo(formData)) return false;

    if (todoId) {
  
      setTodos(todos.map((t) => (t.id === todoId ? { ...t, ...formData } : t)));
    } else {
      
      const todoToAdd = {
        id: Date.now().toString(),
        ...formData,
        completed: false,
      };
      setTodos([...todos, todoToAdd]);
    }

    setIsModalOpen(false);
    setEditingTodo(null);
    setErrors({ title: "", description: "" });
    return true;
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
    setErrors({ title: "", description: "" });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTodo(null);
    setErrors({ title: "", description: "" });
  };

  return (
    <>
      <CreateTodoCard onCreateTodo={handleCreateTodo} errors={errors} />

      <TodoListCard
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
        onOpenModal={() => setIsModalOpen(true)}
      />

      <TodoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        todo={editingTodo}
        onSave={handleSaveTodo}
        errors={errors}
      />
    </>
  );
};

export default TodoManager;