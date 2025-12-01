import React from "react";
import "./TodoItem.css";
import CheckBox from "../checkbox/CheckBox";

const TodoItem = (props) => {
    const { id, title, description, completed, onToggle, onDelete, onEdit } = props;

    return (
        <div className={`todo-item ${completed && "todo-completed"}`}>
            <div className="todo-item-header">
                <div className="title-area">
                    <CheckBox
                        checked={completed}
                        onChange={() => onToggle(id)}
                    />
                    <h4>{title}</h4>
                </div>
                <div className="todo-actions">
                    <button className="edit-btn" onClick={onEdit}>
                        ✏️
                    </button>
                    <button className="delete-btn" onClick={() => onDelete(id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            <div className="separator"></div>

            <p>{description}</p>
        </div>
    );
};

export default TodoItem;