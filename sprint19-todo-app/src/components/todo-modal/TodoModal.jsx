import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";

const TodoModal = ({ isOpen, onClose, todo, onSave, errors }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  useEffect(() => {
    if (todo) {
      setFormData(todo);
    } else {
      setFormData({ title: "", description: "" });
    }
  }, [todo, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onSave(formData, todo ? todo.id : null);
    if (success) {
      setFormData({ title: "", description: "" });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>{todo ? "Edit Todo" : "Add Todo"}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          value={formData.title}
          placeholder="Title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={errors.title ? "input-error" : ""}
        />
        {errors.title && <p className="error-message">{errors.title}</p>}

        <TextArea
          value={formData.description}
          placeholder="Description"
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className={errors.description ? "input-error" : ""}
        />
        {errors.description && <p className="error-message">{errors.description}</p>}

        <Button type="submit">{todo ? "Save" : "Create"}</Button>
      </form>
    </Modal>
  );
};

export default TodoModal;