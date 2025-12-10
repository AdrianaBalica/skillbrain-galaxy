import React, { useState } from "react";
import Card from "../card/Card";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";

const CreateTodoCard = ({ onCreateTodo, errors }) => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onCreateTodo(newTodo);
    if (success) {
      setNewTodo({ title: "", description: "" });
    }
  };

  return (
    <Card>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
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
  );
};

export default CreateTodoCard;