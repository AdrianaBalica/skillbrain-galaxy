# Todo App

Learn React by implementing a **Todo App** alongside your Frontend mentor as a part of the React course from SkillBrain©.

Building a Todo App is easy and does not take much time, but it teaches you some important concepts which are very important for any developer.

Check the docs below before proceeding to your task 👉🏻 Git Helper, Project Setup and Rules.

---

## Prerequisites

Since these are your first weeks with React, we will keep things simple. The starting code already includes the core components and styles—the building blocks you will need to implement this task.

Make sure you understand the role of these components as you are going to use them in your implementation.

.
├── node_modules
├── README.md
├── public
├── package-lock.json
├── package.json
└── src
    ├── reportWebVitals.js
    ├── App.css
    ├── index.js
    ├── index.css
    ├── components // 👈🏻 here are the core components.
    │   ├── card
    │   ├── todo-item
    │   ├── input
    │   ├── checkbox
    │   ├── button
    │   ├── add-todo
    │   └── modal
    └── App.jsx // 👈🏻 here is the starting point.


---

## Task Requirements

💡 The requirements of the task as well as a description of the project structure can be found in the accompanying video.

In software development, a **user story** is an actionable goal from the perspective of the user. Defining user stories before you begin your work will help you focus your effort.

---

## ✅ User Stories

### 1️⃣ View all todos in two separate lists: active and completed ⭐️

- Use a state to store your todos. Initialize it from the `TODOS_MOCK` array found in `App.js`.
- Display the todos from your state with the `<TodoItem />` component.
- Initially, the information displayed by `<TodoItem />` is static.
- Make this component reusable and pass the displayed data dynamically through props.
- We added one prop for you: `completed`, which is responsible for styling completed vs active items.
- Display todos in two separate lists depending on the `completed` value.

**Hint:** Use JavaScript array methods `map()` and `filter()` to display and separate todos.

---

### 2️⃣ Add todos ⭐️

- Implement a form to add todos.
- Update the form state on input change.
- Handle form submit to add the new item to the todo list.

#### 2.1 Modal Form ⭐️

- The form will be displayed inside the `Modal` component (`src/components/modal/Modal.jsx`).
- Clicking on the **ADD +** button will open the modal.
- Add a state to control the modal (open/close).

---

### 3️⃣ Mark todo as complete/done ⭐️⭐️

- By checking/unchecking the checkbox, the todo item will update its status.
- Completed todos will move to the completed list, and active todos will remain in the active list.

---

### 4️⃣ Delete any task ⭐️

- Clicking on the delete icon will remove the corresponding item.

---

### 5️⃣ Edit any task ⭐️⭐️⭐️

- Clicking on the edit icon will open the modal and prefill the form fields with the corresponding data.
- User can edit the fields and submit the form.
- The todo item will be updated with the new data.
